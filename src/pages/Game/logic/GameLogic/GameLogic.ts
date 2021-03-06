import redux from 'redux';

import { hasGamepadAPI } from 'pages/Game/logic/utils/hasGamepadApi';

import { Player } from 'pages/Game/logic/Player';
import { Rock } from 'pages/Game/logic/Rock';
import { increaseGameScore, reduceGameLives } from 'actions/gameActions';
import { Bullet } from '../Bullet';

import { Explosion } from '../explosion';

export type GamepadCommands = {
  up?: boolean;
  right?: boolean;
  down?: boolean;
  left?: boolean;
  fire?: boolean;
  pause?: boolean;
};

export class GameLogic {
  private canvas: HTMLCanvasElement | null;

  private ctx: CanvasRenderingContext2D | null;

  private keysDown: Record<string, boolean>;

  private gamepadCommands: GamepadCommands;

  private gameFrame: number;

  private player: Player | null;

  private obstacles: Rock[];

  private bullets: Bullet[];

  private explosions: Explosion[];

  public dispatch: redux.Dispatch<any> | null;

  private isPause: boolean;

  private isStarted: boolean;

  private gamepadIndex: number;

  private pauseCallback: VoidFunction;

  private theme: string;

  constructor() {
    this.keysDown = {};
    this.gamepadCommands = {};
    this.canvas = null;
    this.ctx = null;
    this.gameFrame = 0;
    this.player = null;
    this.obstacles = [];
    this.bullets = [];
    this.explosions = [];
    this.isPause = false;
    this.dispatch = null;
    this.isStarted = false;
    this.gamepadIndex = undefined;
    this.pauseCallback = () => {};
    this.theme = 'natural';
  }

  initialize(dispatch: redux.Dispatch<any>, pauseCallback: VoidFunction, theme: string): void {
    this.dispatch = dispatch;
    this.canvas = document.getElementById('game') as HTMLCanvasElement;
    this.ctx = this.canvas.getContext('2d');
    this.canvas.width = this.canvas.offsetWidth;
    this.canvas.height = this.canvas.offsetHeight;
    this.isStarted = true;
    this.pauseCallback = pauseCallback;
    this.theme = theme;

    window.addEventListener('keydown', this.onKeyDown);

    window.addEventListener('keyup', this.onKeyUp);
    if (!this.player) {
      this.player = new Player(this.canvas, this.theme);
    }

    window.addEventListener('gamepadconnected', this.handleGamepadConnect);

    this.animate();
  }

  deinitialize(): void {
    this.gameFrame = 0;
    this.obstacles = [];
    this.bullets = [];
    this.explosions = [];
    this.isStarted = false;
    this.gamepadIndex = undefined;
    this.pauseCallback = () => {};
    this.player = null;

    window.removeEventListener('keydown', this.onKeyDown);

    window.removeEventListener('keyup', this.onKeyUp);

    window.removeEventListener('gamepadconnected', this.handleGamepadConnect);
  }

  handleGamepadConnect = (event: GamepadEvent): void => {
    this.gamepadIndex = event.gamepad.index;
  };

  handleGamepadControls = (): void => {
    if (!hasGamepadAPI() || this.gamepadIndex === undefined || this.gamepadIndex === null) {
      return;
    }

    const gamepad = navigator.getGamepads()[this.gamepadIndex];

    // buttons placement to index
    // see: https://github.com/w3c/gamepad/blob/gh-pages/standard_gamepad.svg
    const isFireButtonPressed = gamepad?.buttons[0].pressed;
    const isPauseButtonPressed = gamepad?.buttons[9].pressed;
    const isUpButtonPressed = gamepad?.buttons[12].pressed;
    const isDownButtonPressed = gamepad?.buttons[13].pressed;
    const isLeftButtonPressed = gamepad?.buttons[14].pressed;
    const isRightButtonPressed = gamepad?.buttons[15].pressed;

    if (isFireButtonPressed && !this.gamepadCommands.fire) {
      this.addBullet();
    }

    if (isPauseButtonPressed && !this.gamepadCommands.pause) {
      this.pauseCallback();
    }

    this.gamepadCommands = {
      up: isUpButtonPressed,
      right: isRightButtonPressed,
      down: isDownButtonPressed,
      left: isLeftButtonPressed,
      fire: isFireButtonPressed,
    };
  };

  addBullet = (): void => {
    this.bullets.push(new Bullet(this.canvas, this.player, this.theme));
  };

  onKeyDown = (event: KeyboardEvent): void => {
    if (!this.player || !this.ctx || !this.canvas) {
      return;
    }
    if (event.key === ' ') {
      this.addBullet();
    }
    this.keysDown[event.key] = true;
  };

  onKeyUp = (event: KeyboardEvent): void => {
    delete this.keysDown[event.key];
  };

  handleBullets(): void {
    if (!this.player || !this.ctx) {
      return;
    }

    for (let i = 0; i < this.bullets.length; i += 1) {
      this.bullets[i].update();
      this.bullets[i].draw(this.ctx);
    }
    for (let i = 0; i < this.bullets.length; i += 1) {
      if (this.bullets[i].y < 0) {
        this.bullets.splice(i, 1);
      }
    }
  }

  handleObstacles(): void {
    if (!this.player || !this.ctx || !this.canvas || !this.dispatch) {
      return;
    }

    for (let i = 0; i < this.obstacles.length; i += 1) {
      this.obstacles[i].update(this.player);
      this.obstacles[i].draw(this.ctx);
    }

    for (let i = 0; i < this.obstacles.length; i += 1) {
      if (this.canvas && this.obstacles[i].y > this.canvas.height * 3) {
        this.obstacles.splice(i, 1);
      }
    }
    for (let i = 0; i < this.obstacles.length; i += 1) {
      if (this.obstacles[i].distance < this.obstacles[i].radius + this.player.radius) {
        const explosion = new Explosion(this.obstacles[i], this.gameFrame, this.theme);
        this.explosions.push(explosion);
        this.dispatch(reduceGameLives());
        this.obstacles.splice(i, 1);
      }
    }

    for (let i = 0; i < this.obstacles.length; i += 1) {
      for (let j = 0; j < this.bullets.length; j += 1) {
        if (
          Math.abs(this.obstacles[i]?.x + 135 - this.bullets[j].x) < 50 &&
          Math.abs(this.obstacles[i].y + 50 - this.bullets[j].y) < 130
        ) {
          const explosion = new Explosion(this.obstacles[i], this.gameFrame, this.theme);
          this.explosions.push(explosion);
          this.obstacles.splice(i, 1);
          this.bullets.splice(j, 1);
          this.dispatch(increaseGameScore());
        }
      }
    }

    if (this.gameFrame % 50 === 0) {
      this.obstacles.push(new Rock(this.canvas, this.theme));
    }
  }

  handleExplosions(): void {
    if (!this.ctx || !this.player) {
      return;
    }

    for (let i = 0; i < this.explosions.length; i += 1) {
      this.explosions[i].draw(this.ctx);
      if (Math.abs(this.gameFrame - this.explosions[i].timeStamp) > 5) {
        this.explosions.splice(i, 1);
      }
    }
  }

  togglePause(): void {
    this.isPause = !this.isPause;
  }

  restart(): void {
    this.gameFrame = 0;
    this.obstacles = [];
    this.bullets = [];
    this.explosions = [];
  }

  animate = (): void => {
    if (!this.ctx || !this.player || !this.canvas || !this.isStarted) {
      return;
    }

    this.handleGamepadControls();

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.handleObstacles();
    this.player.update(this.canvas, this.keysDown, this.gamepadCommands);
    this.player.draw(this.ctx);
    this.handleBullets();
    this.handleExplosions();

    if (!this.isPause) {
      this.gameFrame += 1;
      if (this.gameFrame >= Number.MAX_SAFE_INTEGER) {
        this.gameFrame = 0;
      }
      requestAnimationFrame(this.animate);
    }
  };
}

export const gameInst = new GameLogic();

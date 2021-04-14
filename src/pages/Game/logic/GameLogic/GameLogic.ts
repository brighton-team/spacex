import { Player } from 'pages/Game/logic/Player';
import { Rock } from 'pages/Game/logic/Rock';
import { Bullet } from '../Bullet';

import imageSrc from './img/ex2.png';
import { Explosion } from '../explosion';

const image = new Image();
image.src = imageSrc;

export class GameLogic {
  private canvas: HTMLCanvasElement;

  private ctx: CanvasRenderingContext2D | null;

  private keysDown: Record<string, boolean>;

  private gameFrame: number;

  private player: Player | null;

  private obstacles: Rock[];

  private bullets: Bullet[];

  private explosions: Explosion[];

  constructor() {
    this.keysDown = {};
    this.canvas = document.getElementById('game') as HTMLCanvasElement;
    this.ctx = null;
    this.gameFrame = 0;
    this.player = null;
    this.obstacles = [];
    this.bullets = [];
    this.explosions = [];
  }

  initialize(): void {
    this.ctx = this.canvas.getContext('2d');
    this.canvas.width = this.canvas.offsetWidth;
    this.canvas.height = this.canvas.offsetHeight;

    window.addEventListener('keydown', this.onKeyDown);

    window.addEventListener('keyup', this.onKeyUp);

    this.player = new Player(this.canvas);

    this.animate();
  }

  deinitialize(): void {
    window.removeEventListener('keydown', this.onKeyDown);

    window.removeEventListener('keyup', this.onKeyUp);
  }

  onKeyDown = (event: KeyboardEvent): void => {
    if (!this.player || !this.ctx) {
      return;
    }
    if (event.key === ' ') {
      this.bullets.push(new Bullet(this.canvas, this.player));
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
    if (!this.player || !this.ctx) {
      return;
    }

    for (let i = 0; i < this.obstacles.length; i += 1) {
      this.obstacles[i].update(this.player);
      this.obstacles[i].draw(this.ctx);
    }

    for (let i = 0; i < this.obstacles.length; i += 1) {
      if (this.obstacles[i].y > this.canvas.height * 2) {
        this.obstacles.splice(i, 1);
      }
    }
    for (let i = 0; i < this.obstacles.length; i += 1) {
      if (this.obstacles[i].distance < this.obstacles[i].radius + this.player.radius) {
        this.obstacles.splice(i, 1);
      }
    }

    for (let i = 0; i < this.obstacles.length; i += 1) {
      for (let j = 0; j < this.bullets.length; j += 1) {
        if (
          Math.abs(this.obstacles[i].x + 135 - this.bullets[j].x) < 50 &&
          Math.abs(this.obstacles[i].y + 50 - this.bullets[j].y) < 130
        ) {
          const expl = new Explosion(this.obstacles[i], this.gameFrame);
          this.explosions.push(expl);
          // expl.draw(this.ctx);
          // this.ctx.drawImage(image, this.obstacles[i].x, this.obstacles[i].y, 135, 135);
          this.obstacles.splice(i, 1);
          this.bullets.splice(j, 1);
        }
      }
    }

    if (this.gameFrame % 50 === 0) {
      this.obstacles.push(new Rock(this.canvas));
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

  animate = (): void => {
    if (!this.ctx || !this.player) {
      return;
    }

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.handleObstacles();
    this.player.update(this.canvas, this.keysDown);
    this.player.draw(this.ctx);
    this.handleBullets();
    this.handleExplosions();

    this.gameFrame += 1;
    if (this.gameFrame >= Number.MAX_SAFE_INTEGER) {
      this.gameFrame = 0;
    }

    requestAnimationFrame(this.animate);
  };
}

import { Player } from 'pages/Game/logic/Player';
import { Rock } from 'pages/Game/logic/Rock';

export class GameLogic {
  private canvas: HTMLCanvasElement;

  private ctx: CanvasRenderingContext2D | null;

  private keysDown: Record<string, boolean>;

  private gameFrame: number;

  private player: Player | null;

  private obstacles: Rock[];

  constructor() {
    this.keysDown = {};
    this.canvas = document.getElementById('game') as HTMLCanvasElement;
    this.ctx = null;
    this.gameFrame = 0;
    this.player = null;
    this.obstacles = [];
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
    this.keysDown[event.key] = true;
  };

  onKeyUp = (event: KeyboardEvent): void => {
    delete this.keysDown[event.key];
  };

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

    if (this.gameFrame % 50 === 0) {
      this.obstacles.push(new Rock(this.canvas));
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

    this.gameFrame += 1;
    if (this.gameFrame >= Number.MAX_SAFE_INTEGER) {
      this.gameFrame = 0;
    }

    requestAnimationFrame(this.animate);
  };
}

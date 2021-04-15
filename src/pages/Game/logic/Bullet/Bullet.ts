import imageSrc from './img/bullet1.png';
import { Player } from '../Player';

const image = new Image();
image.src = imageSrc;

export class Bullet {
  public x: number;

  public y: number;

  public radius: number;

  private speed: number;

  public distance: number;

  constructor(canvas: HTMLCanvasElement, player: Player) {
    this.x = player.x + 135;
    this.y = player.y + 75;
    this.radius = 50;
    this.speed = 10;
    this.distance = 0;
  }

  update(): void {
    this.y -= this.speed;
  }

  draw(ctx: CanvasRenderingContext2D): void {
    if (!ctx) {
      return;
    }
    ctx.drawImage(image, this.x - 165, this.y - 165, 70, 70);
  }
}

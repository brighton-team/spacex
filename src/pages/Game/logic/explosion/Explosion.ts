import imageSrc from './img/expl.png';
import { Rock } from '../Rock';

const image = new Image();
image.src = imageSrc;

export class Explosion {
  public x: number;

  public y: number;

  public timeStamp: number;

  constructor(obstacle: Rock, currentTimeStamp: number) {
    this.x = obstacle.x - 70;
    this.y = obstacle.y - 70;
    this.timeStamp = currentTimeStamp;
  }

  draw(ctx: CanvasRenderingContext2D): void {
    if (!ctx) {
      return;
    }
    ctx.drawImage(image, this.x, this.y, 150, 150);
  }
}
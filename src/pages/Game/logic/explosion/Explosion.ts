import { getImage } from 'pages/Game/logic/utils/getImage';

import imageSrc from './img/expl.png';
import { Rock } from '../Rock';

const image = getImage(imageSrc);

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
    if (!ctx || !image) {
      return;
    }
    ctx.drawImage(image, this.x, this.y, 150, 150);
  }
}

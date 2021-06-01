import { getImage } from 'pages/Game/logic/utils/getImage';

import { getThemePath } from 'consts/theme';
import { Rock } from '../Rock';

export class Explosion {
  public x: number;

  public y: number;

  public timeStamp: number;

  private theme: string;

  private image: HTMLImageElement;

  constructor(obstacle: Rock, currentTimeStamp: number, theme: string) {
    this.x = obstacle.x - 70;
    this.y = obstacle.y - 70;
    this.timeStamp = currentTimeStamp;
    this.theme = theme;
    this.image = getImage(getThemePath(this.theme, 'expl.png'));
  }

  draw(ctx: CanvasRenderingContext2D): void {
    if (!ctx || !this.image) {
      return;
    }
    ctx.drawImage(this.image, this.x, this.y, 150, 150);
  }
}

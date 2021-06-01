import { getImage } from 'pages/Game/logic/utils/getImage';

import { getThemePath } from 'consts/theme';
import { Player } from '../Player';

export class Bullet {
  public x: number;

  public y: number;

  public radius: number;

  private speed: number;

  public distance: number;

  private theme: string;

  private image: HTMLImageElement;

  constructor(canvas: HTMLCanvasElement, player: Player, theme: string) {
    this.x = player.x + 135;
    this.y = player.y + 75;
    this.radius = 50;
    this.speed = 10;
    this.distance = 0;
    this.theme = theme;
    this.image = getImage(getThemePath(this.theme, 'bullet1.png'));
  }

  update(): void {
    this.y -= this.speed;
  }

  draw(ctx: CanvasRenderingContext2D): void {
    if (!ctx || !this.image) {
      return;
    }
    ctx.drawImage(this.image, this.x - 165, this.y - 165, 70, 70);
  }
}

import { getImage } from 'pages/Game/logic/utils/getImage';

import { getThemePath } from 'consts/theme';
import { Player } from '../Player';

export class Rock {
  public x: number;

  public y: number;

  public radius: number;

  private speed: number;

  public distance: number;

  private theme: string;

  private image: HTMLImageElement;

  constructor(canvas: HTMLCanvasElement, theme: string) {
    this.x = Math.random() * canvas.width;
    this.y = 0 - 50 - canvas.height / 2;
    this.radius = 50;
    this.speed = Math.random() * -5 - 1;
    this.distance = 0;
    this.theme = theme;
    this.image = getImage(getThemePath(this.theme, 'rock.png'));
  }

  update(player: Player): void {
    this.y -= this.speed;
    const dx = this.x - player.x;
    const dy = this.y - player.y;
    this.distance = Math.sqrt(dx * dx + dy * dy);
  }

  draw(ctx: CanvasRenderingContext2D): void {
    if (!this.image) {
      return;
    }
    /* ctx.fillStyle = 'blue';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath(); */

    ctx.drawImage(this.image, this.x - 65, this.y - 70, 135, 135);
  }
}

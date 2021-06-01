import { getImage } from 'pages/Game/logic/utils/getImage';
import { store } from 'store';
import { getThemePath } from 'consts/theme';

export class Player {
  public x: number;

  public y: number;

  public radius: number;

  private speed: number;
  private theme: string;
  private image: HTMLImageElement;
  constructor(canvas: HTMLCanvasElement) {
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;
    this.radius = 40;
    this.speed = 15;
    this.theme = store.getState().user.theme.name;
    this.image = getImage(getThemePath(this.theme, 'rocket.png'));
  }

  update(canvas: HTMLCanvasElement, keysDown: Record<string, boolean>): void {
    if ('ArrowUp' in keysDown) {
      this.y -= this.speed;
    }
    if ('ArrowDown' in keysDown) {
      this.y += this.speed;
    }
    if ('ArrowLeft' in keysDown) {
      this.x -= this.speed;
    }
    if ('ArrowRight' in keysDown) {
      this.x += this.speed;
    }

    if (this.x < 0) {
      this.x = 0;
    }
    if (this.x > canvas.width) {
      this.x = canvas.width;
    }
    if (this.y < 40) {
      this.y = 40;
    }
    if (this.y > canvas.height) {
      this.y = canvas.height;
    }
  }

  draw(ctx: CanvasRenderingContext2D): void {
    if (!ctx || !this.image) {
      return;
    }

    ctx.drawImage(this.image, this.x - 65, this.y - 65, 135, 135);
  }
}

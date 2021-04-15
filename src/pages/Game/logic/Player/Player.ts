import imageSrc from './img/rocket.png';

const image = new Image();
image.src = imageSrc;

export class Player {
  public x: number;

  public y: number;

  public radius: number;

  private speed: number;

  constructor(canvas: HTMLCanvasElement) {
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;
    this.radius = 40;
    this.speed = 15;
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
    if (!ctx) {
      return;
    }

    /* ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath(); */
    ctx.drawImage(image, this.x - 65, this.y - 65, 135, 135);
  }
}

import { getImage } from 'pages/Game/logic/utils/getImage';

import { GamepadCommands } from 'pages/Game/logic/GameLogic/GameLogic';

import imageSrc from './img/rocket.png';

const image = getImage(imageSrc);

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

  update(
    canvas: HTMLCanvasElement,
    keysDown: Record<string, boolean>,
    gamepadCommands: GamepadCommands
  ): void {
    if ('ArrowUp' in keysDown || gamepadCommands.up) {
      this.y -= this.speed;
    }
    if ('ArrowDown' in keysDown || gamepadCommands.down) {
      this.y += this.speed;
    }
    if ('ArrowLeft' in keysDown || gamepadCommands.left) {
      this.x -= this.speed;
    }
    if ('ArrowRight' in keysDown || gamepadCommands.right) {
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
    if (!ctx || !image) {
      return;
    }

    ctx.drawImage(image, this.x - 65, this.y - 65, 135, 135);
  }
}

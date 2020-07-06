class Obstacle extends Characters {
  constructor(game) {
    super(game);
    this.x = 10;
    this.y = 200;
    this.width = 50;
    this.height = 50;
    this.img = new Image();
  }
  draw() {
    this.img.src = "images/pngfuel.com.png";
    this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  move() {
    if (Math.floor(Math.random() * 50) % 3 === 0) {
      this.x += 2;
    }
  }

  
}

class Obstacle2 extends Characters {
  constructor(game) {
    super(game);
    this.x = 10
    this.y = 200;
    this.width = 50;
    this.height = 50;
    this.img = new Image();
  }
  draw() {
    this.img.src = "images/pngfuel.com (1).png";
    this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  move() {
    if (Math.floor(Math.random() * 50) % 3 === 0) {
      this.x += 4;
    }
  }
}
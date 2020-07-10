class Obstacle extends Characters {
  constructor(game) {
    super(game);
    this.x = 10;
    this.y = 200;
    this.width = 50;
    this.height = 50;
    this.img = new Image();
    this.speedX = 1;
    this.speedY = 50;
  }
  draw() {
    this.img.src = "images/pngfuel.com.png";
    this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  move() {
    if (Math.floor(Math.random() * 50) % 3 === 0) {
      if (this.x >= 150 && this.x <= 180)
        this.y += this.speedY;
    } else if (this.x >= 290 && this.x <= 310) {
      this.y += this.speedY;
    } else {
      this.x += this.speedX;
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
    this.speedX = 1.5;
    this.speedY = 50;
    this.fallingSound = new Audio("sound/soundtrack-minions-gritando-2.mp3");
  }
  draw() {
    this.img.src = "images/pngfuel.com (1).png";
    this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  move() {
    if (Math.floor(Math.random() * 50) % 3 === 0) {
      if (this.x >= 150 && this.x <= 180)
        this.y += this.speedY;
    } else if (this.x >= 290 && this.x <= 310) {
      this.y += this.speedY;
    } else {
      this.x += this.speedX;
    }
  }
}
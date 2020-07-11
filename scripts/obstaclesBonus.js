class Obstacle3 extends Characters {
    constructor(game) {
      super(game);
      this.x = 10;
      this.y = 295;
      this.width = 75;
      this.height = 75;
      this.img = new Image();
      this.speedX = 0.5;
      this.speedY = 50;
    }
    draw() {
      this.img.src = "images/pngfuel.com (2).png";
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
  
  class Obstacle4 extends Characters {
    constructor(game) {
      super(game);
      this.x = 10
      this.y = 320;
      this.width = 60;
      this.height = 50;
      this.img = new Image();
      this.speedX = 1.7;
      this.speedY = 50;
      this.fallingSound = new Audio("sound/soundtrack-minions-gritando-2.mp3");
    }
    draw() {
      this.img.src = "images/pngguru.com (2).png";
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
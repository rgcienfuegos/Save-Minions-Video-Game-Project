class Game {
  constructor() {
    this.canvas = undefined;
    this.ctx = undefined;
    this.platform = new Player(this, 200, 550, 50, 50);
    this.obstacles = [];
    this.backgroundImg = new Image();
    this.gameOverImg = new Image();
    this.lifeImage = new Image();
    this.x = 0;
    this.y = 0;
    this.width = 500;
    this.height = 500;
    this.gravitySpeed = 5;
    this.backgroundMusic = new Audio("sound/luis-fonsi-daddy-yankee-despacito-remix-ft-justin-bieber-minions-cover (1).mp3");
    this.sound = new Audio("sound/soundtrack-minions-guna.mp3");
    this.sound2 = new Audio("sound/SPLASH Sound Effect Free Download.mp3");
    this.score = 0;
    this.lifes = 3;
  }

  init() {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.start();
    this.createObstacles();
    this.createObstacles2();
    this.createObstacles3();
    this.createObstacles4();
    setInterval(() => {
      this.backgroundMusic.volume = 0.1;
      this.backgroundMusic.play();
    }, 1000);
  }

  start() {

    this.drawBackgroundLines();
    this.drawBackground();
    this.drawMainCharacter();

    setInterval(() => {
      this.clear();
      this.drawBackgroundLines();
      this.drawBackground();
      this.drawMainCharacter();
      this.drawScore();
      this.drawLifes();
      this.checkLifes();
      this.gameOver();
      this.platform.move();
      for (let i = 0; i < this.obstacles.length; i++) {
        this.obstacles[i].move();
        this.obstacles[i].draw();
        this.platform.crashCollision(this.obstacles[i]);
        if (this.obstacles[i].x > 490) {
          this.obstacles.splice(i, 1);
          this.score++;
          this.sound.volume = 0.2;
          this.sound.play();
        }
      }
    }, 1000 / 120);
  }

  createObstacles() {
    if (Math.floor(Math.random() * 10) % 2 === 0) {
      this.obstacles.push(new Obstacle(this));
    }

    setTimeout(() => {
      this.createObstacles();
    }, 3000);
  }

  createObstacles2() {
    if (Math.floor(Math.random() * 10) % 2 === 0) {
      this.obstacles.push(new Obstacle2(this));
    }

    setTimeout(() => {
      this.createObstacles2();
    }, 5000);
  }

  createObstacles3() {
    if (Math.floor(Math.random() * 10) % 2 === 0) {
      this.obstacles.push(new Obstacle3(this));
    }

    setTimeout(() => {
      this.createObstacles3();
    }, 5000);
  }

  createObstacles4() {
    if (Math.floor(Math.random() * 10) % 2 === 0) {
      this.obstacles.push(new Obstacle4(this));
    }

    setTimeout(() => {
      this.createObstacles4();
    }, 5000);
  }

  drawBackground() {
    this.backgroundImg.src = "images/fondostory.jpg";
    this.ctx.drawImage(
      this.backgroundImg,
      this.x,
      this.y,
      this.width,
      this.height
    );

    this.ctx.beginPath();
    this.ctx.moveTo(10, 200);
    this.ctx.lineTo(150, 200);
    this.ctx.lineWidth = 5;
    this.ctx.strokeStyle = 'black';
    this.ctx.moveTo(200, 200);
    this.ctx.lineTo(300, 200);
    this.ctx.lineWidth = 5;
    this.ctx.strokeStyle = 'black';
    this.ctx.moveTo(350, 200);
    this.ctx.lineTo(490, 200);
    this.ctx.lineWidth = 5;
    this.ctx.strokeStyle = 'black';
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.moveTo(10, 370);
    this.ctx.lineTo(150, 370);
    this.ctx.lineWidth = 5;
    this.ctx.strokeStyle = 'black';
    this.ctx.moveTo(200, 370);
    this.ctx.lineTo(300, 370);
    this.ctx.lineWidth = 5;
    this.ctx.strokeStyle = 'black';
    this.ctx.moveTo(350, 370);
    this.ctx.lineTo(490, 370);
    this.ctx.lineWidth = 5;
    this.ctx.strokeStyle = 'black';
    this.ctx.stroke();
  }

  drawBackgroundLines() {

    this.ctx.beginPath();
    this.ctx.moveTo(10, 250);
    this.ctx.lineTo(150, 250);
    this.ctx.lineWidth = 5;
    this.ctx.strokeStyle = 'black';
    this.ctx.moveTo(200, 250);
    this.ctx.lineTo(300, 250);
    this.ctx.lineWidth = 5;
    this.ctx.strokeStyle = 'black';
    this.ctx.moveTo(350, 250);
    this.ctx.lineTo(490, 250);
    this.ctx.lineWidth = 5;
    this.ctx.strokeStyle = 'black';
    this.ctx.stroke();

  }

  drawMainCharacter() {
    this.platform.drawComponent("images/platform.png");
  }

  clear() {
    this.ctx.clearRect(this.x, this.y, this.width, this.height);
  }


  drawScore() {
    this.ctx.font = "26px Roboto";
    this.ctx.fillStyle = "#black";
    this.ctx.fillText(`Score: ${this.score}`, 380, 50)
  }

  drawLifes() {
    this.ctx.font = "26px Roboto";
    this.ctx.fillStyle = "#black";
    this.lifeImage.src = "images/life.png"
    let heart = this.ctx.drawImage(this.lifeImage, 10, 25, 30, 30)
    this.ctx.fillText(`: ${this.lifes}`, 50, 50)
  }

  gameOver() {
    if (this.lifes <= 0) {
      this.gameOverImg.src = "images/gameover.png";
      this.ctx.drawImage(
        this.gameOverImg,
        this.x,
        this.y,
        this.width,
        this.height
      );
      this.ctx.clear();
      this.ctx.stop();
      this.ctx.clearInterval(canvas);
      this.backgroundMusic.pause();
    }
  }

  checkLifes() {
    for (let i = 0; i < this.obstacles.length; i++) {
      if (this.obstacles[i].y > 490) {
        this.obstacles.splice(i, 1);
        this.lifes--;
        this.sound2.volume = 0.2;
        this.sound2.play();
      }
    }
  }

}
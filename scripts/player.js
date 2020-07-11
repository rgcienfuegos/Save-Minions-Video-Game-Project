class Player extends Characters {
  constructor(game, x, y, w, h) {
    super(game, x, y, w, h);
    this.score = 0;
  }
  move() {
    document.onkeydown = (event) => {
      const key = event.keyCode;
      const possibleKeysStrokes = [90, 77, 65, 75];
      if (possibleKeysStrokes.includes(key)) {
        switch (key) {
          case 90:
            this.x = 150;
            this.y = 342;
            break;
          case 77:
            this.x = 300;
            this.y = 342;
            break;
          case 65:
            this.x = 150;
            this.y = 172;
            break;
          case 75:
            this.x = 300;
            this.y = 172;
            break;

        }
      }
    };
  }

  crashCollision(element) {
    //y axis
    if (this.y + 10 <= element.y + element.height && this.y >= element.y) {
      //x axis
      if (this.x >= element.x && this.x <= element.x + element.width) {

        element.x = 50 + this.x;
      }
    }
  }
}

class Player extends Characters {
  constructor(game, x, y, w, h) {
    super(game, x, y, w, h);
  }
  move() {
    document.onkeydown = (event) => {
      const key = event.keyCode;
      const possibleKeysStrokes = [90, 77];
      if (possibleKeysStrokes.includes(key)) {
        switch (key) {
          case 90:
            this.x = 150;
            this.y = 222;
            break;
          case 77:
            this.x = 300;
            this.y = 222;
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

        element.y += 1;
        element.x += this.x;
      }
    }
  }
}
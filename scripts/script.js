function buildScreen(htmlString) {
  let div = document.createElement("div");
  div.innerHTML = htmlString;
  return div.children[0]
}

let mainContainer = document.getElementById("game-main")

function main() {
  let splashScreen
  let gameScreen
  let gameOverScreen


  function createSplashScreen() {
    splashScreen = buildScreen(`
      <div class="game-intro">
    <img src="./images/miniom.png" alt="" class="moniom-img" />
    <br />
    <p>Use the keyboard buttons to move the platforms!!</p>
    <br />
    <img src="./images/A.png" alt="" class="m-img" />
    <img src="./images/k.png" alt="" class="z-img" />
    <br />
    <img src="./images/z.png" alt="" class="m-img" />
    <img src="./images/m.png" alt="" class="z-img" />
    <br />
    <button id="start-button">StartGame</button>
      `)
    mainContainer.appendChild(splashScreen)
    let startButton = document.getElementById("start-button")
    startButton.addEventListener('click', function () {
      startGame();
    });
  }

  function removeSplashScreen() {
    splashScreen.remove();
  }

  function createGameScreen() {
    gameScreen = buildScreen(`<div id="game-board">
      <canvas id="canvas" width="500" height="500"></canvas>
    </div>`)

    mainContainer.appendChild(gameScreen)
    return gameScreen
  }

  function removeGameScreen() {
    gameScreen.remove();
  }

  function createGameOverScreen() {
    gameOverScreen = buildScreen(`<div id="gameOver-screen">
         <h1> YOU GOT ${game.score} POINTS!</h1>
         <h2>Don´t you wanna save more, Banana ??</h2> <br />
         <button id="tryAgain-button">Try Again</button><br />
         <img src="./images/gameOver2.png"><br />
 </div>`)

    mainContainer.appendChild(gameOverScreen)

    let tryAgaintBtn = document.getElementById("tryAgain-button");

    tryAgaintBtn.addEventListener('click', function () {
      gameOverScreen.remove();
      startGame()
      game.gameOverMusic.pause();
    });

  }

  function removeGameOverScreen() {
    if (gameOverScreen !== undefined) {
      gameOverScreen.remove();
    }
  }

  function startGame() {
    removeSplashScreen();
    removeGameOverScreen();
    game = new Game();
    game.gameScreen = createGameScreen();
    game.init();


  }

  callGameOver = () => {
    removeGameScreen();
    return createGameOverScreen();

  }

  createSplashScreen()

}

window.onload = function () {
  main()
}
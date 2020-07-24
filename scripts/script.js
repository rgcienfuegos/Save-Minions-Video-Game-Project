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
    <h1>Use the keyboard buttons to move the platforms!!</h1>
    <br />
    <img src="./images/A.png" alt="" class="m-img" />
    <img src="./images/k.png" alt="" class="z-img" />
    <br />
    <img src="./images/z.png" alt="" class="m-img" />
    <img src="./images/m.png" alt="" class="z-img" />
    <br />
    <button id="start-button">Empieza a jugar</button>
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
         <h1 id="score"> Has salvado a ${game.score} Minions!</h1>
         <h2>Han muerto demasiados minions :'(</h2> <br />
         <button id="tryAgain-button">Jugar otra vez</button><br />
         <div align="center"><img src="./images/gameOver2.png" style="width: 100%;"></div>
        <br />
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
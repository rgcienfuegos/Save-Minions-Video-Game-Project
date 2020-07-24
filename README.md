# Save Minions | Video Game Project

LAB - videoGame

# Project's name

Save Minioms - Platform game.

## Description

The game is based on the arcade game of the 80`s called GAME AND WATCH from NINTENDO, and particularly from MANHOLE NH103.
The characters are passing through the platforms and the player move some bridges to prevent them falling and cross to the other side.

## MVP (DOM - CANVAS)

- The player move the bridges, only one at each time.
- The characters “minioms” appear randomly, with different speed to the platforms.
- The characters “minioms” appear from outside of the screen from left and must reach the right part.
- The holes of the platform are detected if there isnt any brigde from the player movement the characters fall.
- If the character falls, you have 1 of 3 lifes out, if you are run out of lifes, the game is over.
- If the characters continue and reach the other side of the platform. the game is complete.

## Backlog

- Score - If the character are able to cross the platform, the player has 1 score up.
- Level of difficulty - characters appear faster with higher score.
- Player changes bridges with keypad (Q,A,M,K)
- Sound effects for scoring, victory and game-over scenarios.
- Levels - with less time and more speed of the obstacles.

## Data structure

### index.html

### style.css

### game.js

```
game () {
        constructor() {
            this.canvas;
            this.ctx;
            this.minions;
            this.background;
            this.tress;
            this.background;
this.platform;
        }
    }
    init()
    start()
    createObstacles()
    createObstacles2()
    createObstacles3()
    createObstacles4()
    drawBackground()
    drawBackgroundLines()
    drawMainCharacter()
    clear()
    drawScore()
    drawLifes()
    gameOver()
    checkLifes()
```

### script.js

```
buildScreen()
main()
createSplashScreen()
removeSplashScreen()
createGameScreen()
removeGameScreen()
createGameOverScreen()
removeGameOverScreen()
startGame()

```

### characters.js

```
    class Characters {
        constructor() {
            this.game;
            this.x;
            this.y;
            this.width;
            this.height;
            this.img;
        }
    }
    drawComponent()

```

### player.js

```
    class Player extends Characters () {
        constructor ()
    }
    move()
    collision()
```

### obstacle.js

```
    class Obstacle extends Characters () {
        constructor()
    }
    draw()
    move()
    collision()

   class Obstacle2 extends Characters() {
        constructor()
    }
    draw()
    move()
    collision()
```

### obstacleBonus.js

```
class Obstacle3 extends Characters () {
        constructor()
    }
    draw()
    move()
    collision()

   class Obstacle4 extends Characters() {
        constructor()
    }
    draw()
    move()
    collision()
```

## States & States Transitions

- splashScreen

  - drawSplashScreen ()
  - addEventListener(startGame)

- startGame

  - drawGameScreen()
  - game.init()

- gameOver()
  - drawGameOverScreen()
  - addEventListener(tryAgain)

## Task

- main - buildDom
- main - buildCanvas
- main - addEventListener
- main - buildGameScreen
- main - buildGameOverScreen
- game - init
- game - start
- game - drawBackground
- game - drawCharacters
- game - createMinioms1
- game - createMinioms2
- game - clearCanvas
- player - bridges
- minion1 - draw
- minion1 - move
- minion1 - Fall
- minion1 - continue collision
- minion2 - draw
- minion2 - move
- minion2 - Fall
- minion2 - continue collision

## Links

DEMO > https://rgcienfuegos.github.io/Save-Minions-Video-Game-Project/

### Trello

https://trello.com/b/cTKIEKYl/save-minions-video-game-projec

### Git

URls for the project repo and deploy

https://github.com/rgcienfuegos/Save-Minions-Video-Game-Project

### Slides - Wire frames

https://docs.google.com/presentation/d/1Nghxij8S6AlmM9_iw1OCH4nyRq5YyuOHDYjBbivODF0/edit#slide=id.p

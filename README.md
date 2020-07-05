# Save Minions | Video Game Project
LAB - videoGame

# Project's name
Save Minioms - Platform game.

## Description
The game is base on the arcade game of the 80`s called GAME AND WATCH from NINTENDO, and particularly from MANHOLE NH103.
The characters are passing through the platform and the player must put some bridges to make them able reach the other side of the screen.

## MVP (DOM - CANVAS)
- The player move the bridges, only one at each time.
- The characters “minioms” appear randomly and with different speed to the platform.
- The holes of the platform are detected if there isnt any brigde from the player and fall.
- If the character falls, the game is over.
- If the characters continue and reach the other side of the platform. the game is complete.

## Backlog
- Score - If the user reaches 10 characters without falling, wins
- Level of difficulty - characters appear faster in the last scores.
- Player changes bridges with keypad (Q,P,Z,M)
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
    drawBackground()
    drawBPlatform()
    drawMinion1()
    drawMinion2()
    clearCanva()
    gameOver()
```

### script.js
```
startGame()
finishGame()
```

### characters.js
```
    element() {
        constructor() {
            this.game;
            this.x;
            this.y;
            this.width;
            this.height;
            this.img;
        }
    }
    drawElement()
```

### playerBriges.js
```
    player Extends element () {
        constructor ()
    }
    move()
    collision()
```

### miniom.js
```
    miniom1 Extends element () {
        constructor()
    }
    draw()
    move()
    collision()
```
    miniom2 Extends element () {
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


### Trello



### Git
URls for the project repo and deploy
[Link Repo](http://github.com)
[Link Deploy](http://github.com)


### Slides - Wire frames

https://www.figma.com/file/BVQY2UWYD5NkIKWH08B87i/Save-Minioms---Wire-Frames


# platformGame
LAB - videoGame

Platform game.
Only one scenario-frame.
ONE level platform, two holes, one platform moving for all. (Keypad Q, P.) 
Bonus second level platform, two holes, one platform moving for all. (Keypad Z, M.)
Only one character in one hole each time.
Characters getting inside the canvas randomly and randomly speed.
Every time character reach the hospital score +1.
2 lives. If characters falls - 1life.
0 live = GAME OVER.
Bonus Every 5 scores game speed increase.
CANVAS AND DOM
-	Index.html.
-	Style.css.
-	SCRIPTS.
script.js 
startGame()
BONUS - incresSpeedGame()

component.js
class Characters
drawcharacter()

game.js 
constructor()
init()
start()
createcharacter()
drawbackground()
drawplatform()
gameover()
clear()
character.js
class extends component
move()
fall()
reachHospital()
platforms.js
activateplatform()
let grid = [' ',' ',' ','X',' ', ' ', 'X',' ',' ',' '],

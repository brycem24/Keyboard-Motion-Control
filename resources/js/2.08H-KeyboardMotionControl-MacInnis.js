
//INITIALIZATION: variables declared below.
var characterSelected = "resources/characters/1.png"
var player = new Player("playerID", 400, 0);
var enemy1 = new Wrestler("enemy1ID", 250, 0);
var gameStarted = false;

//Put all of the monsters in an array so we can iterate through them.
var enemies = [
    enemy1,
];

//MAIN: Main game loop created.
window.requestAnimationFrame(loop);
function loop(timestamp) {
    var deltaTime = timestamp - lastRender;

    //Main game loop 
    update(deltaTime);

    lastRender = timestamp;
    window.requestAnimationFrame(loop);
}

//lastRender records time since last frame, so we can find deltaTime.
var lastRender = 0;

//MAIN: Game loop being called every frame.
function update(dt) {
    for (enemy in enemies) {
        enemies[enemy].moveToPlayer(dt, 30);
        enemies[enemy].updatePosition();
    }

    player.movePlayer(dt, 0.1);
    player.updatePosition();
    player.animatePlayer();

    animateBystanders();
}

//MAIN: Game logic called when start is pushed.
var loadGame = function() {
    gameStarted = true;
    
    loadCharacterSprite();
    showGameScreen();
    hideMenuScreen();
}

//OUTPUT: Changes the character sprite to the one you chose.
function loadCharacterSprite() {
    document.getElementById("playerID").src = characterSelected;
}

//OUTPUT: Hides the character select screen.
function hideMenuScreen() {
    document.getElementById("startModalID").style.visibility = "hidden";
}

//OUTPUT: Shows the game window.
function showGameScreen() {
     document.getElementById("gameWindowID").style.visibility = "visible";
}

//INPUT: When the start button is pushed, begin the game.
document.getElementById("startButtonID").onclick = loadGame;
//PROCESSING: Select the character based on arrow button's input.
var currentCharacterIndex = 1;
var characterSelect = function(direction) {
    if (direction == "left" && currentCharacterIndex > 0)
        currentCharacterIndex--;
    if (direction == "right" && currentCharacterIndex < 44)
        currentCharacterIndex++;

    //Passed the amount of characters, loop back to the first.
    if (currentCharacterIndex > 44)
        currentCharacterIndex = 1;

    characterSelected = "resources/characters/" + currentCharacterIndex + ".png";
    displayCharacter(characterSelected);
}

//OUTPUT: Change the character in the character select screen.
var displayCharacter = function(characterSelected) {
    document.getElementById("characterDisplayID").src = characterSelected;
}


//INPUT: When the left arrow is clicked, select the next character to the left.
document.getElementById("leftArrowID").onclick = function() {
    characterSelect("left");
}

//INPUT: When the left arrow is clicked, select the next character to the right.
document.getElementById("rightArrowID").onclick = function() {
    characterSelect("right");
}
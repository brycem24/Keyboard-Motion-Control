//Singleton class that controls keyboard input globally for easy access.
class Input {
    /* PROCESSING: bind the W,A,S,D keys to a (-1,1) cartesian plane.
        This allows us to use the Input as a direction instead of having multiple
        moveUp, moveLeft functions. */
    static handleInput(keyEvent) {
        var keyNumber = keyEvent.which || keyEvent.keyCode;

        //UP movement
        if (keyNumber == 87 || keyNumber == 38)
            Input.y = -1;
        //DOWN movement
        else if (keyNumber == 83 || keyNumber == 40)
            Input.y = 1;
        //LEFT movement
        else if (keyNumber == 65 || keyNumber == 37)
            Input.x = -1;
        //RIGHT movement
        else if (keyNumber == 68 || keyNumber == 39)
            Input.x = 1;
        else {
            Input.x = 0;
            Input.y = 0;
        }
    }

    //PROCESSING: if the key was released, reset the input to 0.
    static releaseInput(keyEvent) {
        var keyNumber = keyEvent.which || keyEvent.keyCode;

        //UP movement
        if (keyNumber == 87 || keyNumber == 38)
            Input.y = 0;
        //DOWN movement
        else if (keyNumber == 83 || keyNumber == 40)
            Input.y = 0;
        //LEFT movement
        if (keyNumber == 65 || keyNumber == 37)
            Input.x = 0;
        //RIGHT movement
        else if (keyNumber == 68 || keyNumber == 39)
            Input.x = 0;
    }
}

//INITIALIZATION: Set the default values of Input to 0.
Input.x = 0;
Input.y = 0;

//INPUT: When a key is pressed/released register the key event.
window.onkeydown = Input.handleInput;
window.onkeyup = Input.releaseInput;
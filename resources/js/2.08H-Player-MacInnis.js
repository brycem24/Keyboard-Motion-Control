class Player {
    //INITIALIZATION: Constructor
    constructor(id, x, y) {
        this.id = id;
        this.x = x;
        this.y = y;

        //Keeps the code D.R.Y
        this.instance = document.getElementById(id);
        this.instance.style.left = x + "px";
        this.instance.style.top = y + "px";
    }

    //PROCESSING: Is the position that the player is GOING to be at a wall?
    checkForCollisions() {
        if (this.simulatedXPosition < 35)
            return true;
        else if (this.simulatedXPosition > 530)
            return true;
        else if (this.simulatedYPosition < -53)
            return true;
        else if (this.simulatedYPosition > 185)
            return true;
        else
            return false;
    }

    //PROCESSING: Move the player according to x and y input.
    movePlayer(dt, speed) {
        this.simulatedXPosition = this.x + speed * dt * Input.x;
        this.simulatedYPosition = this.y + speed * dt * Input.y;

        //If there's no collisions in the way, move the player.
        if (!this.checkForCollisions()) {
            this.x = this.simulatedXPosition;
            this.y = this.simulatedYPosition;
        }

    }

    //OUTPUT: Flip the image according to the X input.
    animatePlayer() {
        if (Input.x < 0)
            this.instance.classList.add("flippedClass");
        else if (Input.x > 0)
            this.instance.classList.remove("flippedClass");
    }

    //OUTPUT: Draw the player's sprite to reflect its x,y coordinates.
    updatePosition() {

        //Satisfies the checklist requirements.
        var currentPositionX = this.instance.style.left;
        var currentPositionY = this.instance.style.top;

        this.instance.style.left = parseInt(this.x) + "px";
        this.instance.style.top = parseInt(this.y) + "px";
    }
}

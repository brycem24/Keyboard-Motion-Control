class Wrestler {
    //INITIALIZATION: Constructor
    constructor(id, x, y) {
        //ID allows us to modify the <img> tag
        this.id = id;
        //Current position of our monster
        this.x = x;
        this.y = y;
        //Where the monster will return after dying
        this.startX = x;
        this.startY = y;
        //Is the monster alive?
        this.isAlive = true;
        //If the player is right, we flip.
        this.isFacingLeft = true;

        //Used to keep code D.R.Y instead of repeating getElementById()
        this.instance = document.getElementById(id);

        //Initial set of position
        this.instance.style.left = x + "px";
        this.instance.style.top = y + "px";
    }

    //PROCESSING: Move the entity to the player using trigonometry.
    moveToPlayer(dt, speed) {
        //Position of the entity
        var currentPosX = parseInt(this.x);
        var currentPosY = parseInt(this.y);

        //The player's position is set to top left of the image, this moves it to the center.
        var goalPosX = parseInt(document.getElementById("playerID").style.left) - 80;
        var goalPosY = parseInt(document.getElementById("playerID").style.top);

        //Delta variables used to calculate direction between two points.
        var dx = goalPosX - currentPosX;
        var dy = goalPosY - currentPosY;

        //Calculate the distance between the monster and the player
        var distance = Math.sqrt(dx *  dx + dy * dy)

        //Calculate the direction to the player
        var directionX = Math.cos(Math.atan2(dy, dx));
        var directionY = Math.sin(Math.atan2(dy, dx));

        //The speed our entity moves
        var velocity =  speed *
                        dt /
                        1000;        

        //Don't overlap the player when chasing them.
        if (distance > 50) {
            //Move the entity toward the player by a velocity
            this.x += velocity *
                directionX;
            this.y += velocity *
                directionY;
        }

        this.animate(directionX)
    }

    //PROCESSING: Record which way the player is facing.
    animate(direction) {
        if (direction < 0)
            this.isFacingLeft = true;
        else
            this.isFacingLeft = false;
    }

    //OUTPUT: Draw the image at its X and Y coordinates.
    updatePosition() {
        this.instance.style.left = parseInt(this.x) + "px";
        this.instance.style.top = parseInt(this.y) + "px";

        if (this.isFacingLeft)
            this.instance.classList.add("flippedClass");
        else
            this.instance.classList.remove("flippedClass");
    }
}
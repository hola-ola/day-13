class Player {
    constructor (startingX, startingY) {
        this.x = startingX;
        this.y = startingY;
        this.width = 50;
        this.height = 150;
    }

    draw() {
        rect(this.x, this.y, this.width, this.height);
    }

    moveLeft(steps) {
        this.x -= steps;
        if (this.x < 0) {
            this.x = 0;
        }
    }
    moveRight(steps) {
        this.x += steps;
        if (this.width + this.x > width) {
            this.x = width = this.width;
        }
    }
    moveUp(steps) {
        this.y -= steps;
        if (this.y < 0) {
            this.y = 0;
        }
    }
    moveDown(steps) {
        this.y += steps;
        if (this.y + this.height > height) {
            this.y = height - this.height;
        }
    }
 
}
class Game {
    constructor(){
        this.player1 = new Player(150, 150);
        this.player2 = new Player(100, 100);
    }

    draw() {
        clear();
        background('yellow');
        this.player1.draw();
        this.player2.draw();

        if (keyIsDown(38)) {
            console.log("Player 1 is moving up!")
            this.player1.moveUp(5);
        };
        if (keyIsDown(39)) {
            console.log("Player 1 is moving right!")
            this.player1.moveRight(5);
        }
        if (keyIsDown(40)) {
            console.log("Player 1 is moving down!")
            this.player1.moveDown(5);
        }
        if (keyIsDown(37)) {
            console.log("Player 1 is moving left!")
            this.player1.moveLeft(5);
        }
        if (keyIsDown(87)) {
            console.log("Player 2 is moving up!")
            this.player2.moveUp(5);
        }
        if (keyIsDown(65)) {
            console.log("Player 2 is moving left!")
            this.player2.moveLeft(5);
        }
        if (keyIsDown(83)) {
            console.log("Player 2 is moving down!")
            this.player2.moveDown(5);
        }
        if (keyIsDown(68)) {
            console.log("Player 2 is moving right!")
            this.player2.moveRight(5);
        }
      }
    }
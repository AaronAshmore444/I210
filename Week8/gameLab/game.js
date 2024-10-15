const game = {
    lives: 3,
    coins: 0,
    points() {
        return this.coins *10;

    },
    playerDies() {
        if (this.lives> 0) {
            this.lives -= 1;
        } else {
            console.log("Player can't die anymore.");
        }
    },
    newGame() {
        this.lives = 3;
        this.lives = 0;
    },
};

game.coins += 3;
console.log("Points: " + game.points());

game.playerDies();
game.playerDies();
game.playerDies();
game.playerDies();
console.log("lives: " + game.lives);

game.newGame();
console.log("live: " + game.lives);

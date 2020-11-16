function AutoPlay() {

    AutoPlay.prototype.run = function (player) {
        if (!player.muted) {
            player.muted = true;//setter
        }

        player.play();
    };
}

export default AutoPlay;
import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';

const video = document.querySelector("video");
const buttonPlayPause = document.getElementById("playPause");
const buttonMuteUnmute = document.getElementById("muteUnmute");

const player = new MediaPlayer({
    el: video,
    plugins: [
       // new AutoPlay()
    ]
});

buttonPlayPause.onclick = () => player.togglePlay();
buttonMuteUnmute.onclick = () => player.toggleSound();
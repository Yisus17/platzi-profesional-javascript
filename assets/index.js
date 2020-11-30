import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';
import  AutoPause  from './plugins/AutoPause.js';

const video = document.querySelector("video");
const buttonPlayPause = document.getElementById("playPause");
const buttonMuteUnmute = document.getElementById("muteUnmute");

const player = new MediaPlayer({
    el: video,
    plugins: [
        new AutoPlay(),
        new AutoPause()
    ]
});

buttonPlayPause.onclick = () => player.togglePlay();
buttonMuteUnmute.onclick = () => player.toggleSound();
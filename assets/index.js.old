import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';
import  AutoPause  from './plugins/AutoPause.ts';

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

if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js').catch(error =>{
        console.log(error.message);
    });
}
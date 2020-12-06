import MediaPlayer from './MediaPlayer';
import AutoPlay from './plugins/AutoPlay';
import  AutoPause  from './plugins/AutoPause';
import  Ads  from './plugins/Ads';

const video = document.querySelector("video");
const buttonPlayPause: HTMLElement = document.getElementById("playPause");
const buttonMuteUnmute: HTMLElement = document.getElementById("muteUnmute");

const player = new MediaPlayer({
    el: video,
    plugins: [
        new AutoPlay(),
        new AutoPause(),
        new Ads()
    ]
});

buttonPlayPause.onclick = () => player.togglePlay();
buttonMuteUnmute.onclick = () => player.toggleSound();

if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js').catch(error =>{
        console.log(error.message);
    });
}
import mediaPlayer from './mediaPlayer.js'
import autoPlay from './plugins/autoPlay.js'
import autoPause from './plugins/autoPause.js'

const video = document.querySelector('.movie');
const button = document.querySelector('#playButton')
const sound = document.querySelector('#muteButton')

const player = new mediaPlayer({
    el: video, 
    plugins: [new autoPlay(), new autoPause] 
});
button.onclick= () => player.playOrPause();
sound.onclick= () => player.mutedOrUnmuted();

if('serviceWorker' in navigator){
    navigator.serviceWorker.register("/sw.js").catch(error =>{
        console.log(error.message)
    })
}

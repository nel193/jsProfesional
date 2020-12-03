import mediaPlayer from '@nel193/platzimediaplayer/'
import autoPlay from '@nel193/platzimediaplayer/lib/plugins/autoPlay'
import autoPause from '@nel193/platzimediaplayer/lib/plugins/autoPause'
import Ads from '@nel193/platzimediaplayer/lib/plugins/Ads'

const video = document.querySelector('.movie');
const button: HTMLElement = document.querySelector('#playButton')
const sound: HTMLElement = document.querySelector('#muteButton')

const player = new mediaPlayer({
    el: video, 
    plugins: [new autoPlay(), new autoPause, new Ads()] 
});
button.onclick= () => player.playOrPause();
sound.onclick= () => player.mutedOrUnmuted();

if('serviceWorker' in navigator){
    navigator.serviceWorker.register("/sw.js").catch(error =>{
        console.log(error.message)
    })
}

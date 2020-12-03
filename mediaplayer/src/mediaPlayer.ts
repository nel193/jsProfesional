//3. y solicita la realización de una refactorización del constructor
//para que trabaje declara expresamente como Clase, ya que Typescript así
// lo requiere y esto le da lugar para que un elemento pueda ser de tipo mediaPlayer
class mediaPlayer {
//7. media toma como valor el HTMLMediaElement por ser su valor nativo en html
    media: HTMLMediaElement;
    plugins: Array<any>;
    container : HTMLElement;

    constructor(config) {
        this.media = config.el;
        this.plugins = config.plugins || [];
        this.initPlayer();
        this.initPlugins();
    }

    initPlayer(){
        this.container = document.createElement('div') 
        this.container.style.position = 'relative';
        this.media.parentNode.insertBefore(this.container, this.media);
        this.container.appendChild(this.media);
    }

    private initPlugins() {
//6. Este bloque de código se hace innecesario con la adaptacion a TS de autoPlay.js
//Por lo cual la referencia del player vuelve a ser this        
        // const player = {
        //     play: () => this.play(),
        //     pause: () => this.pause(),
        //     media: this.media,
        //     get muted() {
        //         return this.media.muted;
        //     },
        //     set muted(value) {
        //         this.media.muted = value;
        //     }
        // };
        this.plugins.forEach(plugin => {
            plugin.run(this);
        });
    }
    play() {
        this.media.play();
    }
    pause() {
        this.media.pause();
    }
    playOrPause() {
        this.media.paused
            ? this.media.play()
            : this.media.pause();
    }
    muted() {
        this.media.muted = true;
    }
    unmuted() {
        this.media.muted = false;
    }
    mutedOrUnmuted() {
        this.media.muted
            ? this.media.muted = false
            : this.media.muted = true;
    }
}




export default mediaPlayer;
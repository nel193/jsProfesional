//2.Por lo cual requiere que se importe el modulo que toma como referencia
// para poder utilizar player declarado como tipo mediaPlayer (Continuaciòn en mediaPlayer.js)
import mediaPlayer from '../mediaPlayer.js'
class autoPause {
//1.Al convertir el plugin a Typescript, se precisa declarar el tipo de valor
//que van a ser determinadas variables
//1.1 el uso de la palabra reservada private es para poder limitar el scope de la variable
// a que solo séa requerida de forma interna el modulo de código    
    private threshold: number;
    player: mediaPlayer;
//    
    constructor(){
        this.threshold = 0.25
        this.handleIntersection = this.handleIntersection.bind(this); 
        this.handleVisibilityChange = this.handleVisibilityChange.bind(this); 

    }
    run(player){
        this.player = player;
        // const observer = new IntersectionObserver(handler, config)
        const observer = new IntersectionObserver(this.handleIntersection, {
            threshold: this.threshold
        })
        observer.observe(this.player.media)

        document.addEventListener("visibilitychange", this.handleVisibilityChange)
    }
//4. Si bien esta no es una refactorización que pide Typescript, es importante optimizar
// el código. Por lo cual a entries se le asigna el tipo de valor que intersectionObserver 
// le asigna de forma interna, el cual es un array y se representa con los []  
    private handleIntersection(entries: IntersectionObserverEntry[]){
        const entry = entries [0];
        
        const isVisible = entry.intersectionRatio >= this.threshold

        if(isVisible){
            this.player.play()
        } else {
            this.player.pause()
        }
    }
    private handleVisibilityChange(){
        console.log(document.visibilityState)
        const isVisible = document.visibilityState == "visible";
        if(isVisible){
            this.player.play()
        } else {
            this.player.pause()
        }
    }
}

export default autoPause;
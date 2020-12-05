class AutoPause{
    constructor (){
        this.threshold=0.25;//porcentaje de observacion del elemento
        this.handleIntersection = this.handleIntersection.bind(this);//aqui this se va a referir a la instancia del pluggin
        this.handleVisibilitychange = this.handleVisibilitychange.bind(this);
    }

    run(player){
        this.player = player;

        //Hay que pasarle un handler que sera una funcion y un objeto de configuracion
        const observer = new IntersectionObserver(this.handleIntersection, {
            threshold:this.threshold 
        });
        observer.observe(this.player.media);

        document.addEventListener("visibilitychange", this.handleVisibilitychange);
    }


   
    handleIntersection(entries){ //entries son todos los objetos que estamos observando
        const entry = entries[0];

        const isVisible = entry.intersectionRatio >= this.threshold;
    
        if (isVisible) {
          this.player.play();
        } else {
          this.player.pause();
        }
    }

    handleVisibilitychange = () => {
        const isVisible = document.visibilityState === "visible";
        if(isVisible){
            this.player.play();
        }else{
            this.player.pause();
        }
    }
}

export default AutoPause;
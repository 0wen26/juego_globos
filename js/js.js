function empezar(){
    areaJuego.start();
}

let areaJuego = {
    //Crea elemento canvas
    canvas : document.createElement("canvas"),
    //Dibuja el canvas
    start : function () {
        this.canvas.width = 800;
        this.canvas.height = 500;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateAreaJuego,20);
    },
    //Borra canvas
    stop : function() {
        clearInterval(this.interval);
    },    
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

//https://www.w3schools.com/graphics/game_sound.asp sonido
//translate

/*
class Juego {
    constructor() {

        this.canvas = document.createElement("canvas")
        this.context = this.canvas.getContext("2d")
        this.canvas.width = 700
        this.canvas.height = 800

        document.body.insertBefore(this.canvas,document.body.childNodes[0])
        this.updateArea(this.canvas);
    }

    updateArea(canvas){
        //setInterval( () => { this. }, 20);
        canvas.beginPath();
        canvas.arc(100, 75, 50, 0, 2 * Math.PI);
        canvas.stroke();
    }
    
}
class Balloon {
    constructor(size,color,speedX,speedY,status,newPos,) {


    }


}

*/



let globos=[];
let cuadrado=[];
let colores=['blue','green','orange','black','red','yellow'];

function empezar(){
    areaJuego.start();
    //globos.push(new Globo(500,415,25));
    //globo = ;
    //areaJuego.draw();
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
        this.interval = setInterval(updateAreaJuego,2000);
        
    },
    //Borra canvas
    stop : function() {
        clearInterval(this.interval);
    },    
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    
}
function updateAreaJuego (){
    let x = Math.floor( Math.random() * (750-50))+50;
    let xx = x-25;
    
    let color = Math.floor( Math.random() * (6-0))+0;    
    globos.push(new Globo(x,415,25,colores[color]));

    cuadrado.push(new Cuadrado(xx,389,52,52));
    areaJuego.clear();
    for (let i = 0; i < globos.length; i++) {
                
        globos[i].update()
       // cuadrado[i].update()
       globos[i].newPos();
        //cuadrado[i].newPos();
        console.log(globos[i]);
    }
    //areaJuego.clear();
    //globo.cY += globo.speedcY-3;
    //globo.y += globo.speedY-3;
    //globo.update() 
}

function Cuadrado (x,y,width,height){
    this.width = width
    this.height = height
    this.x = x;
    this.y= y;
    this.speedY =0;

    this.update = function(){
        context = areaJuego.context;
        context.beginPath();
        context.rect(this.x,this.y,52,52);
        context.stroke();
        
    }
    this.newPos = function(){
        this.y += this.speedY-10;
    }

}

function Globo (x,y,radio,color){
    this.x = x 
    this.y = y
    this.radio = radio
    this.speedX = 0;
    this.speedY = 0;
    //this.color= color;
    this.size = 5;
    this.cX =475
    this.cY=389
    this.speedcX = 0;
    this.speedcY =0;
    this.PI = 3.1415;
    this.update = function(){
        ctx = areaJuego.context;
        
        
        //
    }
    this.newPos = function(){
        this.y += this.speedY-10;
    }
    
    
}
/*
 context.strokeStyle = color;
        context.fillStyle = color;
        context.beginPath();        
        context.arc(this.x, this.y, this.radio, 0, 2 * Math.PI);
        context.stroke();
        context.fill();

 */

      /* 
        context.translate(this.x, this.y);
        context.beginPath();
        context.moveTo(this.size * -0.5, 0);
        context.bezierCurveTo(this.size * -5, this.size * -1, this.size * -6, this.size * -10, 0, this.size * -10);
        context.bezierCurveTo(this.size * 6, this.size * -10, this.size * 5, this.size * -1, this.size * 0.5, 0);
        context.lineTo(this.size * 0.8, this.size * 0.7);
        context.lineTo(this.size * -0.8, this.size * 0.7);
        context.closePath();
        context.fillStyle = 'hsla( 0, 0%, ' + (0 + ((this.size ) * 100)) + '%, .35 )';
        context.fill();
        context.lineWidth = this.size * 0.4;
        context.stroke();
        context.restore();
        context.save();
        context.translate(this.x - (this.size * 1.75), this.y - (this.size * 7.5));
        context.rotate(this.PI / 4);
        context.scale(1, 2);
        context.beginPath();
        context.arc(0, 0, this.size * 0.5, 0, this.PI);
        context.fillStyle = 'hsla( 0, 0%, 100%, .8 )';
        context.fill();



//https://www.w3schools.com/graphics/game_sound.asp sonido
//translate
*/

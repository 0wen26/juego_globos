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
let img = [1,2,3,4,5,6,7,8];
let score =0;
function empezar(){
    areaJuego.start();
    areaJuego.listen();
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
        this.interval = setInterval(updateAreaJuego,200);
        elemLeft = this.canvas.offsetLeft + this.canvas.clientLeft;
        elemTop = this.canvas.offsetTop + this.canvas.clientTop;
    },
    //Borra canvas
    stop : function() {
        clearInterval(this.interval);
    },    
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    listen : function(){
        this.canvas.addEventListener('click', function(event) {
            let x = event.pageX - elemLeft;
            let y = event.pageY - elemTop; 
            comprobar(x,y);           
        }) ;
    },
    drawScore: function(){
        this.context.font = "16px Arial";
        this.context.fillStyle = "#0095DD";
        this.context.fillText("Score: "+score, 8, 20);
    }
    
}



function updateAreaJuego (){
    let x = Math.floor( Math.random() * (750-50))+50;
    let color = Math.floor( Math.random() * (8-1))+1;
    let img = new Image();
    if (color==1) {
        img.src = "imagenes/1.png";
    } else if (color == 2) {
        img.src = "imagenes/2.png"; 
    }else if(color==3){
        img.src = "imagenes/3.png"; 
    }else if(color==4){
        img.src = "imagenes/4.png"; 
    }else if(color==5){
        img.src = "imagenes/5.png"; 
    }else if(color==6){
        img.src = "imagenes/6.png"; 
    }else if(color==7){
        img.src = "imagenes/7.png"; 
    }else{
        img.src = "imagenes/8.png"; 
    }
    globos.push(new Globo(x,415,img,1));

    cuadrado.push(new Cuadrado(x,415,52,52));
    
    areaJuego.clear();
    areaJuego.drawScore();
    for (let i = 0; i < globos.length; i++) {
        if (globos[i].status == 1) {
            globos[i].update()
            //cuadrado[i].update()
            globos[i].newPos();
            //cuadrado[i].newPos();
        }
        
        //console.log(globos[i]);
    }
    //areaJuego.clear();
    //globo.cY += globo.speedcY-3;
    //globo.y += globo.speedY-3;
    //globo.update() 
}
function comprobar(x,y){
   globos.forEach(function(element)  {
       if (y > element.y && y < element.y + element.height && x > element.x && x < element.x + element.width) {
            globos.pop(element);
            cuadrado.pop(element);
            element.status = 0;
            score++;
           //console.log(element.status);
       }
   });

    
        
        //console.log(`esto es x: ${x} y esto y: ${y}`);
    
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

function Globo (x,y,img,status){
    this.x = x 
    this.y = y
    this.status = status
    this.width = 52
    this.height = 52
    this.speedX = 0;
    this.speedY = 0;
    //this.color= color;
    this.size = 5;
    this.cX =475
    this.cY=389
    this.speedcX = 0;
    this.speedcY =0;
    this.PI = 3.1415;
    this.img = img;
    this.update = function(){
        ctx = areaJuego.context;
        ctx.drawImage(img, this.x,this.y,this.width,this.height);
        
        
        //
    }
    this.newPos = function(){
        let r = Math.floor( Math.random() * (3-1))+1;
        console.log(r);
        if (r == 1) {
            this.y = this.y -5;
            this.x = this.x -5;
        }else{
            this.y = this.y -5;
            this.x = this.x +5;
        }
        
        
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

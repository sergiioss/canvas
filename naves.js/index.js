

game={
    canvas:null,
    ctx:null,
    imagen:null,
    caratula:true,
    imagenEnemigo:null,
    teclaPulsada:null,
    tecla:[],
    colorBala:"red",
    balas_array:new Array(),
    enemigos_array:new Array()  
}
//Constantes

const KEY_ENTER = 13;
const KEY_LEFT = 37;
const KEY_UP = 38;
const KEY_RIGHT = 39;
const KEY_DOWN = 40;
const BARRA = 32;

//Objetos

function Bala(x,y,w){
    this.x = x,
    this.y = y,
    this.w = w,
    this.dibujar = function(){

    }
}

function Jugador(x){
    this.x = x;
    this.y = 450;
    this.dibujar = function(x){
        this.x = x;
        game.ctx.drawImage(game.imagen, this.x, this.y, 30,15);
    };
}

function Eenemigo(x,y){
    this.x = x;
    this.y = y,
    this.w = 35,
    this.veces = 0,
    this.dx = 5;
    this.ciclos = 0;
    this.num = 14;
    this.figura = true;
    this.vive = true;
    this.dibujar = function(){
    };
}

//Funciones

const caratula = () =>{
    let imagen = new Image();
    imagen.src = "imagenes/fondoJuegoNaves.jpg";
    imagen.onload = () =>{
        game.ctx.drawImage(imagen,0,0);
    }
}

const seleccionar = (e) =>{
    if(game.caratula){
        inicio();
    }
}

const inicio = () =>{
    game.ctx.clearRect(0,0,game.canvas.width, game.canvas.height);
    game.caratula = false;
    game.jugador = new Jugador(0);
    game.x = game.canvas.width/2;
    game.jugador.dibujar(game.x);
    animar();


}



let x = 100;
let y = 100;

const animar = () =>{
    requestAnimationFrame(animar);
    verificar();
    pintar();
}

const verificar = () =>{

    if(game.tecla[KEY_RIGHT]){
        game.x += 3
    }
    if(game.tecla[KEY_LEFT]){
        game.x -= 3
    }
    if(game.tecla[KEY_ENTER]){
        game.x += 10
    }
    if(game.tecla[KEY_UP]){
        game.x += 10
    }
    if(game.tecla[KEY_UP]){
        game.x += 10
    }

    x+=2;
    if(x > game.canvas.width){
        x = 0;
    }
}

const pintar = () =>{
    game.ctx.clearRect(0,0, game.canvas.width, game.canvas.height);
    game.jugador.dibujar(game.x);

}

//Listener

document.addEventListener("keydown", function(e){
    game.teclaPulsada = e.keyCode;
    game.tecla[e.keyCode] = true;
});

document.addEventListener("keyup", function(e){
    game.tecla[e.keyCode] = false;
});


window.requestAnimationFrame = (function (){
    return  window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame ||
            function (callback) {
                window.setTimeout(callback, 17);
            }
})();

window.onload = function(){
    game.canvas = document.getElementById('canvas');

    if(game.canvas && game.canvas.getContext){
        game.ctx= canvas.getContext("2d");

        if(game.ctx){
            game.imagen = new Image();
            game.imagen.src = "imagenes/nave.png"

            caratula();

            game.canvas.addEventListener("click",seleccionar, false);
            
        }else{
            alert('No soporta canvas')
        }

    }else{

    }
}
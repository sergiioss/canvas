

game={
    canvas:null,
    ctx:null
}

let x = 100;
let y = 100;

const animar = () =>{
    requestAnimationFrame(animar);
    verificar();
    pintar();
}

const verificar = () =>{
    x+=2;
    if(x > game.canvas.width){
        x = 0;
    }
}

const pintar = () =>{
    game.ctx.clearRect(0,0, game.canvas.width, game.canvas.height);
    game.ctx.fillStyle="red";
    game.ctx.beginPath();
    game.ctx.arc(x,y,5,0,2 * Math.PI);
    game.ctx.fill();
}

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
            animar();
        }else{
            alert('No soporta canvas')
        }

    }else{

    }
}

const game = {
    ctx:null,
    canvas:null,
    radio:10,
    bolaX:50,
    bolaY:100,
    colorBola:"red",
    dx:15,
    dy:-15,
    limiteDerecha:0,
    limiteIzquierda:0,
    limiteAbajo:0,
    limiteArriba:0
};


window.onload= function(){
    game.canvas = document.getElementById('canvas');

    if(canvas && canvas.getContext){

        game.ctx = canvas.getContext("2d");

        if(game.ctx){
            //styles
           rebote();
           mueve();
           setInterval(mueve,60);

            
        }else{
            alert('No soporta la etiqueta canvas')
        }
    }else{

    }
}

const rebote = () =>{
    game.ctx.lineWidth = game.radio;
    game.ctx.fillStyle= game.colorBola;

    game.limiteDerecha= game.canvas.width - game.radio;
    game.limiteIzquierda= game.radio;

    game.limiteAbajo=game.canvas.height -game.radio;
    game.limiteArriba=game.radio

}

const mueve = () =>{
    game.ctx.clearRect(0,0, game.canvas.width, game.canvas.height);
    verificar();
    game.bolaX += game.dx;
    game.bolaY += game.dy;
    game.ctx.beginPath();
    game.ctx.arc(game.bolaX, game.bolaY, game.radio, 0,2*Math.PI,true);
    game.ctx.fill();
}

const verificar = () =>{
    let nbolaX = game.bolaX + game.dx;
    let nbolaY = game.bolaY+ game.dy;

    if(nbolaX > game.limiteDerecha){
        game.dx *= -1;
        nbolaX = game.limiteDerecha;
    }
    if(nbolaX < game.limiteIzquierda){
        game.dx *= -1;
        nbolaX = game.limiteIzquierda;
    }
    if(nbolaY > game.limiteAbajo){
        game.dy *= -1;
        nbolaY = game.limiteAbajo;
    }
    if(nbolaY < game.limiteArriba){
        game.dy *= -1;
        nbolaY = game.limiteArriba;
    }

    game.bolaX = nbolaX;
    game.bolaY = nbolaY;
}

const game = {
    ctx:null,
    canvas:null,
    radio:10,
    bolaX:50,
    bolaY:100,
    colorBola:"red",
    disX:30
};


window.onload= function(){
    game.canvas = document.getElementById('canvas');

    if(canvas && canvas.getContext){

        game.ctx = canvas.getContext("2d");

        if(game.ctx){
            //styles
           game.ctx.lineWidth = game.radio;
           game.ctx.fillStyle= game.colorBola;
           mueve();
           setInterval(mueve,60);

            
        }else{
            alert('No soporta la etiqueta canvas')
        }
    }else{

    }
}

const mueve = () =>{
    game.bolaX += game.disX
    game.ctx.beginPath();
    game.ctx.arc(game.bolaX, game.bolaY, game.radio, 0,2*Math.PI,true);
    game.ctx.fill();
}
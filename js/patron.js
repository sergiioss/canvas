window.onload= function(){
    canvas = document.getElementById('canvas');

    if(canvas && canvas.getContext){
        ctx= canvas.getContext("2d");

        if(ctx){

           let bola = new Image();
           bola.src = "../bola.png";

           bola.onload = function(e){
            let patron = ctx.createPattern(bola,"repeat");
            ctx.fillStyle = patron;
            ctx.fillRect(0,0, canvas.width, canvas.height);
        }

        }else{
            alert('No soporta la etiqueta canvas')
        }

    }else{

    }
}
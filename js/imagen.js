window.onload= function(){
    canvas = document.getElementById('canvas');

    if(canvas && canvas.getContext){
        ctx= canvas.getContext("2d");

        if(ctx){

            let imagen = new Image();

            imagen.src = "../bola.png";

            imagen.onload = function(e){
                procesarImagen()
            }

            function procesarImagen(){
                ctx.drawImage(imagen,10,10)
            }

        }
    }else{

    }
}

window.onload= function(){
    canvas = document.getElementById('canvas');

    if(canvas && canvas.getContext){
        ctx= canvas.getContext("2d");

        if(ctx){
            // definimos los colores
            ctx.fillStyle= "yellow";
            ctx.strokeStyle = "#ff222";
            ctx.lineWidth = 5;

            //x(eje),y(eje),w(width),h(heigth)
            ctx.fillRect(150, 50, 50, 50);
            ctx.strokeRect(150, 50, 50, 50);

            //Cambiar color de relleno
            ctx.fillStyle = "rgba(250,250,0,0,25)";
            ctx.fillRect(250, 50, 50, 50);
            ctx.strokeRect(250, 50, 50, 50); 
        }else{
            alert('No soporta la etiqueta canvas')
        }

    }else{

    }
}
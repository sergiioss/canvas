window.onload= function(){


    canvas = document.getElementById('canvas');

    if(canvas && canvas.getContext){
        ctx= canvas.getContext("2d");

        if(ctx){
            ctx.font = "8em Verdana";
            ctx.lineWidth = 1.0;
            ctx.fillStyle = "blue";
            ctx.strokeStyle = "yellow";

            //sombras
            ctx.shadowColor = "black";
            ctx.shadowOffsetX = 5;
            ctx.shadowOffsetY = -5;
            ctx.shadowBlur = 10;

            ctx.fillText("canvas", 35, 150);
            ctx.strokeText("canvas", 35,150);

            
        }else{
            alert('No soporta la etiqueta canvas')
        }

    }else{
        alert("No se puede.")
    }
}
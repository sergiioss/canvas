
window.onload= function(){
    canvas = document.getElementById('canvas');

    if(canvas && canvas.getContext){
        ctx= canvas.getContext("2d");

        if(ctx){
            //styles
            ctx.lineWidth = 25;
            ctx.strokeStyle = "yellow";
            //Iniciamos el trazo de la linea
            ctx.beginPath();
            //para redondear las lineas
            ctx.lineCap = "round";
            ctx.moveTo(50, 50)
            ctx.lineTo(550,50);
            ctx.stroke();

            ctx.strokeStyle = "orange";
            ctx.beginPath();
            ctx.lineCap = "square";
            ctx.moveTo(50, 100)
            ctx.lineTo(550,100);
            ctx.stroke();

            ctx.strokeStyle = "blue";
            ctx.beginPath();
            ctx.lineCap = "butt";
            ctx.moveTo(50, 150)
            ctx.lineTo(550,150);
            ctx.stroke();

        }else{
            alert('No soporta la etiqueta canvas')
        }

    }else{

    }
}
window.onload= function(){
    canvas = document.getElementById('canvas');

    if(canvas && canvas.getContext){
        ctx= canvas.getContext("2d");

        if(ctx){
            //styles
            ctx.lineWidth=25;
            ctx.strokeStyle="yellow";
            ctx.fillStyle="blue";
            //path
            ctx.beginPath();
            ctx.moveTo(50, 100);
            ctx.lineTo(100,50);
            ctx.lineTo(150,100);
            ctx.lineTo(100,150);
            ctx.stroke();
            //path
            ctx.beginPath();
            ctx.moveTo(200, 100);
            ctx.lineTo(250,50);
            ctx.lineTo(300,100);
            ctx.lineTo(250,150);
            ctx.closePath();
            ctx.stroke();
            //path
            ctx.beginPath();
            ctx.moveTo(350, 100);
            ctx.lineTo(400,50);
            ctx.lineTo(450,100);
            ctx.lineTo(400,150);
            ctx.fill();
            ctx.closePath();
            ctx.stroke();
        }else{
            alert('No soporta la etiqueta canvas')
        }

    }else{

    }
}
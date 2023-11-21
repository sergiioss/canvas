window.onload= function(){
    canvas = document.getElementById('canvas');

    if(canvas && canvas.getContext){
        ctx= canvas.getContext("2d");

        if(ctx){
            //styles
            ctx.lineWidth = 10;
            ctx.strokeStyle = "yellow";
            ctx.fillStyle = "blue";

            //arcos
            ctx.beginPath();
            ctx.arc(100,150,50,1.1*Math.PI, 1.9 * Math.PI);
            ctx.stroke();

            //arcos
            ctx.beginPath();
            ctx.arc(250,150,50,1.1*Math.PI, 1.9 * Math.PI, true);
            ctx.stroke();

            //arcos
            ctx.beginPath();
            ctx.arc(400,150,50, 0, 2*Math.PI);
            ctx.fill();
            ctx.stroke();


        }else{
            alert('No soporta la etiqueta canvas')
        }

    }else{

    }
}
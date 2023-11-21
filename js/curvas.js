window.onload= function(){
    canvas = document.getElementById('canvas');

    if(canvas && canvas.getContext){
        ctx= canvas.getContext("2d");

        if(ctx){
            //styles
            ctx.lineWidth = 10;
            ctx.strokeStyle = "yellow";
            ctx.beginPath();
            ctx.moveTo(20,20);
            ctx.quadraticCurveTo(20,100,200,20);
            ctx.stroke();

        }else{
            alert('No soporta la etiqueta canvas')
        }

    }else{

    }
}
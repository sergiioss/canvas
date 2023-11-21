window.onload= function(){
    canvas = document.getElementById('canvas');

    if(canvas && canvas.getContext){
        ctx= canvas.getContext("2d");

        if(ctx){

            let gradiente = ctx.createLinearGradient(0,0,canvas.width, 0);

            gradiente.addColorStop(0,"green");
            gradiente.addColorStop(0.30,"white");
            gradiente.addColorStop(0.60,"red");
            gradiente.addColorStop(1,"cyan");

            ctx.fillStyle = gradiente;
            ctx.fillRect(0,0,canvas.width, canvas.height);

        }else{
            alert('No soporta la etiqueta canvas')
        }

    }else{

    }
}
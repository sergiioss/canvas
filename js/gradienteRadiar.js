window.onload= function(){
    canvas = document.getElementById('canvas');

    if(canvas && canvas.getContext){
        ctx= canvas.getContext("2d");

        if(ctx){

           let x1 = canvas.width/2;
           let y1 = canvas.height/2;
           let r1 = 10;

           let x2 = canvas.width/2;
           let y2 = canvas.height/2;
           let r2 = 300;

           let gradiente = ctx.createRadialGradient(x1,y1,r1,x2,y2,r2);

           gradiente.addColorStop(0,"pink");
           gradiente.addColorStop(0.15,"yellow");
           gradiente.addColorStop(0.35,"white");
           gradiente.addColorStop(0.65,"green");
           gradiente.addColorStop(1,"red");

           ctx.fillStyle = gradiente;
           ctx.fillRect(0,0,canvas.width, canvas.height);

        }else{
            alert('No soporta la etiqueta canvas')
        }

    }else{

    }
}
window.onload= function(){
    canvas = document.getElementById('canvas');

    if(canvas && canvas.getContext){
        ctx= canvas.getContext("2d");

        if(ctx){

            let radio = 0;
            let angulo = 0;
            
            //styles
            ctx.lineWidth=10;
            ctx.strokeStyle="blue";
            ctx.beginPath();
            ctx.moveTo(canvas.width / 2, canvas.height/2);

            for(let i = 0; i < 200; i++){
                radio += 0.75;
                angulo += (Math.PI*2) / 50;
                let x = canvas.width/2 + radio * Math.cos(angulo);
                let y = canvas.height/2 + radio * Math.sin(angulo);
                ctx.lineTo(x,y);
            }
            ctx.stroke();

        }else{
            alert('No soporta la etiqueta canvas')
        }

    }else{

    }
}
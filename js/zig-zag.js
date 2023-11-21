window.onload= function(){
    canvas = document.getElementById('canvas');

    if(canvas && canvas.getContext){
        ctx= canvas.getContext("2d");

        if(ctx){

            let inicioX = 85;
            let inicioY = 70;
            let desplazamiento = 30;
            let lineas = 15;
            
            //styles
            ctx.lineWidth=10;
            ctx.strokeStyle="blue";
            ctx.lineCap = "round";
            ctx.lineJoin = "round";
            ctx.beginPath();
            ctx.moveTo(inicioX, inicioY);

            for(let i = 0; i< lineas; i++){
                let x = inicioX + ((i+1)*desplazamiento);
                let y = inicioY;
            
                if(i % 2 == 0){
                    y = inicioY + 100;
                }
                ctx.lineTo(x,y)
            }

            ctx.stroke();

        }else{
            alert('No soporta la etiqueta canvas')
        }

    }else{

    }
}
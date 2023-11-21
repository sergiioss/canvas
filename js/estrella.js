window.onload= function(){
    canvas = document.getElementById('canvas');

    if(canvas && canvas.getContext){
        ctx= canvas.getContext("2d");

        if(ctx){

            let puntas = 10;
            let vertices = puntas * 2;
            let angulo = Math.PI*2 / vertices;
            let radioInterno = 40;
            let radioExterno = 80;
            let xx = canvas.width / 2;
            let yy = canvas.height /2;
            ctx.strokeStyle = "red";
            ctx.fillStyle = "yellow";
            ctx.lineWidth = 10;
            ctx.beginPath();

            for(let i = 0; i < vertices ; i++){
                let x, y;

                if(i % 2 == 0){
                    x = Math.cos(angulo*i) * radioExterno;
                    y = Math.sin(angulo*i) * radioExterno;
                }else{
                    x = Math.cos(angulo*i) * radioInterno;
                    y = Math.sin(angulo*i) * radioInterno;
                }
                ctx.lineTo(xx+x, yy+y);
            }
            
            ctx.closePath();
            ctx.fill();
            ctx.stroke();

        }else{
            alert('No soporta la etiqueta canvas')
        }

    }else{

    }
}
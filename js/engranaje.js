window.onload = function(){
    canvas = document.getElementById('canvas');

    if(canvas && canvas.getContext){
        ctx= canvas.getContext("2d");

        if(ctx){
            //centro
            let centroX = canvas.width/2;
            let centroY = canvas.height/2;

            //Radios de los circulos
            let radioExterno = 95;
            let radioInterno = 50;
            let radioMedio = radioInterno * 1.6;
            let radioCentro = 20;

            //Numero de puntos
            let numPuntos = 40;

            ctx.beginPath();
            ctx.lineJoin = "bevel";

            for(let i = 0; i < numPuntos; i++){
                let radio = null;
                if(i % 2 == 0){
                    radio = radioExterno;

                }else{
                    radio = radioInterno;
                }

                //Calculamos las coordernadas externas
                let angulo = Math.PI *2 / numPuntos * (i+1);
                let x = (radio*Math.sin(angulo)) + centroX;
                let y = (radio * Math.cos(angulo)) + centroY;

                //Dibujamos la linea
                if(i === 0){
                    ctx.moveTo(x,y);
    
                }else{
                    ctx.lineTo(x,y);
                }
            }
           
            ctx.closePath();

            ctx.lineWidth = 5;
            ctx.strokeStyle = "red";
            ctx.fillStyle = "orange";
            ctx.stroke();


        }else{
            alert('No soporta la etiqueta canvas')
        }

    }else{

    }
}
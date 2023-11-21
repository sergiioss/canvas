
function Rectangulo (x,y,ancho,alto,radio,fondo,linea){
    
    this.x = x
    this.y = y
    this.w = ancho
    this.h = alto;
    this.r = radio
    this.f = fondo
    this.l = linea

    this.dibujar = function(){
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(this.x, this.y + this.r)

        //Esquina inferior izquierda
        ctx.lineTo(this.x, this.y + this.h - this.r);
        ctx.quadraticCurveTo(this.x, this.y + this.h, this.x + this.r, this.y + this.h)

        //Esquina inferior derecha
        ctx.lineTo(this.x + this.w - this.r, this.y + this.h);
        ctx.quadraticCurveTo(this.x + this.w, this.y + this.h, this.x + this.w, this.y + this.h - this.r);

        //Esquina superior derecha
        ctx.lineTo(this.x + this.w, this.y + this.r);
        ctx.quadraticCurveTo(this.x + this.w, this.y, this.x + this.w - this.r, this.y);

        //Esquina superior izquierda
        ctx.lineTo(this.x + this.r, this.y);
        ctx.quadraticCurveTo(this.x, this.y, this.x, this.y + this.r);

        ctx.fillStyle = this.f;
        ctx.strokeStyle = this.l;
        ctx.fill();
        ctx.stroke();
        ctx.restore();
    }
}

window.onload= function(){


    canvas = document.getElementById('canvas');

    if(canvas && canvas.getContext){
        ctx= canvas.getContext("2d");

        if(ctx){
            let rectangulo1 = new Rectangulo(30,30,200,120,20,"cyan", "black");
            rectangulo1.dibujar();
            
        }else{
            alert('No soporta la etiqueta canvas')
        }

    }else{
        alert("No se puede.")
    }
}
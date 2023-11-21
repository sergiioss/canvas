
let canvas,ctx,imagen;
let archivoSelect;

window.onload= function(){
    archivoSelect = document.getElementById("archivo");
    canvas = document.getElementById('canvas');

    if(canvas && canvas.getContext){

        ctx = canvas.getContext("2d");

        if(ctx){
            //styles
            archivoSelect.onchange = function(e){
                if(archivoSelect.value != ""){
                    imagen.src = "imagenes/" + archivoSelect.value;
                    imagen.onload = function(){
                        procesaImagen();
                    }
                }
            }
            function procesaImagen(){
                limpiar();
                ctx.drawImage(imagen, 10,10);
            }

            function limpiar(){
                ctx.clearRect(250,10, imagen.width, imagen.height);
            }

            imagen = new Image();
            imagen.src = "imagenes/elbeso.png";
            imagen.onload = function(e){
                procesaImagen();
            }
            

        }else{
            alert('No soporta la etiqueta canvas')
        }

    }else{

    }
}
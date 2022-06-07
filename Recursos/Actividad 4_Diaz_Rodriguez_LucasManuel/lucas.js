const imagen_default ='./imagenes/default.jpg';
const imagen_cambiada ='./imagenes/changed.jpg'

let contenido_div_imagen = document.getElementById('div_de_imagen');
let contenido_alerta = document.getElementById("alertas");


/* 

    Usamos el metodo get de jquery, que tiene 3 status en el success.
    jQuery.get( url [, data ] [, success ] [, dataType ] )

    https://api.jquery.com/jQuery.get/

*/

// Comprobamos que la imagen "changed.jpg" que se va a usar para cambiar la default existe
$.get(imagen_cambiada, function (){

})
.done (function(){
    // Si existe la imagen manda una alerta al HTML y a la consola. Ademas muestra la imagen.
    console.warn(`El fichero ${imagen_cambiada} si existe`);
    let mensaje = `<div class="alert alert-primary alert-dismissible" role="alert">La imagen ${imagen_cambiada} <strong>EXISTE</strong> y cambiará la imagen principal ${imagen_default}<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>`
    contenido_alerta.innerHTML = mensaje;
    contenido_div_imagen.innerHTML = ('<img src="./imagenes/changed.jpg" class="img-fluid rounded img-thumbnail"  alt="solo una imagen"></img>');

})
// Si falla la carga de la imagen "changed.jpg" comprueba tambien que esta la imagen "default.jpg" que es la que se iba a cambiar
.fail (function(){

    if($.get(imagen_default, function (){

    })
        // Sino esta la segunda imagen pero si la primera, muestra la primera imagen
        .done (function(){
            console.warn(`NO EXISTE ${imagen_cambiada} pero SI ${imagen_default}`);
            let mensaje = `<div class="alert alert-primary alert-dismissible" role="alert"><strong>NO EXISTE LA IMAGEN changed.jpg PARA CAMBIAR - DEJAMOS LA DEFAULT</strong><button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>`
            contenido_alerta.innerHTML = mensaje;
            contenido_div_imagen.innerHTML = ('<img src="./imagenes/default.jpg" class="img-fluid rounded img-thumbnail"  alt="solo una imagen"></img>');
        })
        // Y sino esta ninguna de las dos imagenes Ni la "default.jpg" ni "changed.jpg" muestra una 3@ imagen alternativa
        .fail (function(){
            console.warn(`NO EXISTE NINGUNO DE LOS DOS FICHEROS ${imagen_cambiada} ${imagen_default}`);
            let mensaje = `<div class="alert alert-danger alert-dismissible" role="alert"><strong>NO EXISTE NINGUNA DE LAS DOS IMAGENES SE PONE UNA ALTERNATIVA</strong><button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>`
            contenido_alerta.innerHTML = mensaje;
            contenido_div_imagen.innerHTML = ('<img src="./imagenes/we_moved.jpg" class="img-fluid rounded img-thumbnail"  alt="imagen alternativa"></img>');
        })

    ){

    }else {

    };
    /*
    console.warn(`El fichero ${imagen_cambiada} NO existe`);
    let mensaje = `<div class="alert alert-danger alert-dismissible" role="alert">La imagen ${imagen_cambiada} <strong>NO existe </strong>se deja la DEFAULT ${imagen_default}<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>`
    contenido_alerta.innerHTML = mensaje;
    */
});


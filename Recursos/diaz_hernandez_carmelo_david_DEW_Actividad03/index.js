nFilas = document.getElementsByName('filas')
nColumnas = document.getElementsByName('columnas')
button = document.getElementById('submit')
container = document.getElementById('container')

let contenido = '';

// Método por el que se muestra la tabla en el mimo html sin tomar los datos de la url
// Descomentar para poder usarlo
// button.onclick = function () {

//     contenido = ''
//     container.innerHTML = contenido;

//     contenido += '<table class="table table-striped">'
//     for (let i = 0; i < nFilas[0].value; i++) {
//         contenido += '<tr>'

//         for (let j = 0; j < nColumnas[0].value; j++) {

//             contenido += `<td> Fila ${i + 1} Columna ${j + 1}</td>`
//         }
//     }
//     contenido += '</tr></table>'

//     container.innerHTML = contenido


//     return false;
// }




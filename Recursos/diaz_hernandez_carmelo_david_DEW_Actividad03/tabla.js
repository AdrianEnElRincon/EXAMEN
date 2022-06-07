
    
    let queryString = window.location.search;
    let urlParams = new URLSearchParams(queryString);

    let row = parseInt(urlParams.get('filas'));
    let column = parseInt(urlParams.get('columnas'))

    // console.log('filas', row)
    // console.log('columnas', column);
    
    contenido = ''
        container.innerHTML = contenido;
    
        contenido += '<table class="table table-striped">'
        for (let i = 0; i < row; i++) {
            contenido += '<tr>'
    
            for (let j = 0; j < column; j++) {
    
                contenido += `<td> Fila ${i + 1} Columna ${j + 1}</td>`
            }
        }
        contenido += '</tr></table>'
    
        container.innerHTML = contenido


    // urlParams.set('filas','0');
    // urlParams.set('columnas','0')


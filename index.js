class Ventana {

    static minWidth = 200
    static minHeight = 200

    constructor(options = { width: 400, height: 400, posX: 0, posY: 0}) {

        this.options = options

        const titleBar = $('<div />')
            .addClass('window-titlebar')
            .append($('<p />').addClass('window-title'))
            .append($('<div />').addClass('window-terminate').html('&times;'))


        this.frame = $('<div draggable="false" />')
            .addClass('window-frame')
            .css('width', options.width)
            .css('height', options.height)
            .css('left', options.posX)
            .css('top', options.posY)
            .css('font-size', options.width * 0.05 + 'px')
            .append(titleBar)
        
        this.setTitle('Ventana')
        this.render()
    }

    /**
     * Inicializacion de la interactividad de la ventana, se ha de ejecutar tras añadir la ventana al documento
     */
    init() {

        // Cerrar ventana
        $('.window-terminate').on('mousedown', function () {
            $(this).parents('.window-frame').remove()
        })

    }

    /**
     * Añadir la ventana al flujo del documento e inicializar su interactividad
     */
    render() {
        this.frame.appendTo('body')
        this.init()
    }

    /**
     * Cambiar el titulo de la ventana
     * 
     * @param {String} title 
     */
    setTitle(title) {
        this.frame.find('.window-title').text(title)
    }


    /**
     * Cambia el contenido html de la ventana
     * 
     * @param {HTMLElement} content 
     */
    setContent(content) {
        this.frame.children('.window-content').remove()
        this.frame.append(content)
    }

    

    /**
     * Cerrar la ventana
     */
    close() {
        this.frame.remove()
    }

}

class Imagen extends Ventana {

    constructor(imageSrc = '/img/noimage.png', options = {}) {
        super(options)

        const img = document.createElement('img')

        img.className = 'window-content'
        img.src = imageSrc

        this.setContent(img)
        this.setTitle(imageSrc.match(/[a-zA-Z]+.png/g))

    }


}

const form = document.querySelector('form')
const inputErrorMessage = document.createElement('div')

inputErrorMessage.innerText = 'ERROR: No puede dejar el campo del nombre del archivo vacio'
inputErrorMessage.style.backgroundColor = "red"
inputErrorMessage.style.color = 'white'
inputErrorMessage.style.width = '20rem'
inputErrorMessage.style.opacity = '0%'
inputErrorMessage.style.zIndex = 9999
inputErrorMessage.style.transition = "opacity 2s ease"
inputErrorMessage.style.display = "inline-block"
inputErrorMessage.style.padding = ".2rem"
inputErrorMessage.style.borderRadius = ".5rem"
inputErrorMessage.style.textAlign = "center"


form.append(inputErrorMessage)

form.addEventListener('submit', (ev) => {
    event.preventDefault()
    const imageSrc = document.querySelector('form>input').value

    if (imageSrc) {
        $.ajax({
            url: '/img/' + imageSrc,
            success: (data) => {
                new Imagen('/img/' + imageSrc)
            },
            error: ( _, status, error) => {
                console.error(`ERROR: error al cargar la imagen del servidor. imagen no encontrada con el nombre: "${imageSrc}"`)
                new Imagen()
            }
        })
    } else {
        inputErrorMessage.style.opacity = "100%"
        setTimeout(() => inputErrorMessage.style.opacity = "0%", 5000)
    }
})


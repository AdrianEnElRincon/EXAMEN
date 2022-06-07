let actualContentDisp = $('#lineActual');
let histContentDisp = $('#lineHistory');

actualContent = actualContentDisp.text();
auxActualContent = '';
histContent = histContentDisp.text();



const handleCalc = (e) => {
    // console.log(e.target.value);


    if (!isNaN(e.target.value)) {
        if (actualContent.length > 10) {
            return
        }
        if (auxActualContent.length > 10) {
            actualContentDisp.text('Error');
            return
        }
        if (actualContent == '0') {
            actualContent = e.target.value;
            histContent += actualContent;
        } else {
            if (auxActualContent) {
                actualContent = e.target.value;
                actualContentDisp.text(actualContent);
                histContent = actualContent;
                auxActualContent = '';
            } else {
                actualContent += e.target.value;
                histContent += e.target.value;
            }
        }
        actualContentDisp.text(actualContent);
        histContentDisp.text(histContent);
    } else {
        if(!histContent){
            histContent = '0';
        }
        if (auxActualContent) {
            histContent = auxActualContent;
            auxActualContent = '';
            histContentDisp.text(histContent);
        }
        switch (e.target.value) {
            case '.':
                if (!actualContent) {
                    actualContent = '0.';
                    histContent += actualContent;
                } else {
                    if (!actualContent.includes('.')) {
                        actualContent += '.';
                        histContent += '.';
                    }
                }
                actualContentDisp.text(actualContent);
                histContentDisp.text(histContent);
                break;
            case 'C':
                actualContent = '0';
                histContent = '';
                actualContentDisp.text(actualContent);
                histContentDisp.text(histContent);
                break;
            case 'CE':
                actualContent = '';
                actualContentDisp.text(actualContent);
                break;
            case 'Back':
                actualContent = actualContent.slice(0, -1);
                actualContentDisp.text(actualContent);
                break;
            case '1/x':
                actualContent = 1 / actualContent;
                auxActualContent = actualContent;
                actualContentDisp.text(actualContent);
                break;
            case 'x²':
                actualContent = actualContent * actualContent;
                auxActualContent = actualContent;
                actualContentDisp.text(actualContent);
                break;
            case '√':
                actualContent = Math.sqrt(actualContent);
                auxActualContent = actualContent;
                actualContentDisp.text(actualContent);
                break;
            case '%':
                percentage = actualContent;
                actualContent = '';

                break;
            case 'x':
                actualContent = '';
                histContent += ' * ';
                actualContentDisp.text(actualContent);
                break;
            case '÷':
                actualContent = '';
                histContent += ' / ';
                actualContentDisp.text(actualContent);
                break;
            case '+':
                actualContent = '';
                histContent += ' + ';
                actualContentDisp.text(actualContent);
                break;
            case '-':
                actualContent = '';
                histContent += ' - ';
                actualContentDisp.text(actualContent);
                break;
            case '=':
                Math.round(histContent, 10);
                actualContent = eval(histContent);
                
                actualContentDisp.text(actualContent);
                auxActualContent = actualContent;
                break;
            default:
                break;
        }
    }


}

$('button').click(handleCalc); //Manejo de la calculadora por ratón

document.onkeydown = function (e) { //Manejo de la calculadora por teclado
    switch (e.key) {
        case '0':
            handleCalc({ target: { value: '0' } });
            break;
        case '1':
            handleCalc({ target: { value: '1' } });
            break;
        case '2':
            handleCalc({ target: { value: '2' } });
            break;
        case '3':
            handleCalc({ target: { value: '3' } });
            break;
        case '4':
            handleCalc({ target: { value: '4' } });
            break;
        case '5':
            handleCalc({ target: { value: '5' } });
            break;
        case '6':
            handleCalc({ target: { value: '6' } });
            break;
        case '7':
            handleCalc({ target: { value: '7' } });
            break;
        case '8':
            handleCalc({ target: { value: '8' } });
            break;
        case '9':
            handleCalc({ target: { value: '9' } });
            break;
        case '.':
            handleCalc({ target: { value: '.' } });
            break;
        case '+':
            handleCalc({ target: { value: '+' } });
            break;
        case '-':
            handleCalc({ target: { value: '-' } });
            break;
        case '*':
            handleCalc({ target: { value: 'x' } });
            break;
        case '/':
            handleCalc({ target: { value: '÷' } });
            break;
        case 'Enter':
            handleCalc({ target: { value: '=' } });
            break;
        case 'Backspace':
            handleCalc({ target: { value: 'C' } });
            break;
        case 'Delete':
            handleCalc({ target: { value: 'C' } });
            break;
        default:
            break;
    }   
}
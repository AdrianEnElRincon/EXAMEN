let displayHist = "";
let displayActual = "0";


class Window {
    constructor(options, content, title) {
        this.options = options || {
            width: options.width || 300,
            height: options.height || 300,
            posX: options.posX || 0,
            posY: options.posY || 0,
        };
        this.title = title;
        this.content = content;
    }
    getTitle() {
        return this.title;
    }
    setTitle(title) {
        this.title = title;
    }
    getContent() {
        return this.content;
    }
    setContent(content) {
        this.content = content;
    }
}

class Calculator extends Window {
    constructor(options, content, title) {
        super(options, content, title);
    }

}

class Button {
    constructor(show, value, id) {
        this.show = show;
        this.value = value;
        this.id = id;
    }
    getButton() {
        return `<div class="col">
                    <button type="button" id="${this.id}" value="${this.value}">${this.show}</button>
                </div>`;
    }
}


const buildCalculator = () => {
    // let btnPercent = new Button("%", "%", "btnPercent");
    // let btnPartialClear = new Button("CE", "CE", "btnPartialClear");
    let btnClear = new Button("C", "C", "btnClear");
    // let btnBack = new Button("Back", "<-", "btnBack");

    // let btnInverse = new Button("1/x", "1/x", "btnInverse");
    // let btnSquare = new Button("x²", "x²", "btnSquare");
    // let btnSqrt = new Button("√", "√", "btnSqrt");
    let btnDiv = new Button("÷", "÷", "btnDiv");

    let btn7 = new Button("7", 7, "btn7");
    let btn8 = new Button("8", 8, "btn8");
    let btn9 = new Button("9", 9, "btn9");
    let btnMul = new Button("x", "x", "btnMul");

    let btn4 = new Button("4", 4, "btn4");
    let btn5 = new Button("5", 5, "btn5");
    let btn6 = new Button("6", 6, "btn6");
    let btnSub = new Button("-", "-", "btnSub");

    let btn1 = new Button("1", 1, "btn1");
    let btn2 = new Button("2", 2, "btn2");
    let btn3 = new Button("3", 3, "btn3");
    let btnSum = new Button("+", "+", "btnSum");

    let btn0 = new Button("0", 0, "btn0");
    let btnDot = new Button(".", ".", "btnDot");
    let btnEqual = new Button("=", "=", "btnEqual");



    let content = `<div id="calculator" class="draggable">`;
    content += `<div class="row" id ="titleContent"><div>${calc.title}</div> </div>`;
    content += `<div id="display"><div class="row"><div class="col" id="lineHistory">${displayHist}</div></div><div class="row"><div class="col" id="lineActual">${displayActual}</div></div></div>`;
    content += `<div id="keyboard">`;



    content += `<div class="row">${btn7.getButton()}${btn8.getButton()}${btn9.getButton()}${btnClear.getButton()}</div>`;

    content += `<div class="row">${btn4.getButton()}${btn5.getButton()}${btn6.getButton()}${btnSum.getButton()}</div>`;

    content += `<div class="row">${btn1.getButton()}${btn2.getButton()}${btn3.getButton()}${btnSub.getButton()}</div>`;

    content += `<div class="row">${btn0.getButton()}${btnDot.getButton()}${btnDiv.getButton()}${btnMul.getButton()}</div>`;
    
    content += `<div class="row">${btnEqual.getButton()}</div>`;

    content += `</div ></div > `;
    return content;
}

let calc = new Calculator({
    width: "400",
    height: "520",
    posX: "200",
    posY: "50"
}, "", "");
calc.setTitle("Calculator");
calc.setContent(buildCalculator());
let contenedor = document.getElementById("container");
contenedor.innerHTML = calc.getContent();


const calcDiv = document.querySelector("#calculator");
calcDiv.style.width = calc.options.width + "px";
calcDiv.style.height = calc.options.height + "px";
calcDiv.style.left = calc.options.posX + "px";
calcDiv.style.top = calc.options.posY + "px";
calcDiv.style.zIndex = "1000";


header = calcDiv.querySelector("#titleContent");

function onDrag({ movementX, movementY }) {
    event.preventDefault();
    let getStyle = window.getComputedStyle(calcDiv);
    let leftVal = parseInt(getStyle.left);
    let topVal = parseInt(getStyle.top);
    calcDiv.style.left = (leftVal + movementX) + "px";
    calcDiv.style.top = (topVal + movementY) + "px";
}

header.addEventListener("mousedown", () => {
    header.classList.add("active");
    header.addEventListener("mousemove", onDrag);
});

document.addEventListener("mouseup", () => {
    header.classList.remove("active");
    header.removeEventListener("mousemove", onDrag);
});






const buttons = document.querySelectorAll('button');
const operands = [];
let operator;
let product;

addEventListener("keydown", function(event) {
    console.log(event.key);
    if (event.key >= 0) {

      event.preventDefault();
      document.getElementById(event.key).click();

    } else if (event.key === 'Backspace') {

        event.preventDefault();
        document.getElementById('ac').click();
  
    } else if (event.key === 'c') {

        event.preventDefault();
        document.getElementById('c').click();
  
    } else if (event.key === '+' || event.key === '-'|| event.key === '*' || event.key === '/') {

        event.preventDefault();
        document.getElementById(event.key).click();
  
    } else if (event.key === 'Enter') {

        event.preventDefault();
        document.getElementById('enter').click();
  
    } else if (event.key === '.') {

        event.preventDefault();
        document.getElementById(event.key).click();
  
    } else if (event.key === '%') {

        event.preventDefault();
        document.getElementById(event.key).click();
  
    }
  });


buttons.forEach((btn) => {
    
    btn.addEventListener('click', () => {

        const btnId = btn.getAttribute('id');
        const btnClass = btn.getAttribute('class');

        const screen = document.getElementById('screenText');
        
        if(btnClass === 'number'){
            
            screen.textContent += btn.id;

        } else if (btnClass === 'clear') {
            
            screen.textContent = '';
            operands.splice(0, operands.length);

        } else if (btnClass === 'operator') {

            if (screen.textContent === '') {
                
                screen.textContent = '';
                setOperator (btnId);

            } else {

                operands.push(Number(screen.textContent));
                setMathOperation (operator);
                setOperator (btnId);
                screen.textContent = '';
            }

        } else if (btnClass === 'equal') {
            
            operands.push(Number(screen.textContent));

            setMathOperation (operator);

            screen.textContent = product.toPrecision();
            operator = undefined;
            operands.shift();

        } else if (btnClass === 'dot') {
            if (screen.textContent.includes('.')){

            } else {
                screen.textContent += '.'
            }
        } else if (btnClass === 'delete') {
            
            screen.textContent = ''

        } else if (btnClass === 'percentage') {
        
            percentage((Number(screen.textContent)));
            screen.textContent = product;

        } else if (btnClass === 'symbol') {
            screen.textContent = Number(- + screen.textContent)
        }
    })
});

function setMathOperation (operator) {

    (operator === undefined)  ? ''            : 
    (operator === 'plus')     ? add()         :
    (operator === 'minus')    ? subtraction() :
    (operator === 'multiply') ? multiply()    :
    (operator === 'division') ? division()    :
    '';
}

function setOperator (btnId) {

    (btnId === '+')     ? operator = 'plus'     : 
    (btnId === '-')    ? operator = 'minus'    :
    (btnId === '*') ? operator = 'multiply' :
    (btnId === '/')   ? operator = 'division'   : 
    '';
}

function add() {
    product = operands[0] + operands[1];
    operands[1] = product;
    operands.shift();
}
 function subtraction() {
    product = operands[0] - operands[1];
    operands[1] = product;
    operands.shift();
}

function multiply() {
    product = operands[0] * operands[1];
    operands[1] = product;
    operands.shift();
}

function division() {
    product = operands[0] / operands[1];
    operands[1] = product;
    operands.shift();
}

function percentage(n) {
    product = n / 100;
    operands.push(product);
    operands.shift();
}

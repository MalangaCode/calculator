const buttons = document.querySelectorAll('button');
const operands = [];
let operator;
let product;

addEventListener("keydown", function(event) {
    
    const key = event.key;

    switch (key) {

        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '+':
        case '-':
        case '*':
        case '/':
        case 'c':
        case '%':
        case '.':
        case 'Enter':
        case 'Backspace':
        
            event.preventDefault();
            document.getElementById(key).click();
            break;
    }
})

buttons.forEach((btn) => {
    
    btn.addEventListener('click', () => {

        const btnId = btn.getAttribute('id');
        const btnClass = btn.getAttribute('class');
        const screen = document.getElementById('screenText');
        
        switch (btnClass) {

            case 'number':

                screen.textContent += btn.id;
                break;

            case 'clear':

                screen.textContent = '';
                operands.splice(0, operands.length);
                break;

            case 'operator':
                
                if (screen.textContent === '') {
                    
                    screen.textContent = '';
                    setOperator (btnId);

                } else {

                    operands.push(Number(screen.textContent));
                    setMathOperation (operator);
                    setOperator (btnId);
                    screen.textContent = '';
                };
                break;

            case 'equal':

                operands.push(Number(screen.textContent));
                setMathOperation (operator);
                screen.textContent = product.toPrecision();
                operator = undefined;
                operands.shift();
                break;

            case 'dot':

                if (screen.textContent.includes('.')){
                } else {
                    screen.textContent += '.'
                };
                break;
            
            case 'delete':

                screen.textContent = '';
                break;

            case 'percentage':

                percentage((Number(screen.textContent)));
                screen.textContent = product;
                break;
            
            case 'symbol':

                screen.textContent = Number(- + screen.textContent);
                break;
        };
    })
})

function setMathOperation (operator) {

    (operator === undefined)  ? '' : operate (operator);
}

function setOperator (btnId) {

    operator = btnId;
}

function percentage(n) {
    product = n / 100;
    operands.push(product);
    operands.shift();
}

function operate (operator) {

    switch (operator) {

        case '+':

            product = operands[0] + operands[1];
            operands[1] = product;
            operands.shift();
            break;
        
        case '-':

            product = operands[0] - operands[1];
            operands[1] = product;
            operands.shift();
            break;
        
        case '*':

            product = operands[0] * operands[1];
            operands[1] = product;
            operands.shift();
            break;
        
        case '/':

            product = operands[0] / operands[1];
            operands[1] = product;
            operands.shift();
            break;
    }
}
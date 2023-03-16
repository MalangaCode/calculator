
const buttons = document.querySelectorAll('button');
const a = [];
let operator;
let result;

buttons.forEach((btn) => {
    
    btn.addEventListener('click', () => {

        const btnId = btn.getAttribute('id');
        const btnClass = btn.getAttribute('class');

        const screen = document.getElementById('screenText');
        
        if(btnClass === 'number'){
            
            screen.textContent += btn.id

        } else if (btnClass === 'clear') {
            
            screen.textContent = '';
            a.splice(0, a.length);

        } else if (btnClass === 'operator') {

            if (screen.textContent === '') {
                screen.textContent = '';

                setOperator (btnId)

            } else {
                a.push(Number(screen.textContent));

                setMathOperation (operator);
                setOperator (btnId);
                screen.textContent = '';
            }

        } else if (btnClass === 'equal') {
            
            a.push(Number(screen.textContent));

            setMathOperation (operator);

            screen.textContent = result.toPrecision();
            operator = undefined;
            a.shift();

        } else if (btnClass === 'dot') {
            if (screen.textContent.includes('.')){

            } else {
                screen.textContent += '.'
            }
        } else if (btnClass === 'delete') {
            
            screen.textContent = ''

        } else if (btnClass === 'percentage') {
        
            percentage((Number(screen.textContent)));
            screen.textContent = result;

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

    (btnId === 'plus') ? operator = 'plus' : 
    (btnId === 'minus') ? operator = 'minus' :
    (btnId === 'multiply') ? operator = 'multiply' :
    (btnId === 'divide') ? operator = 'divide' : 
    '';
}

function add() {
    result = a[0] + a[1];
    a[1] = result;
    a.shift();
}
 function subtraction() {
    result = a[0] - a[1];
    a[1] = result;
    a.shift();
}

function multiply() {
    result = a[0] * a[1];
    a[1] = result;
    a.shift();
}

function division() {
        result = a[0] / a[1];
        a[1] = result;
        a.shift();
}

function percentage(n) {
    result = n / 100;
    a.push(result);
    a.shift();
}

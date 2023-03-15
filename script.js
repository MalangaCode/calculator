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

function percentage() {
    n / 100
}

const numBtn = document.querySelectorAll('button');
const a = [];
let operator;
let result;
numBtn.forEach((number) => {
    

    number.addEventListener('click', () => {

        const screen = document.getElementById('screenText');
        
        if(number.getAttribute('class') === 'number'){
            
            screen.textContent += number.id

        } else if (number.getAttribute('class') === 'clear') {
            
            screen.textContent = '';
            a.splice(0, a.length);

        } else if (number.getAttribute('class') === 'operator') {

            if (screen.textContent === '') {
                screen.textContent = '';

                (number.getAttribute('id') === 'plus') ? operator = 'plus' : 
                (number.getAttribute('id') === 'minus') ? operator = 'minus' :
                (number.getAttribute('id') === 'multiply') ? operator = 'multiply' :
                (number.getAttribute('id') === 'divide') ? operator = 'divide' : 
                'error';

            } else {
                a.push(Number(screen.textContent));

                (operator === undefined)  ? ''            : 
                (operator === 'plus')     ? add()         :
                (operator === 'minus')    ? subtraction() :
                (operator === 'multiply') ? multiply()    :
                (operator === 'division') ? division()    :
                'error';


                (number.getAttribute('id') === 'plus') ? operator = 'plus' : 
                (number.getAttribute('id') === 'minus') ? operator = 'minus' :
                (number.getAttribute('id') === 'multiply') ? operator = 'multiply' :
                (number.getAttribute('id') === 'division') ? operator = 'division' : 
                'error';

                console.log(a)
                console.log(operator);
                screen.textContent = '';
                console.log(result);
            }

            
        } else if (number.getAttribute('class') === 'equal') {
            
            a.push(Number(screen.textContent));

            (operator === undefined)  ? ''            : 
            (operator === 'plus')     ? add()         :
            (operator === 'minus')    ? subtraction() :
            (operator === 'multiply') ? multiply()    :
            (operator === 'division') ? division()    :
            'error';

            screen.textContent = result;
            operator = undefined;
            a.shift();

        }
    })
});
console.log(numBtn);

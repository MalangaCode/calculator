function add() {
    return a[0] + a[1]
}
 function subtraction() {
    return a - b
}

function multiply() {
    return a * b
}

function division() {
    return a / b
}

function percentage() {
    return n / 100
}

const numBtn = document.querySelectorAll('button');
const a = [];
let operator;
numBtn.forEach((number) => {
    

    number.addEventListener('click', () => {

        const screen = document.getElementById('screenText');
        
        if(number.getAttribute('class') === 'number'){
            screen.textContent += number.id
        } else if (number.getAttribute('class') === 'clear') {
            screen.textContent = '';
            a.splice(0, a.length);

        } else if (number.getAttribute('class') === 'operator') {
            a.push(Number(screen.textContent));
            (number.getAttribute('id') === 'plus') ? operator = 'plus' : 
            (number.getAttribute('id') === 'minus') ? operator = 'minus' :
            (number.getAttribute('id') === 'multiply') ? operator = 'multiply' :
            (number.getAttribute('id') === 'divide') ? operator = 'divide' : 
            'error';
            console.log(a)
            console.log(operator);
            screen.textContent = '';
        } else if (number.getAttribute('class') === 'equal') {
            
        }
    })
});
console.log(numBtn);

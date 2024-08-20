
/*
@params : 
a: number
b: number
operator: string


@returns
a number value.
*/

function calculate(a, b, operator) {
    if (operator === "+") {
      return add(a, b);
    } else if (operator === "-") {
      return subtract(a, b);
    } else if (operator === "*") {
      return multiply(a, b);
    } else if (operator === "/") {
      return divide(a, b);
    }
}

function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a,b) {
    return a / b
}

calculate(56, 90, "*")

// we can console.log the result of the function
console.log(calculate(56, 90, "*"))

console.log(calculate(123123, 90, "/"))

console.log(calculate(23423, 234234, "+"))

console.log(calculate(324, 2342, '-'))

console.log('math.fround',Math.fround(32.623123))
let returnedValue = (Math.round(32.123123 * 100) / 100)
console.log('Math.round',returnedValue )
console.log('Parse float method:',parseFloat(32.123123).toFixed(2))
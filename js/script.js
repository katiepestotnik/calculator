const buttonContainer = document.querySelector(".button-container")
const output = document.querySelector(".output")
const seven = document.querySelector('.calc-7')
seven.innerHTML = 7
const eight = document.querySelector('.calc-8')
eight.innerHTML = 8
const nine = document.querySelector('.calc-9')
nine.innerHTML = 9
const divide = document.querySelector('.calc-div')
divide.innerHTML = '&divide;'
const four = document.querySelector('.calc-4')
four.innerHTML = 4
const five = document.querySelector('.calc-5')
five.innerHTML = 5
const six = document.querySelector('.calc-6')
six.innerHTML = 6
const multiply = document.querySelector('.calc-times')
multiply.innerHTML = '&times;'
const one = document.querySelector('.calc-1')
one.innerHTML = 1
const two = document.querySelector('.calc-2')
two.innerHTML = 2
const three = document.querySelector('.calc-3')
three.innerHTML = 3
const subtract = document.querySelector('.calc-minus')
subtract.innerHTML = '&minus;'
const zero = document.querySelector('.calc-zero')
zero.innerHTML = 0
const dot = document.querySelector('.calc-dot')
dot.innerHTML = '.'
const add = document.querySelector('.calc-plus')
add.innerHTML = '&plus;'
const equal = document.querySelector('.calc-equal')
equal.innerHTML = '&equals;'
const clear = document.querySelector('.clear')
clear.innerHTML = 'C'






handleClick = (e) => {
    e.preventDefault()
    text = e.target.innerHTML
    console.log(typeof(parseInt(text)))
    output.innerHTML = e.target.innerHTML

}

buttonContainer.addEventListener("click", handleClick)
clear.addEventListener('click', () => {
    location.reload()
})
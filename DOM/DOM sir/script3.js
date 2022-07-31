

let buttonA = document.querySelector('button')
let inputBox = document.querySelector('input')
let ulElement = document.querySelector('ul')

buttonA.addEventListener('click',function(){
    let colorText = inputBox.value
    ulElement.style.color = colorText
    inputBox.value = ''
})
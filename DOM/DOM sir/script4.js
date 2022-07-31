
let buttonA = document.querySelector('button')
let ulList = document.querySelector('ul')
let inputText = document.querySelector('input')


buttonA.addEventListener('click',function(){
    let eleText = inputText.value
    let newElement = document.createElement('li') // <li></li>
    newElement.textContent = eleText  // <li>Grapes</li>
    ulList.appendChild(newElement)

})
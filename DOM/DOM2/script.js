
// create button
// add text to button
// add class attribute to button
// add the button to li

let Btn1 = document.querySelector('#click')
let Btn2 = document.querySelector('#remove1')
let ulList = document.querySelector('ul')
let inputtext = document.querySelector('[type="text"]')

Btn1.addEventListener('click', function () {
    let text = inputtext.value
    if (text !== '') {
        let newElement = document.createElement('li')
        newElement.textContent = text
        createButton(newElement)
        ulList.appendChild(newElement)
        inputtext.value = ''
    }
})
function createButton(li) {
    let remove = document.createElement('button')
    remove.textContent = 'remove'
    remove.className = 'remove'
    li.appendChild(remove)

    let up = document.createElement('button')
    up.textContent = 'up'
    up.className = 'up'
    li.appendChild(up)

    let down = document.createElement('button')
    down.textContent = 'down'
    down.className = 'down'
    li.appendChild(down)
}

ulList.addEventListener('click', function () {
    if (event.target.tagName === "BUTTON") {
        if (event.target.className === "remove") {
            let li = event.target.parentElement
            let ui = li.parentElement
            ulList.removeChild(li)
        } else if (event.target.className == 'up') {
            let li = event.target.parentElement
            let prevli = li.previousElementSibling
            let ul = li.parentElement
            ul.insertBefore(li, prevli)
        } else if (event.target.className == 'down') {
            let li = event.target.parentElement
            let nextli = li.nextElementSibling
            let ul = li.parentElement
            ul.insertBefore(nextli, li)
        }
    }
})











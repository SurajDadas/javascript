
let btn = document.querySelector('.xyz')
let textBox = document.querySelector('[type="text"]')
let ulList = document.querySelector('.two')


btn.addEventListener('click', function () {
    let inputText = textBox.value
    if (textBox.value != '') {
        let newElement = document.createElement('li')
        newElement.textContent = inputText
        createButton(newElement)
        ulList.appendChild(newElement)
        textBox.value = ''
    }

})

function createButton(li) {
    let remove = document.createElement('button')
    remove.textContent = 'Remove'
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
    if (event.target.tagName == 'BUTTON') {
        if (event.target.className == 'remove') {
            let li = event.target.parentElement
            let ul = li.parentElement
            ul.removeChild(li)
        } else if (event.target.className == 'up') {
            let li = event.target.parentElement
            let preLi = li.previousElementSibling
            let ul = li.parentElement
            ul.insertBefore(li, preLi)
        } else if (event.target.className == 'down') {
            let li = event.target.parentElement
            let nextli = li.nextElementSibling
            let ul = li.parentElement
            ul.insertBefore(nextli, li)

        }
    }
})



















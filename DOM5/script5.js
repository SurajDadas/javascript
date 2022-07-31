

let inputText = document.querySelector('input')
let ulList = document.querySelector('ul')
let addButton = document.querySelector('#add')
let liList = document.querySelectorAll('li')

// for (let i = 0; i < liList.length; i++) {
//     //console.log(liList[i])
//     createButton(liList[i])
// }

addButton.addEventListener('click', function () {
    let text = inputText.value
    let newLi = document.createElement('li') // <li><li>
    newLi.textContent = text
    createButton(newLi)
    ulList.appendChild(newLi)
})

function createButton(li) {
    let remove = document.createElement('button')
    remove.textContent = "remove"
    remove.className = "remove"
    li.appendChild(remove)

    let up = document.createElement('button')
    up.textContent = "up"
    up.className = "up"
    li.appendChild(up)

    let down = document.createElement('button')
    down.textContent = "down"
    down.className = "down"
    li.appendChild(down)
}

ulList.addEventListener('click', function (event) {
    if (event.target.tagName === "BUTTON") {
        if (event.target.className == "remove") {
            let li = event.target.parentElement
            let ul = li.parentElement
            ul.removeChild(li)
        }
        else if (event.target.className == "up") {
            let li = event.target.parentElement // li
            let preLi = li.previousElementSibling
            let ul = li.parentElement
            ul.insertBefore(li, preLi)

        }
        else if (event.target.className == "down") {
            let li = event.target.parentElement // li
            let nextLi = li.nextElementSibling
            let ul = li.parentElement
            ul.insertBefore(nextLi, li)
        }
    }


})
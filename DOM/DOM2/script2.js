alert('helooooo')

let ullist = document.querySelector('ul')
let input = document.querySelector('input')
let button = document.querySelector('#clickButton')
let lilist = document.querySelectorAll('li')


button.addEventListener('click',function(){
    let li = document.createElement('li')
    li.textContent = input.value
    createButton(li)
    ullist.appendChild(li)
    input.value = ''
})

for(let i=0;i<lilist.length;i++){
    createButton(lilist[i])
}

function createButton(li){
    let remove =  document.createElement('button')
    remove.textContent = 'Remove'
    remove.name = 'remove'
    li.appendChild(remove)

    let up =  document.createElement('button')
    up.textContent = 'Up'
    up.name = 'up'
    li.appendChild(up)

    let down =  document.createElement('button')
    down.textContent = 'Down'
    down.name = 'down'
    li.appendChild(down)
}

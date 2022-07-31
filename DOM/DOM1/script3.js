
let A = document.querySelector('#one')
let Btn = document.querySelector('button')
let ullist = document.querySelector('ul')
let textbox = document.querySelector('[type="text"]')

Btn.addEventListener('click',function(){
    let inputtext=textbox.value
    let newElement=document.createElement('li')
    if(inputtext!==''){
    newElement.textContent=inputtext
    ullist.appendChild(newElement)
    textbox.value='' // we can use 'null' instead of '' 
    }   
})






















// <p id="one" class ="two" name = "nm">para</p>

// document =====> object ---> property and method

// tagName
let tagName = document.querySelector('p')
// className 
let classNameA = document.querySelector('.two')
// id
let idName = document.querySelector('#one')
// common tagName[attribute = "value"]
let byAttribute = document.querySelector('p[name="nm"]')


// HTML ELEMENT

//className.addEventListener(event,callFn)

classNameA.addEventListener('click',function(){
    classNameA.style.color = "red"
    classNameA.style.border = "1px solid black"
})








// let person = {
//     parent:{
//         father:"shirish",
//         mother:"kanchan"
//     }
// }

// person.parent.mother = "kanchan shirish deshpande"













// console.log(tagName)
// console.log(className)
// console.log(idName)
// console.log(byAttribute)
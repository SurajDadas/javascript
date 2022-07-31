let buttonA = document.querySelector('button')
let lilist = document.querySelectorAll('li') // [li,li,li]

console.log(lilist)

buttonA.addEventListener('click',function(){
    for(let i = 0 ; i < lilist.length ; i++){
        //console.log(lilist[i])
        lilist[i].style.color = "red"
        lilist[i].style.background = "yellow"
        //console.log(lilist[i]['textContent'])
        lilist[i].textContent = "apple"

    }

})












// let person = {
//     fullName:"chinmay"
// }

// console.log(person.fullName)

// person.fullName = "red"

// person.lang = "hindi"

// delete person.lang
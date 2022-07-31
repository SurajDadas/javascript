
class Person1 {
    constructor(firstName,lastName,city,marks){
        this.firstName = firstName
        this.lastName = lastName
        this.city = city
        this.marks =marks
    }
    calPercentage(){
        return (this.marks.reduce(function(acc,el){
                return acc+el
                },0)/500)*100
    }
} 

////----------------------------------------------------------------------------

let marks = [[50,50,50,50,50],[60,60,60,60,60],[70,70,70,70,70],[80,80,80,80,80],[90,90,90,90,90]]
let student =[]
for(let i=0 ; i<marks.length ; i++){
    let Suraj = new Person1(`Suraj ${i+1}`,`Dadas ${i+1}`,`Pune ${i+1}`,marks[i])
    student.push(Suraj)                                            // make array for each student details
}
console.log(student)

////----------------------------------------------------------------------------

let percentArray = []
for(let i=0 ; i<marks.length ; i++){
     let A = (marks[i].reduce(function(acc,el){                   // make array of percentage of every student
         return acc + el
     },0)/marks.length)
     percentArray.push(A)
}
console.log(percentArray)

////-----------------------------------------------------------------------------

student.forEach(function(el){                                     // to print firstName of every Student
    console.log(el.firstName)
})

////-----------------------------------------------------------------------------

student.forEach(function(el){                                     // to print lastName of every student
    console.log(el.lastName)
})

////-----------------------------------------------------------------------------

student.forEach(function(el){
    console.log(el.firstName + " " + el.calPercentage())           // to print firstName & percentage of every Student
})

////-----------------------------------------------------------------------------

percentArray.sort()
console.log(percentArray[0])                                       // to print minimum percentage
console.log(percentArray[percentArray.length-1])                   // to print maximum percentage

////-----------------------------------------------------------------------------

console.log (percentArray.every(function(el){
    return el > 20                                                  // to check every student's percentage is greater than 20
}))

////-----------------------------------------------------------------------------

student.forEach(function(el){                                       // to add language to every student's detail
    el.language = "Hindi"
})

console.log(student)













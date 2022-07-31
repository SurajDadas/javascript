// Rest Parameter
function Addition(...arr){
    return arr.reduce(function(acc,el){
        return acc+el
    },0)
}

let A= Addition(10,20,30,40,50,60)
console.log(A)

//---------------------------------------
// Spread Parameter

let Add = [20,40,60,80,100]
function Addition1(a,b,c,d){
    console.log(a+b+c)
    console.log(a+b)
    console.log(b+c+d)
}
Addition1(...Add)

//---------------------------------------
// to concat adday
let AA = [11,22,33,44,55]
let BB = [66,77,88,99]

let CC = [...AA,...BB]
console.log(CC)

//---------------------------------------
// For of loop

let Person ={
    firstName : 'Suarj',
    lastName : 'Dadas',
    age :26
}
for (let key in Person){
    console.log([key,Person[key]])
}

//----------------------------------------
// For of for array
let Names =['Suraj','Arjun','yogi','sopan']

for(let item of Names){
    console.log(item)
}

//----------------------------------------
// For of for object

let info ={
    firstName : 'Arjun',
    lastname : 'dadas',
    age : 17
}

console.log(Object.keys(info))
console.log(Object.values(info))
console.log(Object.entries(info))

for(let item of Object.keys(info)){
    console.log(item)
}

for(let item of Object.values(info)){
    console.log(item)
}

for(let item of Object.entries(info)){
    console.log(item)
}


for(let [key,value] of Object.entries(info)){
    console.log(key,value)
}

//----------------------------------------
// Ternary Operator

let a=10
let b=20

a>b ? console.log('a is greater') : console.log('b is greater')

//----------------------------------------
// nullish Operator
// if the value of variable is " undefined " or " null " then it prints ( default string ) written after "??"

let AC ;   // value to AC is undefined so it is undefined
BC =AC ?? "AC is not defined"
console.log(BC)

// in or operator if 1st condition is true then it prints 'true' or string added & 
// if 1st condition is false then it check 2nd condition and if second condition is true then it prints 'true' or string added
// and if both conditions are false then it prints 'false'
let AAA = 7==7 || 8==9
let AAB = 9==5 || 5==5
let AAC = 7!==7 || 7==8
console.log(AAA)
console.log(AAB)
console.log(AAC)


let ABCD  











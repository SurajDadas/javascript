
// Program 1
let array =[10,20,30]
let [a,b,c] =array

console.log(a)                       // destructuring of array
console.log(b)
console.log(c)

console.log(array)

//----------------------------------------------------------------
// Program 2

let cities =[['Baramati','Pune'],'Nagpur','Sambhajinagar']
let [[d,e],f,g] = cities
console.log(d)
console.log(e)                      // destructuring of array
console.log(f)
console.log(g)

//----------------------------------------------------------------
// Program 3
let A=10
let B=20
console.log(A)
console.log(B)                       // to reverse the value

temp =A
A=B
B=temp
console.log(A)
console.log(B)

//----------------------------------------------------------------
// Program 4
let C=50;
let D=100;
[C,D]=[D,C]                          // to reverse the value
console.log(C)
console.log(D)

//----------------------------------------------------------------
// Program 5       //Object

let person ={
     firstName : 'Suraj',
     lastName : 'Dadas'
}
let {firstName:fn,lastName:ln}=person
console.log(fn)
console.log(ln)

let {firstName,lastName}=person
console.log(firstName)
console.log(lastName)

//----------------------------------------------------------------
// Program 6       //Object

let students =[
    {
        firstname : 'Suraj',
        marks : 75
    },

    {
        firstname : 'Arjun',
        marks : 80
    }
]
let[{firstname:fn1,marks:marks1},{firstname:fn2,marks:marks2}]=students

console.log(fn1)
console.log(marks1)
console.log(fn2)
console.log(marks2)

//----------------------------------------------------------------
// Program 7       //Object

let obj = {
    skills:[2,3,4],
    skills2:[22,33,44]
}
let {skills:[x,y,z],skills2:[xx,yy,zz]}  = obj
console.log(x)
console.log(xx)

//----------------------------------------------------------------
// Program 7       //Object

let info = {
    parents:{
        father:"Dattatraya",
        mother:"Prabhawati"
    }
}
let { parents:{father:f1,mother:m1}} = info
console.log(f1)
console.log(m1)




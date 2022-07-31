
 let vehicle="Honda"               // declare variable

// different types of data type
let AA="Suraj"                      // declare variables
let BB=500                          // declare variables
let CC=[10,20,30];                  // declare variables
let DD={firstName : "Suraj",        // declare variables
         lastName : "Dadas" }
let EE=true                         // declare variables
console.log(typeof AA)              // check data type
console.log(typeof BB)              // check data type
console.log(typeof CC)              // check data type
console.log(typeof DD)              // check data type
console.log(typeof EE)              // check data type


console.log(vehicle.length)        // to print string length

console.log(vehicle)               // print total value

console.log(vehicle[0])            // to print index 0 of string
console.log(vehicle[1])            // to print index 1 of string
console.log(vehicle[2])            // to print index 2 of string
console.log(vehicle[3])            // to print index 3 of string
console.log(vehicle[4])            // to print index 4 of string

for(a=0; a<vehicle.length; a++){
    console.log(vehicle[a])        // to print string value with seperate index
}

for(a=vehicle.length-1; a>=0; a--){   // to print string value in revrse direction
    console.log(vehicle[a])
}

let laptop1="Dell"
let city1="Baramati"
console.log(laptop1 +" " +city1)                                            // to print two string combination
console.log(`My laptop make is :`+laptop1 +" "+`I am from :`+city1)         // to print two strings with sentense
console.log(`My laptop make is :${laptop1} I am from : ${city1}`)           // to print two strings with sentense

/*---------------------------------------------------------------------------------------------------------------*/

// string method

let mobile="realme"
let A=mobile.toUpperCase()                           // to make capital letter
console.log(A)


let laptop="DELL"
let B=laptop.toLowerCase()                          // to make small letter
console.log(B)

let I=laptop.toLowerCase().toUpperCase()            // use combined property
console.log(I) 

let J=laptop.toUpperCase().toLowerCase()            // use combined property
console.log(J)

let K=laptop.toUpperCase().toLowerCase().length     // use combined property
console.log(K)

// let L=laptop.toUpperCase().toLowerCase().length.toUpperCase()  // this will not RUN
// console.log(L)

let city="Ahamadnagar"
let C=city.includes("z")                             // to check letter is present or not in string
console.log(C)


let vegetable="Potato"
let D=vegetable.slice(1,5)                           // method to cut a piece of string
console.log(D)
console.log(vegetable.slice(-6,-3))
console.log(vegetable.slice(2))


let fruit="Mango"
let E=fruit.indexOf("M")                             // method to check index value & to check either value is present or not
console.log(E)


let flower=" Rose "
console.log(flower.length)
let F=flower.trim()                                 // method to remove starting & ending space of string
console.log(F.length)

let G=flower.trimStart()                            // method to remove starting space of string
console.log(G.length)

let H=flower.trimEnd()                              // method to remove ending space of string
console.log(H.length)



let animal=("Elephant")
let AB=animal.toLowerCase()
let count=0
for(a=0; a<AB.length; a++){
    if(AB[a]=="a" || AB[a]=="e" || AB[a]=="i"        // to count vowels from string
                  || AB[a]=="o" || AB[a]=="u"){
       count=count+1
    }
}
console.log(count)


let animal1=("Lion")
let rev=""
for(a=0; a<animal1.length; a++){                     // to reverse the string
    rev =animal1[a]+rev
}
console.log(rev)


let animal2=("Tiger")
let rev2=""
for(a<=animal2.length; a>=0; a--){                   // to reverse the string (Another method)
    rev2=rev2+animal2[a]
}
console.log(rev2)


let country="India"
console.log(country.repeat(2))                       // to repeate the string
























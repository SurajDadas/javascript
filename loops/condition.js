
// One Entity with different changes the outcome

/*----------------------------------------------------------------------------------------------*/

// if statement
let number =50;
if(number > 20){
    console.log("hii it's Suraj Dadas")
}

/*----------------------------------------------------------------------------------------------*/

// if else statement
let number1 =60;
if(number1 > 20){
    console.log("Hello")
}else{
    console.log("Bye")
}

/*----------------------------------------------------------------------------------------------*/

// if - else if statement
let percentage =100

if(percentage <= 100 && percentage >=75){
    console.log("You are in Distinction")
}else if(percentage < 75 && percentage >=60){
    console.log("You are in First Class")
}else if(percentage < 60 && percentage >=50){
    console.log("You are in Second Class")
}else if(percentage < 50 && percentage >=35){
    console.log("You are in Third Class")
}else if(percentage < 35){
    console.log("You are Fail")
}else{
    console.log("Enter Valid Data")
}

/*----------------------------------------------------------------------------------------------*/

// Ternary Operator
let Number =20
Number>10?(console.log(`It's right`)) : (console.log(`It is Wrong`))


let Number1 =15
let Z;
Number1>10?(Z="True"):(Z="False")
console.log(Z)

let percentage1 =76
{(percentage1<=100 && percentage1>=75)?(console.log(`You are in Distinction :  ${percentage1} %`)) : 
(percentage1<75 && percentage1>=60)?(console.log(`You are in first class : ${percentage1} %`)) :
(percentage1<60 && percentage1>=50)?(console.log(`You are in Second Class : ${percentage1} %`)) :
(percentage1<50 && percentage1>35)?(console.log(`You are Pass : ${percentage1} %`)) :
(percentage1<35)?console.log(`You are fail : ${percentage1} %`) : console.log('Enter Valid Data')}


/*----------------------------------------------------------------------------------------------*/

// Switch Case()

let Day = 3
switch(Day){
    case 1 : console.log("Today is monday")
    break
    case 2 : console.log("Today is Tuesday")
    break
    case 3 : console.log("Today is Wednesday")
    break
    case 4 : console.log("Today is Thursday")
    break
    case 5 : console.log("Today is Friday")
    break
    case 6 : console.log("Today is Saturday")
    break
    case 7 : console.log("Today is Sunday")
    break
    default : console.log("Enter Valid Data")
}

/*------------------------------------------------------------------------------------------*/

















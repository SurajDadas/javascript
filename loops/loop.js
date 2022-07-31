// ***************************  While Loop  ***************************************
// This is the simplest looping statement provided by JavaScript.
// The while loop loops through a block of code as long as the specified condition evaluates to true. 
// As soon as the condition fails, the loop is stopped. The generic syntax of the while loop is:
//-----------------------------------
while(condition) {
    // Code to be executed                           // Syntax
}
//-----------------------------------
var a = 1;
while(a <= 5) {    
    document.write("heyyy I am While");                        // Example
    a++;
}



// ***************************  Do - While Loop  ***************************************
// The do-while loop is a variant of the while loop, which evaluates the condition at the end 
// of each loop iteration. With a do-while loop the block of code executed once, 
// and then the condition is evaluated, if the condition is true, the statement is repeated 
// as long as the specified condition evaluated to is true. The generic syntax of the do-while loop is:
//-----------------------------------
do {
    // Code to be executed                          // Syntax
}
while(condition);
//-----------------------------------
var b = 1;
do {
    document.write("Hii I Am Do - While");         // Example
    i++;
}
while(i <= 5);
//-----------------------------------

// ***************  Difference Between { While } And { Do-While }  *******************

/* The while loop differs from the do-while loop in one important way — with a while loop, 
   the condition to be evaluated is tested at the beginning of each loop iteration, 
   so if the conditional expression evaluates to false, the loop will never be executed. */

/* With a do-while loop, on the other hand, the loop will always be executed once 
   even if the conditional expression evaluates to false, because unlike the while loop, 
   the condition is evaluated at the end of the loop iteration rather than the beginning. */



// ***************************  For Loop  ***************************************

/* The for loop repeats a block of code as long as a certain condition is met. 
It is typically used to execute a block of code for certain number of times.*/
//-----------------------------------
for(initialization; condition; increment) {
    // Code to be executed                                        // Syntax
}
//-----------------------------------
var fruits = ["Apple", "Banana", "Mango", "Orange", "Papaya"];
for(var i=0; i<fruits.length; i++) {                              // Example
    document.write("Fruit Name Is :" + fruits[i]);
}
//-----------------------------------


// ***************************  for...in Loop  ***************************************
/* The for-in loop is a special type of a loop that iterates over the properties of an object,
   or the elements of an array.*/
//-----------------------------------
   for(variable in object) {
    // Code to be executed                                        // Syntax
}
//-----------------------------------
var person = {"name": "Clark", "surname": "Kent", "age": "36"};
for(var prop in person) {                                         // Example
    document.write("<p>" + prop + " = " + person[prop] + "</p>"); 
}
//-----------------------------------


// ***************************  for...of Loop  ***************************************

/* The for-in loop is a special type of a loop that iterates over the properties of an object,
   or the elements of an array.*/
//-----------------------------------
for(variable in object) {
    // Code to be executed                                        // Syntax
}
//-----------------------------------
var person = {"name": "Clark", "surname": "Kent", "age": "36"};
for(var prop in person) {                                         // Example
    document.write("<p>" + prop + " = " + person[prop] + "</p>"); 
}
//-----------------------------------
















// METHOD TO WRITE "FOR LOOP"
for(let i=0; i<=5; i++){       // initialisation ; Condition Check ; Increment/Decrement
    console.log(i)             // Statement
}

/*----------------------------------------------*/

for(let i=0; i<=5; i++){
    if(i==3){
        break
    }
    console.log(i)
}

/*----------------------------------------------*/

for(let i=0; i<=5; i++){
    console.log(i)
    if(i==3){
        break
    }
}

/*----------------------------------------------*/

for(let i=0; i<=5; i++){
    if(i==3){
        continue
    }
    console.log(i)
}

/*----------------------------------------------*/
// ANOTHER METHOD TO WRITE "FOR LOOP"
let i=0                //=========> Initialisation 
for(;i<=5;){           //=========> Condition Check
    console.log(i)     //=========> Statement
    i++                //=========> Increment / Decrement
}

/*--------------------------------------------------------------------------------------------------------*/
// METHOD TO WRITE WHILE LOOP

let a=0
while(a<=2){
    console.log(a)
    a++
}
/*----------------------------------------------*/
let b=2
while(b>=0){
    console.log(b)
    b--
}

/*----------------------------------------------*/

let c=0
while(c<=5){
    if(c==3){
        break
    }console.log(c)
    c++
}

/*----------------------------------------------*/

let D =5
while(D>=0){
    if(D==3){
        continue
    }console.log(D)
    D--
}










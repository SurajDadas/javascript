
// *********************************************************************************
// Comparison Operator
//  <, >, <=, >=, !=, ==, === 
// (Output ===> Boolean)


// let A="50";
// let B=50;

// console.log(A<B)         // Less Than.....
// console.log(A>B)         // Greater Than.....
// console.log(A<=B)        // Less Than Or Equal To.....
// console.log(A>=B)        // Greater Than Or Equal To.....
// console.log(A!=B)        // Not Equal To
// console.log(A==B)        // Only Value Is Same
// console.log(A===B)       // Value & Data type Also Same


// let AA=25;
// let AB="25"
// let AC=true
// let AD=[10,20,30]
// let AE={
//     fName : "Suraj",
//     lName : "Dadas"
// }

// console.log(typeof AA)
// console.log(typeof AB)
// console.log(typeof AC)
// console.log(typeof AD)
// console.log(typeof AE)

/*-----------------------------------------------------------------------------------------------------*/
// // Logical Operators

// /* Logical AND Operator
// True + True   = True
// True + False  = False
// False + True  = False
// False + False = False */

// console.log(7>6 && 6<7 )        // ===> True
// console.log(7>6 && 8<7 )        // ===> False
// console.log(7>8 && 6<7 )        // ===> False
// console.log(7>8 && 6<5 )        // ===> False


// /* Logical OR Operator
// True + True   = True
// True + False  = True
// False + True  = True
// False + False = False */

// console.log(7>6 || 6<7 )        // ===> True
// console.log(7>6 || 8<7 )        // ===> True
// console.log(7>8 || 6<7 )        // ===> True
// console.log(7>8 || 6<5 )        // ===> False


// /* Logical NOT Operator
// True  ===> False
// False ===> True*/

// console.log(!true)
// console.log(!false)

// /*-----------------------------------------------------------------------------------------------------*/

// // Arithmetic operation
// let A=20;
// let B=10;
// console.log(A+B);
// console.log(A-B);
// console.log(A*B);
// console.log(A/B);
// console.log(A%B);   


// let C=30;
// let D=20;
// console.log(C+D);
// console.log(C-D);
// console.log(C*D);
// console.log(C/D);
// console.log(C%D);

// // use of function without parameter without return
// function add(){
//     console.log(9+9);
//     }
//       add();


// // use of function with parameter without return
// function Math(E,F){
//     console.log(E+F);
//     console.log(E-F);
//     console.log(E*F);
//     console.log(E/F);
//     console.log(E%F);
// }
//       Math(100,50);


// // use of function with parameter with return
//     function Add(x,y){
//        return x+y
//         }
//             let AA=Add(100,50);
//         console.log(A);
//         // console.log(AA+20);
//         // console.log(AA*5);


// // calculate Birth Year
//         let age=[20,25,28,30];
//         let birthYear=[];
//           for(a=0; a<age.length; a++){
//              let BB= 2022-age[a]
//              birthYear.push(BB)
//             }
//           console.log(birthYear);

//         //map method

//         let age1=[20,25,28,30];
//         let birthYear1=age1.map(function(el,index,arr){
//             return 2022-el
//            })
//           console.log(birthYear);


// // Calculate Value Greater than or above
//         let AB=[15,40,30,25,50];
//         let above=[];
//         for(a=0; a<AB.length; a++){
//             if (AB[a]>25){
//                 above.push(AB[a]);
//             }
//         }
//             console.log(above);
        
//         // filter method
//         let AAB=[15,40,30,25,50];
//         let above1=AAB.filter(function(el,index,arr){
//             return el>25
//         })
//             console.log(above1)
// // Calculate total of array element
//         let number=[15,30,45,62,35,90];
//         let total=0;
//         for(a=0; a<number.length; a++){
//             total=total+number[a];
//         }
//             console.log(total);
            
//         // reduce method
//         let number1=[15,30,45,62,35,90];
//         let total1=number1.reduce(function(acc,el,index,arr){
//             return acc+el
//         })
//             console.log(total1)













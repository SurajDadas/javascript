// // ***************************************************** 22/05/2022 *****************************************************

// Object ====> Property and Method
// Object Literals
// ********** Different ways to create object *************
//               1. Object Literal
//               2. Function Constructor
//               3. ES6 Class
//               4. Object.create()


// //  *************************************** 1. Object Literal *****************************************

// let chinmay = {
//     firstName: "Chinmay",
//     lastName: "Deshpande",
//     age : 33,
//     callBirthYear : function(){
//         console.log(2022-this.age)
//     }
// }
// console.log(chinmay)

// // ***************** DOT Notation *********************
// console.log(chinmay.firstName)                               // to print by using property
// chinmay.age=45                                               // to modify the property value
// chinmay.rollNumber=26                                        // to add new property
// delete chinmay.age                                           // to delete the property
// console.log(chinmay)


// // *************** BRACKET Notation *******************
// console.log(chinmay['firstName'])                               // to print by using property
// chinmay['age']=45                                               // to modify the property value
// chinmay['rollNumber']=26                                        // to add new property
// delete chinmay['age']                                           // to delete the property
// console.log(chinmay)


// //  *************************************** 2. Function Constructor ***************************************

// // In above method we have to declare different OBJECTS and have to write properties & their values again & again
// // So in this function constructor method we firstly make Template and then we only add function values

// let Person = function(fn,ln){
//     this.firstName = fn                                //  This is Template
//     this.lastname = ln
// }
// let Suraj = new Person("Suraj","Dadas")                //  The value provided
// console.log(Suraj)
// let Arjun = new Person("Arjun","Dadas")                //  Next value Provided
// console.log(Arjun)
// // so above we make one Template and by adding two values made two objects

// let Person2 = function(fn,ln,ag,rn,skills){
//     this.firstName=fn
//     this.lastName=ln
//     this.age=ag                                                   // This is Template
//     this.rollNumber=rn
//     this.skills=skills
//     this.numberSkills = function(){
//         console.log(this.skills.length)
//     }
//}
// let Suraj1=new Person2("Suraj","Dadas",25,26,["html","css","js"])  // Object Declared
// console.log(Suraj1)

// let Yogi=new Person2("Yogesh","Dadas",20,30,["game","Cricket"])    // Another Object Declared
// console.log(Yogi)

// console.log(Yogi instanceof Person2)                               // Yogi is instantaneous value of Person2
// console.log(Suraj1 instanceof Person2)                             // Suraj1 is instantaneous value of Person2

// // Every object have on Default Property named   __proto__
// //      the property of Suraj1 & Yogi is equal to the protype 

// console.log(Suraj1.__proto__==Person2.prototype)
// console.log(Yogi._proto_==Person2.protype)                                                                      // Check In Support Session


// // ***************************************************** 22/05/2022 *****************************************************

// let Vehicle = function (color, regNo, city, type) {
//     this.color = color
//     this.regNo = regNo
//     this.city = city                                        // This is Template
//     this.type = type
//     // this.displayColor=function(){
//     //     console.log(this.color)
//     // }
// }
// Vehicle.prototype.model = function () {                      // method Declared
//     console.log(this.regNo)
// }


// let audi = new Vehicle("red", "12345", "Pune", "A")          // Object declared    
// let BMW = new Vehicle("black", "6789", "Mumbai", "B")        // Object declared

// console.log(audi)
// console.log(BMW)

// console.log(audi instanceof Vehicle)                         // Ans ===> True
// console.log(BMW instanceof Vehicle)                          // Ans ===> True

// console.log(audi.hasOwnProperty("color"))                    // Ans ===> True
// console.log(audi.hasOwnProperty("wafsrg"))                   // Ans ===> False

// console.log(audi.__proto__ === Vehicle.prototype)            // Ans ===> True
// console.log(Vehicle.prototype === audi.__proto__)            // Ans ===> True
// console.log(BMW.__proto__ === audi.__proto__)                // Ans ===> True
// console.log(audi.prototype === BMW.prototype)                  // Ans ===> True

// //  *************** 2. Array Function Constructor ****************

// let names=["Suraj","Arjun","Yogi"]
// console.log(names)
// console.log(names.__proto__===Array.prototype)

// console.log(names.reverse())
// names.pop()
// console.log(names)

// // ***************************************************** 24/05/2022 *****************************************************

//********************************** 3. ES6 Class **********************************

// class Person{
//     constructor(fn,age,rolNo){
//         this.fullName=fn
//         this.age=age
//         this.rolNo
//     }
//     displayName(){
//         console.log(this.fullName)
//     }
// }
// let Suraj= new Person("Suarj",25,26)
// console.log(Suraj)
// console.log(Suraj.fullName)
// Suraj.lastName='ShreeRam'
// console.log(Suraj)


// //******* 1. ES6 Method ( Setting Property of current Calling object outside the class) *********
// class Vehicle{
//     color =undefined
//     regNo =undefined                       // this method is same as OBJECT LITERAL Method
//     city = undefined                       
// }
// let audi=new Vehicle()
//     console.log(audi)
//     audi.color="red"                       // For Every object we have to repeate this procedure       
//     audi.regNo=12345                       // So this method is not generally used
//     audi.city="pune"
// console.log(audi)


//******* 2. ES6 Method (Constructor Method)( Setting Property of object at the time object Creation) *********

// class Vehicle2{
//     constructor(color,regNo,city){
//         this.color=color
//         this.regNo=regNo
//         this.city=city
//     }
//     disply(fullName){
//         console.log(this.fullName)
//     }
// }
//     let audi2=new Vehicle2("black",123456789,"Dubai")
//     console.log(audi2)

//**************************************** 3. ES6 Method (Set Method) ***************************************

// class Vehicle3{
//     setColor(cl){
//         this.color=cl
//     }
//     setRegNo(reg){
//         this.RegNo=reg
//     }
//     setType(type){
//         this.type=type
//     }
// }
// let audi=new Vehicle3()
// console.log(audi)
// audi.setColor('green')
// audi.setRegNo('13456')
// audi.setType('SUV')
// console.log(audi)

//**************************************************************************** */

// class Bank{
//     constructor(accName,accNo,city,bal){
//         this.accName=accName
//         this.accNo=accNo
//         this.city=city
//         this.bal=bal
//         this.transaction=[]
//     }

//     deposite(amount){
//         this.bal=this.bal+amount
//         console.log("the updated value is :"+ this.bal)
//         this.transaction.push(amount)
//         //return this.bal
//     }

//     withdrawl(amount){
//         if(this.bal >= amount){
//             this.bal = this.bal-amount
//         console.log('The updated value is : '+this.bal)
//         this.transaction.push(-amount)
//        return this.bal
//     }else{
//         console.log('Insufficient balance')
//      }
// }

// lastfiveTransaction(){
//         console.log(this.transaction.slice(-5))
//     }
// }

// let suraj = new Bank("Suraj",123456,'Pune',1000)

// suraj.deposite(2000)
// suraj.withdrawl(3000)
// suraj.deposite(2000)
// suraj.withdrawl(5000)
// suraj.deposite(2000)
// suraj.withdrawl(1000)

// suraj.lastfiveTransaction()



// // ***************************************************** 25/05/2022 *****************************************************
//********************************** 1. Inheritance **********************************
//******************** A. constructor is NOt declared in Children Template *******************

// class Grandfather{
//     constructor(fl,ln){
//         this.firstname=fl
//         this.lastname=ln
//     }
//     display(){
//         console.log(this.firstname + " " + this.lastname)
//     }
// }

// class Father extends Grandfather{
//     display(){
//         console.log("Hello")
//     }
// }

// let Dattatraya=new Father("Dattatraya","dadas")
// let Shivaji=new Grandfather("Shivaji","Dadas")
// console.log(Dattatraya)
// console.log(Shivaji)
// Dattatraya.display()
// Shivaji.display()

//******************** B. Constructor is also declared in Children Template *******************

// class GrandFather2{
//       constructor(fn,ln){
//           this.gFatherName=fn
//           this.lastname=ln
//       }
//       display(){
//           console.log(this.gFatherName+ " "+this.lastname)
//       }
// }

// class Father2 extends GrandFather2{
//     constructor(gFatherName,lastname,fFirstName){
//         super(gFatherName,lastname)
//         this.fFirstName=fFirstName
//     }
//     display(){
//         console.log(this.fFirstName+ " " +this.lastname)
//         super.display()     // if we have to print Parent's function
//     }
// }

// let Dattatraya1=new Father2 ("Shivaji","Dadas","Dattatraya")
//        console.log(Dattatraya1)

// Dattatraya1.display()
// console.log(Dattatraya1.fFirstName)
// console.log(Dattatraya1.lastname)
// console.log(Dattatraya1.gFatherName)


// //******************** C. Constructor is also declared in Children Class *******************

// class Student{
//     constructor(fn,ln){
//         this.firstName = fn
//         this.lastName = ln
//     }
//     display(){
//         console.log(this.firstName+" "+this.lastName)
//     }
// }
// class Teacher extends Student{
//     constructor(fn,ln,salary){
//         super(fn,ln)
//         this.salary=salary
//     }
//     display(){
//         console.log(this.salary)
//     }
// }
// class Professor extends Teacher{
//     constructor(fn,ln,salary,spec){
//         super(fn,ln,salary)
//         this.spec=spec
//     }
//     display(){
//         console.log(this.spec)
//     }
// }
// let arjun= new Student("Arjun","Dadas")
// console.log(arjun)
// let yogi = new Teacher("Yogi","Dadas",50000)
// console.log(yogi)
// let suraj = new Professor("Suraj","Dadas",50000,"Electrical Engineer")
// console.log(suraj)

// suraj.display()
// yogi.display()
// arjun.display()


//********************************** 1. Polymorphism **********************************
//          A. Over loadimg  ====>  Same Class, Same Method, Different Signature
//          B. Over riding   ====>  Different Class, Same Method, Same Signature


//********************************** A. Over Loading **********************************


// class Addition{
//      add(a,b,c,d){
//          console.log(a+b+c+d)
//      }
//      add(a,b,c){
//          console.log(a+b+c)
//      }
//      add(a,b){
//          console.log(a+b)
//      }
// }
//      let C= new Addition()
//      C.add(2,2,2,2)
//      C.add(2,2,2)
//      C.add(2,2)

// // In Java Script by defining same function two, three or many times then
// // by calling same function it runs with last updated function defined



// //  polymorphism  by using Function 
// function addition(x, y, z, a) {
//     if (x !== undefined, y !== undefined, z !== undefined, a !== undefined) {
//         console.log(x + y + z + a)
//     }
//     else if (x !== undefined, y !== undefined, z !== undefined) {
//         console.log(x + y + z)
//     }
//     else (console.log(x + y))
// }
// addition(3, 3, 3, 3)
// addition(3, 3, 3)
// addition(3, 3)


// //  Polymerisation  by using Class Declaration

// class Multiplication {

//     multi(a, b, c, d) {
//         if (a !== undefined, b !== undefined, c !== undefined, d !== undefined) {
//             console.log(a * b * c * d)
//         }
//         else if (a !== undefined, b !== undefined, c != undefined) {
//             console.log(a * b * c)
//         }
//         else if (a !== undefined, b !== undefined) {
//             console.log(a * b)
//         }
//     }
// }
// let D = new Multiplication()
// D.multi(2, 2, 2, 2)
// D.multi(2, 2, 2)
// D.multi(2, 2)


/*---------------------------------------------------------------------------------------------------------*/
class Worldbank {
    constructor(fn,ln){
        this.firstName=fn
        this.lastName=ln
    }
    display(){
        console.log(this.firstName)
    }
}

class SBI extends Worldbank{
    constructor(fn,ln,IFSC){
    super(fn,ln)
    this.IFSC= IFSC
    }
    deposite(){
        console.log('deposite to SBI')
    }
    withdrawl(){
        console.log('withdrawl from SBI')
    }}

class PNB extends Worldbank{
    constructor(fn,ln,IFSC){
        super(fn,ln)
        this.IFSC = IFSC
    }
    super()
    deposite(){
        console.log('deposite to PNB')
    }
    withdrawl(){
        console.log('withdrawl from PNB')}

}

let surajSBI =new SBI('Suraj','Dadas',413116)
let yogiPNB =new PNB('Yogi','Dadas',413115)

surajSBI.withdrawl()
yogiPNB.deposite()
yogiPNB.withdrawl()

/*---------------------------------------------------------------------------------------------------------*/

















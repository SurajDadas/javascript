console.clear()

let students = [

    {
        fullName: 'Suraj Dadas',
        age: 26,
        city: 'Baramati',
        Skills: ['Python', 'Java', 'CSS', 'HTML'],
        family: {
            father: 'Dattatraya',
            mother: 'Prabhawati',
            sister: 'gauri',
            brother: 'Yogi'
        }

    },

    {
        fullName: 'Ramdas Jagtap',
        age: 28,
        city: 'Pune',
        Skills: ['Database', 'linux', 'sql', 'plsql'],
        family: {
            father: 'Shahaji',
            mother: 'Mangal',
            sister: 'Jayashri',
            brother: 'Yogesh'
        }
    },

    {
        fullName: 'Shubham Agate',
        age: 30,
        city: 'Baramati',
        Skills: ['Python', 'C++', 'Angular', 'react'],
        family: {
            father: 'Pravin',
            mother: 'Pradnya',
            sister: 'Sita',
            brother: 'Arjun'
        }
    },

    {
        fullName: 'Amol Gadhave',
        age: 32,
        city: 'Nagpur',
        Skills: ['jquery', 'Java', 'CSS', '.net'],
        family: {
            father: 'mahadeo',
            mother: 'Shobha',
            sister: 'Swati',
            brother: 'Suraj'
        }
    }
]

// //--------------------------------------------------------------------------

// // print fullName & City

// students.forEach(function (el) {                                       // By using Array method
//     console.log(el.fullName + " : " + el.city)
// })
// //------------------------
// for(let i=0 ; i<students.length ; i++){
//     console.log(students[i].fullName + ' : ' + students[i].city)       // By using For loop
// }

// //-------------------------------------------------------------------------- */

// // Print fullname with number of skills

// students.forEach(function(el){
//     console.log(el.fullName +' : '+ el.Skills.length)                  // By using array method
// })
// //-------------------------
// for(let i=0 ; i<students.length ; i++){
//     console.log(students[i].fullName + ' : ' + students[i].Skills.length)   // By using For loop
// }

// //--------------------------------------------------------------------------

// // Print User's fullname belongs to baramati City

// students.filter(function(el){
//     return el.city=='Baramati'
// }).forEach(function(el){                                          //  By using Array Method
//     console.log(el.fullName)
// })
// //---------------------------
// students.forEach(function(el){
//     if(el.city == 'Baramati'){                                   // By using Array Method
//         console.log(el.fullName)
//     }
// })
// //---------------------------
// for(let i=0 ; i<students.length ; i++){
//     if(students[i].city == 'Baramati'){                          // By Using For loop
//         console.log(students[i].fullName)
//     }
// }
// //--------------------------------------------------------------------------

// // print Average age of all Students
// console.log(students.reduce(function(acc,el){
//      return acc + el.age                                            // By using Array method
// },0)/students.length)
// //------------------------------
// let sum =0
// for(let i =0 ; i<students.length ; i++){
//        sum = sum + students[i].age                                  // By using For loop
// }
// console.log(sum/students.length)

// //--------------------------------------------------------------------------

// // print Users fullname who belogs to Baramati or Pune city & having Pyton Skills

// students.filter(function(el){
//     return el.city == 'Baramati' || el.city == 'Pune' && el.Skills.includes('Python')
// }).forEach(function(el){
//     console.log(el.fullName)                                          // By using Array Methods
// })

// //--------------------------------------------------------------------------

// print Name of user with count of family member

// students.forEach(function(el){
//     let count = 0
//     for (let key in el.family){                                          // By using Key() Method
//         count =count +1
//     }
//     console.log(el.fullName +' : ' + count)
// })

// //------------------------------

// students.forEach(function(el){                                         // By using Key() Method
//     console.log(el.fullName +' : '+ Object.keys(el.family).length)
// })


// //--------------------------------------------------------------------------

// Print user's fullName having Maximum age
let max = 0
students.forEach(function(el){
     if (max < el.age){                              // Not understand
         max = el.age
     }
}).forEach(function(el){
    console.log(el.firstName)
})
console.log(max)

// //**********************************************************************************************








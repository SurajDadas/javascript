// function Suraj(){
//     console.log("Hello")
// }

// function Arjun(){
//     console.log("Hiiii")
// }
// Arjun()
// Suraj()                                                //  Asynchronous Operation

/* ...................................................................................... */

// function Suraj1(){
//     setTimeout(function(){
//         console.log('Print after 2 sec')
//     },2000)

//     setTimeout(function(){
//         console.log('Print after 5 sec')               //  Asynchronous Operation
//     },5000)

//     setTimeout(function(){
//         console.log('print after 1 sec')
//     },1000)
// }
// Suraj1()

/* ...................................................................................... */

// function Suraj2(){
//     setTimeout(function(){                           // this structure is called as call back hell
//         console.log('Print after 2 sec')
//             setTimeout(function(){
//                 console.log('Print after 5 sec')
//                 setTimeout(function(){                    // Synchronous Operation
//                     console.log("Print after 1 sec")
//                 },1000)
//             },5000)
//     },2000)
// }

// Suraj2()

/* ...................................................................................... */
//  Promise =====> Pending, resolve, reject

// let Pro = new Promise(function(resolve,reject){
//     let a=90
//     let b=100;
//     if(a==b){
//         resolve("Hello")
//      }else{
//          reject("Bye")                                        // Synchronous Operation with promise 
//      }                                                        
// })

// Pro.then(function(str){
//     console.log(str)
// },function(str){                                             // without .catch() method
//     console.log(str)

// })

/*...................................................................................... */

// let Pro2 = new Promise(function(resolve,reject){
//     let a = 10;
//     let b = 20;
//     if(a==b){
//         resolve([10,20,30,40,50])
//     }else{
//         resolve([90,80,70,60,])                             // Synchronous Operation with promisw
//     }
// })

// Pro2.then(function(str){
//     console.log(str[2])
// }).catch(function(str){                                     // with .catch() method
//     console.log(str[2])
// })

/*...................................................................................... */


let Pro2 = new Promise(function (resolve, reject) {
    let A = 10
    let B = 10
    if (A == B) {
        resolve('1')
    } else {
        reject('Invalid Credentials')
    }
}).then(function (id) {
        getInfo(id).then(function (resp) {
            console.log(resp)
        }).catch(function (resp) {
            console.log(resp)
        })

}).catch(function (resp) {
    console.log(resp)
})


function getInfo(id) {
    return new Promise(function (resolve, reject) {
        if (id == 1) {
            resolve('dadas.suraj96@gmail.com')
        } else {
            reject('Unable to get info')
        }
    })
}







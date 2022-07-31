function getJson(url) {
    return fetch(url)
        .then(function (response) {
            return response.json()
        })
}

let AB = async function () {
    let response = await getJson('https://reqres.in/api/users?page=2')
    console.log(response)
    let userId = response.data[0].id
    let userinfo = await getJson(`https://reqres.in/api/users/${userId}`)
    console.log(userinfo.data)
}

AB()

//-------------------PROMISE ALL()------------------------
/*  The Promise.all() method takes an group of promises as an input, 
and returns a single Promise that resolves to an array of the results 
of the input promises. This returned promise will resolve when all 
of the input's promises have resolved, or if the input iterable contains no promises. 
It rejects immediately upon any of the input promises rejecting or non-promises throwing an error, 
and will reject with this first rejection message / error.  */

let getDataAll = async function (a, b, c) {
    let AA = await Promise.all(
        [
            getJson(`https://reqres.in/api/users/${a}`),
            getJson(`https://reqres.in/api/users/${b}`),
            getJson(`https://reqres.in/api/users/${c}`)
        ]
    )
    return AA
}

// let A = getDataAll(1, 2, 3)
// A.then(function (obj) {
//     console.log(obj)
// })


//-------------------PROMISE RACE()------------------------
/* The Promise.race() method returns a promise that fulfills or rejects as soon as 
one of the promises in an iterable fulfills or rejects, with the value or reason from that promise.  */

let getDataRace = async function (a, b, c) {
    let BB = await Promise.race([
        getJson(`https://reqres.in/api/users/${a}`),
        getJson(`https://reqres.in/api/users/${b}`),
        getJson(`https://reqres.in/api/users/${c}`)
    ])
    return BB
}

// let B = getDataRace(2, 3, 1)
// B.then(function (obj) {
//     console.log(obj.data)
// })


//-------------------PROMISE ANY()------------------------
/* Promise.any() takes an iterable (group) of Promise objects. It returns a single promise 
that resolves as soon as any of the promises in the iterable fulfills, with the value 
of the fulfilled promise. If no promises in the iterable fulfill (if all of the given promises are rejected), 
then the returned promise is rejected with an AggregateError, 
a new subclass of Error that groups together individual errors.  */

let getDataAny = async function (a, b, c) {
    let CC = await Promise.any([
        getJson(`https://reqres.in/api/users/${a}`),
        getJson(`https://reqres.in/api/users/${b}`),
        getJson(`https://reqres.in/api/users/${c}`)
    ])
    return CC
}

// let C = getDataAny(3, 2, 1)
// C.then(function (obj) {
//     console.log(obj.data)
// })

//-------------------PROMISE ALLSettled()------------------------
/* The Promise.allSettled() method returns a promise that resolves after all 
of the given promises have either fulfilled or rejected, with an array of objects 
that each describes the outcome of each promise.  */

let A = async function () {
    const values = await Promise.allSettled([
        Promise.resolve(33),
        new Promise(function (resolve) {
            resolve(66)
        }),
        Promise.reject(new Error('an error'))
    ])
    console.log(values)

}

//A()

//-------------------PROMISE reject()------------------------
// The Promise.reject() method returns a Promise object that is rejected with a given reason.



//-------------------PROMISE reject()------------------------
/* A Promise that is resolved with the given value, or the promise passed as value, 
if the value was a promise object. */




























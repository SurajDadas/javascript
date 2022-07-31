// -----------------  Method 1  ------------------
// API Call Back Hell  ===> to make Async operation in Sync nature

let request = new XMLHttpRequest()
request.open('GET', 'https://reqres.in/api/users?page=2')
request.send()
request.addEventListener('load', function () {
    // console.log(this.responseText)
    // console.log(JSON.parse(this.responseText))
})

function getUser1(page) {
    let reqrest = new XMLHttpRequest()
    reqrest.open('GET', 'https://reqres.in/api/users?page=' + page)
    reqrest.send()
    reqrest.addEventListener('load', function () {
        //console.log(this.responseText)
        // console.log(JSON.parse(this.responseText))
        let user = JSON.parse(this.responseText)
        let Id = user.data[0].id
        //console.log(Id)

        let reqrest1 = new XMLHttpRequest()
        reqrest1.open('GET', 'https://reqres.in/api/users/' + Id)
        reqrest1.send()
        reqrest1.addEventListener('load', function () {
            //console.log(this.responseText)
            //console.log(JSON.parse(this.responseText))
            let user = JSON.parse(this.responseText)
            let email = user.data.email
            let firstName = user.data.first_name
            let id = user.data.id
            let avtar = user.data.avatar

            // console.log(user)
            console.log(id)
            console.log(email)
            console.log(firstName)
            // console.log(avtar)

        })

    })

}

// getUser1(2)             //call Function
// getUser1(1)             //call Function



//-------------------------------------------------------------------------------------------------
// -----------------  Method 2  ------------------

// To avoid this call Back hell there is another method known as promises
// PROMISES ==> Pending + Resolve + Reject

function getUser2(page) {
    return fetch(`https://reqres.in/api/users?page=${page}`)
        .then(function (response) {
            return response.json()
        }).then(function (obj) {
            return obj.data[0].id
        }).then(function (Id) {
            return fetch(`https://reqres.in/api/users/${Id}`)
        }).then(function (response) {
            return response.json()
        }).then(function (obj) {
            console.log(obj.data)
            console.log(obj.data.id)
            console.log(obj.data.email)
            console.log(obj.data.first_name)
        })
}


// getUser2(2)
// getUser2(1)

// If we run this two tests (API CALL BACK HELL & PROMISES) parallel
// then PROMISES test run first and then API CALL BACK HELL test run
// because API test takes time to run and promises give response instant

//-------------------------------------------------------------------------------------------------


function getJson(url){
    return fetch(url)                       // This function is written to get response 
    .then(function(response){               // of url entered as parameter in json() format 
        return response.json() 
    })
}

// -----------------  Method 3  ------------------
// To avoid this promise there is another method known as Async-await method

let getData = async function() {
    let response = await getJson('https://reqres.in/api/users?page=2')
    console.log(response)
    let userId = response.data[0].id
    let userInfo = await getJson(`https://reqres.in/api/users/`+ userId)
    console.log(userInfo)
}

//getData()
































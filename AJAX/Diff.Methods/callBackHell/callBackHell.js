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

getUser1(2)             //call Function
//getUser1(1)             //call Function

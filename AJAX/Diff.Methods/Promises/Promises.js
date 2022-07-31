//To avoid this call Back hell there is another method known as promises
// PROMISES ==> Pending + Resolve + Reject

function getUser(page) {
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


getUser(2)
// getUser(1)

// If we run this two tests (API CALL BACK HELL & PROMISES) parallel
// then PROMISES test run first and then API CALL BACK HELL test run
// because API test takes time to run and promises give response instant

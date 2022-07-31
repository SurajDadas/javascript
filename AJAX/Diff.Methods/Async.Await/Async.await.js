// -----------------  Method 3  ------------------
// To avoid CALL BACK HELL METHOD &  PROMISES there is another method known as Async-await method

function getJson(url){
    return fetch(url)                       // This function is written to get response 
    .then(function(response){               // of url entered as parameter in json() format 
        return response.json() 
    })
}


let getData = async function() {
    let response = await getJson('https://reqres.in/api/users?page=2')
    console.log(response)
    let userId = response.data[0].id
    let userInfo = await getJson(`https://reqres.in/api/users/`+ userId)
    console.log(userInfo)
}

getData()
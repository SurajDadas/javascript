
co = document.querySelector('#container')

// Make function for getting the country Data

function getCountry(countryName) {
     fetch(`https://restcountries.com/v3.1/name/${countryName}`)
        .then(function (response) {
            return response.json()
        })
        .then(function (rs) {
            country = rs[rs.length - 1]
            renderCountry(country)
            console.log(country)
            return country
        })
        .then(function (country) {
            borderCountry = country.borders[country.borders.length - 1]
            getNeighbourCountry(borderCountry)
        })
}

// Make function for getting the Neighbour country Data

function getNeighbourCountry(neighbourCountryName){
       fetch(`https://restcountries.com/v3.1/name/${neighbourCountryName}`)
       .then(function(response){
        return response.json()
       })
       .then(function(resp){
       country = resp[0]
       renderCountry(country)
       })
}


// Make function to Print Data on User Interface (UI)
//so make HTML page in this function

function renderCountry(countryName){
    let html =`
    <div class = "country">
    <h1>${countryName.name.common}</h1>
    <p>${Object.values(countryName.languages)}</p>
    <img src="${countryName.flags.png}"/>
    </div>
    `
    co.insertAdjacentHTML('beforeEnd',html)
}


getCountry('India')










































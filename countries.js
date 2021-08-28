const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(response => response.json())
        .then(data => displayCountries(data))
}

const displayCountries = countries => {
    const countryContainer = document.getElementById('countries-container');
    countries.forEach(country => {
        const newCountry = document.createElement('div');
        newCountry.innerHTML = `
            <img src="${country.flag}">
            <h3>${country.name}</h3>
            <button onclick="loadCountryByName('${country.name}')">View</button>
        `;
        countryContainer.appendChild(newCountry);
    })
}

const loadCountryByName = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`;
    fetch(url)
        .then(response => response.json())
        .then(data => displayCountryDetails(data[0]))
}

const displayCountryDetails = countryDetails => {
    const countryDetailsID = document.getElementById('country-details');
    const newDetails = document.createElement('div');
    newDetails.innerHTML = `
        <p>Capital: ${countryDetails.capital}</p>
        <p>Region: ${countryDetails.region}</p>
        <p>Subregion: ${countryDetails.subregion}</p>
        <p>Area: ${countryDetails.area}</p>
    `;
    countryDetailsID.appendChild(newDetails);

}

loadCountries();

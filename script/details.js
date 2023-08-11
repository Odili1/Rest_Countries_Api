import Data from '../data/data.json' assert {type: 'json'};


function detailsHandler(){
    // Get Data from Local Storage
    const jsonData = localStorage.getItem('Data');
    const counrtyData = JSON.parse(jsonData);

    // Target the parent Element
    const countryDetails = document.querySelector('.country_details');

    // Destructure Important Info to be used
    const {flags, name, nativeName, population, region, subregion, capital, topLevelDomain, currencies, languages, borders} = counrtyData;
    
    // Get the border countries
    let borderNames = borderCountries(borders);
    console.log(borderNames);

    // Create the innerHTML structure
    countryDetails.innerHTML = `
    <img src=${flags.svg} alt="">

    <div class="details_container">
        <h2>${name}</h2>

        <div class="details">
            <ul class="first">
                <li class="native_name"><span>Native Name:</span> ${nativeName}</li>
                <li class="population"><span>Population:</span> ${population}</li>
                <li class="region"><span>Region:</span> ${region}</li>
                <li class="sub_region"><span>Sub Region:</span> ${subregion}</li>
                <li class="capital"><span>Capital:</span> ${capital}</li>
            </ul>
            <ul class="second">
                <li class="level_domain"><span>Top Level Domain:</span> ${topLevelDomain}</li>
                <li class="currencies"><span>Currencies:</span> ${currencies.reduce((acc, cur) => acc += ` ${cur.name},`,'')}</li>
                <li class="languages"><span>Languages:</span> ${languages.reduce((acc, cur) => acc += ` ${cur.name},`,'')}</li>
            </ul>
        </div>

        <div class="border_countries">
            <p>Border Countries:</p>
            <div class="border_countries_names">
                ${borderNames}
            </div>
        </div>
    </div>
    `;

    // Clear Local Storage
    localStorage.clear();
}

function borderCountries(borders){
    return borders.reduce((acc, cur) => {
        for (let {name, alpha3Code} of Data){
            if (cur === alpha3Code){
                console.log(cur == alpha3Code, name);
                acc += ` <button>${name}</button>`,''

            }
        }
        console.log(acc);
        return acc
    }, '');
}

window.addEventListener('load', detailsHandler)
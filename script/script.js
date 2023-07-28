import jsonData from '../data/data.json' assert {type: 'json'};

// const countryBox = document.querySelector('.country_box');
const countries = document.querySelector('.countries')
// console.log(countryBox);

function displayData(data){
    for (let {name, population, flags, capital, region} of data){
        const countryBox = document.createElement('div');
        countryBox.classList = 'country_box';
        countryBox.innerHTML = `
        <img src=${flags.svg} alt="">
                
        <div class="country_box_details">
            <h1 class="name">${name}</h1>
            <ul>
                <li class="population"><span>Population:</span> ${population}</li>
                <li class="region"><span>Region:</span> ${region}</li>
                <li class="capital"><span>Capital:</span> ${capital}</li>
            </ul>
        </div>
        `;

        countries.append(countryBox)
    }
}

displayData(jsonData);




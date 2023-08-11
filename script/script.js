import jsonData from '../data/data.json' assert {type: 'json'};

// Display Funtion
function displayData(data){
    const countries = document.querySelector('.countries');
    for (let {name, population, flags, capital, region} of data){
        const countryBox = document.createElement('a');
        countryBox.setAttribute('href', './details.html')
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


// Search Function
function SearchData(){
    const searchValue = search.value
    const country_name = document.querySelectorAll('.name');
    // i.textContent.toLowerCase().startsWith(searchValue)
    for (let i of country_name){
        i.parentElement.parentElement.classList.remove('disabled')
        if (!i.textContent.toLowerCase().startsWith(searchValue)){
            i.parentElement.parentElement.classList.add('disabled')
        }
        
    }
}


// Filter Function
function filterData(e){
    if (e.target.value === (filterBy.value === '' ? 0 : filterBy.value)){
        const region = document.querySelectorAll('.region');
        for (let i of region){
            i.parentElement.parentElement.parentElement.classList.remove('disabled');

            // Filter out unmatched selection
            if (i.textContent.split(' ')[1].toLowerCase() !== e.target.value){
                i.parentElement.parentElement.parentElement.classList.add('disabled');
            }
        }
    }
}


// Get Selected Country Details
export function countryDetails(el){
    console.log(el.children[1].children[0].textContent);
    let countryName = el.children[1].children[0].textContent
    for (let countryData of jsonData){
        const {name} = countryData;
        if (name === countryName){
            console.log(countryData);
            localStorage.setItem('Data', JSON.stringify(countryData))
            return 
        }
    }
};


function handleMode(){
    // Root Element
    const root = document.documentElement
    
    if (darkMode.classList[1] === 'dark_mode'){
        root.style.setProperty('--mode-Background', 'hsl(207, 26%, 17%)');
        root.style.setProperty('--mode-text', 'hsl(0, 0%, 100%)');
    
        // Change the class name
        darkMode.classList.replace('dark_mode', 'light_mode')
        console.log(darkMode);

        // Edit Style
        country_box.forEach((el) => {
            el.style.boxShadow = '0px 2px 5px 7px rgb(39, 51, 63)'
            console.log(el);
        })
    } else {
        root.style.setProperty('--mode-Background', 'hsl(0, 0%, 98%)');
        root.style.setProperty('--mode-text', 'hsl(200, 15%, 8%)');
        
        // Change the class name
        darkMode.classList.replace('light_mode', 'dark_mode');

        // Edit style
        country_box.forEach((el) => {
            el.style.boxShadow = '0px 2px 5px 3px rgba(163, 163, 163, 0.5)'
            console.log(el);
        })
    }
    console.log(darkMode, lightMode);
}





// Display Countries
displayData(jsonData);

// Filter By Continent
const filterBy = document.querySelector('#continent');
filterBy.addEventListener('click', filterData)

// Search For Countries
const search = document.querySelector('.search');
search.addEventListener('keyup', SearchData)

// Handles the Click Event of Any Country Box
const country_box = document.querySelectorAll('.country_box');
country_box.forEach((el) => {
    el.addEventListener('click', () => countryDetails(el))
})

// Handle Modes
const darkMode = document.querySelector('.dark_mode');
const lightMode = document.querySelector('.light_mode')
console.log(darkMode.classList);
(darkMode || lightMode).addEventListener('click', handleMode)
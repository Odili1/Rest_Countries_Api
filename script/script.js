import jsonData from '../data/data.json' assert {type: 'json'};

// Display Funtion
function displayData(data){
    const countries = document.querySelector('.countries');
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
    if (e.target.value === filterBy.value === '' ? 0 : filterBy.value){
        const region = document.querySelectorAll('.region');
        // console.log(region[7].className);
        // const metaData = region[7].parentElement.children;
        // for (let i of metaData){
        //     console.log({[`${i.className}`]: i.textContent.split(' ').slice(1).join(' ')});
        // }
        for (let i of region){
            i.parentElement.parentElement.parentElement.classList.remove('disabled');

            // Filter out unmatched selection
            if (i.textContent.split(' ')[1].toLowerCase() !== e.target.value){
                i.parentElement.parentElement.parentElement.classList.add('disabled')
            }
            
        }
    }
}




// Display Countries
displayData(jsonData);

// Filter By Continent
const filterBy = document.querySelector('#continent');
filterBy.addEventListener('click', filterData)
// filterData()

// Search For Countries
const search = document.querySelector('.search');
search.addEventListener('keyup', SearchData)




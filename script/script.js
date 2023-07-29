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
                <li class="region ${region}"><span>Region:</span> ${region}</li>
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
// function filterData(data){
    // const country_box = document.querySelector('.country_box');
    // const filterBy = document.querySelector('#continent');
    // const options = filterBy.children
    // console.log(options[2].value);
    // filterBy.children.addEventListener('click', (e)=>{
    //     console.log(e.target.children);
    // })
    // for (let i of options){

    // }

    // filterBy.childNodes.addEventListener('click', (e) => {
    //     console.log(e.target[2].value);
    // })
    // data.filter(({region})=> region != )
    // const country_box = document.querySelectorAll('.region');
    // console.log(country_box[0].parentElement.parentElement.parentElement);
// }




// Display Countries
displayData(jsonData);

// Search For Countries
const search = document.querySelector('.search');
search.addEventListener('keyup', SearchData)

// filterData(jsonData)





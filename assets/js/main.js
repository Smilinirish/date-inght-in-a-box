
let queryURL = "https://corsanywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search";
const apiKey = 'wLsYlFFOEJdGUiTRil4CptoWnvddp4BlhEke6YiwNnrTMfgW4wb5pLR89f5PhynrvqSAEsRjHlaiPB8y5H4ChUcx08gx9UenAnD4ThPGe5NMpR6ARQ2Hutvlt0NeYXYx'

var categoryList= ['movietheaters'  , 'hauntedhouses' , 'musicvenues' , 'theater']
var selectedCategoriesContainer1 = document.querySelector('categoryList1')
var selectedCategoriesContainer2 = document.querySelector('categoryList2')
var locationSelection;


// var dropdown = document.querySelector('.dropdown');
// dropdown.addEventListener('click', function(event) {
//   event.stopPropagation();
//   dropdown.classList.toggle('is-active');
// });


var data = {
    // latitude: 28.4639588313221,
    // longitude: -81.3053254036602,
    // categories: "restaurants",
    // limit: 50
    // location: locationSelection
    // categories: selectedCategories1, 
    // limit: 20

    location: "Orlando",
    categories: "movietheaters"
}

$.ajax({
    url: queryURL,
    method: "GET",
    headers: {
        "accept": "application/json",
        "x-requested-with": "xmlhttprequest",
        "Access-Control-Allow-Origin": "*",
        "Authorization": `Bearer ${apiKey}`
    },
    data
}).then(function (res) {
    console.log(res);

    // jQuery.each(res.businesses, function(index, value){
    //     createCard(value); 
    // });
    jQuery.each(res.businesses, function(index, value){
        let html = "";
        html += value.name + '<br />'
      })
      $('.theaterCards').html(html);
    });
    //returns the object
//     console.log(res.business[1])
//     //returns the name
//     console.log(res.business[1].name)
//     //returns the card Photo
//     console.log(res.business[1].image_url)
//     //returns the $ amount
//     console.log(res.business[1].amount)
//     //returns the stars review
//     console.log(res.business[1].rating)
       //returnes the address
//     console.log(res.business[1].location.display_address)
// });

//create a table DIV

// const table = document.getElementByClassName('table')[0]

function createCard(value) {
    const card = document.createElement('div');
    console.log(value.name);
    card.classname = "card";

    const topCard = document.createElement('div');
    topCard.innertext = value.name + value.image_url;

    const bottomCard = document.createElement('div');
    bottomCard.className = "right"

    card.append(topCard);
    card.prepend(bottomCard);

    return card
}

//Create a card div
    //create top number DIV
    //Create bottom number div with 'right' class and 'left' class

//append card tiv to table div


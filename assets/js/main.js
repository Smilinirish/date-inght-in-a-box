var catagoryList = []
// selection for first card 
var selectedCatagory1;
// selection for second card 
var selectedCatagory2;
// zip search area 
var locationSelection;
// travel distacnce between locations 
var distance;


let queryURL = "https://corsanywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search";
const apiKey = 'wLsYlFFOEJdGUiTRil4CptoWnvddp4BlhEke6YiwNnrTMfgW4wb5pLR89f5PhynrvqSAEsRjHlaiPB8y5H4ChUcx08gx9UenAnD4ThPGe5NMpR6ARQ2Hutvlt0NeYXYx'
var data = {
    // location: locationSelection,
    // categories: selectedCatagory1,
    // limit: 25
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
    // returns the object
    console.log(res.businesses[1])
    // returns the name 
    console.log(res.businesses[1].name)
    // card photo 
    console.log(res.businesses[1].image_url)
    
});

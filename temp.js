var count1 = 0;
let queryURL = "https://corsanywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search";
const apiKey = 'wLsYlFFOEJdGUiTRil4CptoWnvddp4BlhEke6YiwNnrTMfgW4wb5pLR89f5PhynrvqSAEsRjHlaiPB8y5H4ChUcx08gx9UenAnD4ThPGe5NMpR6ARQ2Hutvlt0NeYXYx'
var data = {
    latitude: 28.4639588313221,
    longitude: -81.3053254036602,
    categories: "restaurants",
    limit: 50
    // location: "Orlando",
    // categories: "movietheaters"
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
}).then(function SetCard1Display(res) {
    if (document.querySelector('.check') === null) {
        $('.display').append('<div class="card m-5 check"><div class="card-image startPoint"><figure class="image is-4by3"><img class="card1Image" src=' + res.businesses[count1].image_url + ' alt="Placeholder image"></figure></div><div class="card-content"><button id="card1LBtn"> < </button><button id="card1RBtn"> > </button><div class="content"><h1 class="firstCardName">' + res.businesses[count1].name + '</h1><h3 class="firstCardAddress">' + res.businesses[count1].location.display_address[0] + " " + res.businesses[count1].location.display_address[1] + '</h3><p class="firstCardRating"><strong>Rating: </strong>' + res.businesses[count1].rating + '/5<p class="firstCardPhone"><strong>Phone Number: </strong>' + res.businesses[count1].phone + '</p></div></div></div>')
    }
    else {
        document.querySelector('.card1Image').src = res.businesses[count1].image_url;
        $('.firstCardName').replaceWith('<h1 class="firstCardName">' + res.businesses[count1].name + '</h1></h1>');
        $('.firstCardAddress').replaceWith('<h3 class="firstCardAddress">' + res.businesses[count1].location.display_address[0] + " " + res.businesses[count1].location.display_address[1] + '</h3>');
        $('.firstCardRating').replaceWith('<p class="firstCardRating"> <strong>Rating </strong>' + res.businesses[count1].rating + '/5</p>');
        $('.firstCardPhone').replaceWith('<p class="firstCardPhone"><strong>Phone Number: </strong>' + res.businesses[count1].phone + '</p>');
        console.log(data2);
    }
}).then(function secondApiCall(){
    // $.ajax({
    //     url: queryURL,
    //     method: "GET",
    //     headers: {
    //         "accept": "application/json",
    //         "x-requested-with": "xmlhttprequest",
    //         "Access-Control-Allow-Origin": "*",
    //         "Authorization": `Bearer ${apiKey}`
    //     },
    //     latitude:res.businesses[count1].coordinates.latitude,
    //     longitude:resData.businesses[count1].coordinates.longitude,
    // });
    console.log(businesses[count1].coordinates.longitude)
});


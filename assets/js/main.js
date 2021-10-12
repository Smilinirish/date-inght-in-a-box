// selection for first card 
var selectedCatagory1;
// selection for second card 
var selectedCatagory2;
// zip search area 
var locationSelection;
// travel distacnce between locations 
var distance;
var card1LBtn = document.getElementById('card1LBtn');
var card1RBth = document.getElementById('card1RBtn');
var card2LBtn = document.getElementById('card2LBtn');
var card2RBth = document.getElementById('card2RBtn');
var searchBtn = document.getElementById('submitBtn');
var count1 = 0;
var count2 = 0;


function count2add() {
    count2++;
}
function count2subtract() {
    count2--;
}

let queryURL = "https://corsanywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search";
const apiKey = 'wLsYlFFOEJdGUiTRil4CptoWnvddp4BlhEke6YiwNnrTMfgW4wb5pLR89f5PhynrvqSAEsRjHlaiPB8y5H4ChUcx08gx9UenAnD4ThPGe5NMpR6ARQ2Hutvlt0NeYXYx'
var data = {
    // location: locationSelection,
    // categories: selectedCatagory1,
    // limit: 25
    location: "Orlando",
    categories: "movietheaters"
}
// first call 
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

     function count1add() {
        if (count1 >= res.businesses.length) {
        }
        else {
            count1++;
        }
        console.log(count1)
    }
    function count1subtract() {
        if (count1 <= 0) {
        }
        else {
            count1--;
        }
    
        console.log(count1)
    }
    function card1display(){
        $('.firstCardName').replaceWith('<h1 class="firstCardName">' + res.businesses[count1].name + '</h1></h1>');
        $('.firstCardAddress').replaceWith('<h3 class="firstCardAddress">' + res.businesses[count1].location.display_address[0] + " " + res.businesses[count1].location.display_address[1] + '</h3>');
        $('.firstCardRating').replaceWith('<p class="firstCardRating"> <strong>Rating </strong>'+ res.businesses[count1].rating + '/5</p>');
        $('.firstCardPhone').replaceWith('<p class="firstCardPhone"><strong>Phone Number: </strong>'+res.businesses[count1].phone+'</p>');
        document.querySelector('.card1Image').src=res.businesses[count1].image_url;
    }

    function card1left(){
        
        card1display();
        count1subtract();
        console.log(count1)
    }
    function card1Right(){
        card1display();
        count1add();
    }
    card1LBtn.addEventListener("click",card1left);
    card1RBtn.addEventListener('click',card1Right)
    // card1RBtn.addEventListener("click", );
});





//$("iframe")
var originInput=$("#origin")
originInput.text="text"
console.log(originInput)
//$(".destination")
//"https://www.google.com/maps/embed/v1/directions?key=AIzaSyBhzc6b3tPUkEyQ9TkqRl2gCCcw5WGCQyo&origin=Oslo+Norway&destination=Telemark+Norway&avoid=tolls|highways"
var iframe=$("#map")
console.log(iframe)

var origin= 32708
var destination= 14625
var url= "https://www.google.com/maps/embed/v1/directions?key=AIzaSyBhzc6b3tPUkEyQ9TkqRl2gCCcw5WGCQyo&origin="+origin+"&destination="+destination

iframe.attr("src", url);
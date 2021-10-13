var distance;
var count1 = 0;
var count2 = 0;
var apiData;
var apiData2;
var firstApiCallData;
var secondApiCallData;
var response;
let queryURL = "https://corsanywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search";
const apiKey = 'wLsYlFFOEJdGUiTRil4CptoWnvddp4BlhEke6YiwNnrTMfgW4wb5pLR89f5PhynrvqSAEsRjHlaiPB8y5H4ChUcx08gx9UenAnD4ThPGe5NMpR6ARQ2Hutvlt0NeYXYx'
const apiKey2 = 'znqgGvWZjSHuviYlTuSQ0S624sMP0C-YDc1EjqNSW_OQEZLzt5zPnRNHuJ_hsRgLzTZtxZpdDnrY2O1FX9Ta94dYRIeAhlZ9UaLNXDCrPohuFzphGPuM0mG0M7ZhYXYx'
var data;
var data2;

function firstApiCall() {
    response = $.ajax({
        url: queryURL,
        method: "GET",
        headers: {
            "accept": "application/json",
            "x-requested-with": "xmlhttprequest",
            "Access-Control-Allow-Origin": "*",
            "Authorization": `Bearer ${apiKey}`
        },
        data:data
    });
    firstApiCallData = response;
    SetCard1Display();
}
function secondApiCall() {
    response = $.ajax({
        url: queryURL,
        method: "GET",
        headers: {
            "accept": "application/json",
            "x-requested-with": "xmlhttprequest",
            "Access-Control-Allow-Origin": "*",
            "Authorization": `Bearer ${apiKey}`,
        },
        data:data2


    });
    secondApiCallData = response;
    console.log(secondApiCallData);
    SetCard2Display();
}
function SetCard1Display() {
    var getData = setInterval(() => {
        if (typeof firstApiCallData.responseJSON !== 'undefined') {
            apiData = firstApiCallData.responseJSON;
            if (document.querySelector('.check') === null) {
                $('.display').append('<div class="card m-5 check"><div class="card-image startPoint"><figure class="image is-4by3"><img class="card1Image" src=' + apiData.businesses[count1].image_url + ' alt="Placeholder image"></figure></div><div class="card-content"><button id="card1LBtn"> < </button><button id="card1RBtn"> > </button><div class="content"><h1 class="firstCardName">' + apiData.businesses[count1].name + '</h1><h3 class="firstCardAddress">' + apiData.businesses[count1].location.display_address[0] + " " + apiData.businesses[count1].location.display_address[1] + '</h3><p class="firstCardRating"><strong>Rating: </strong>' + apiData.businesses[count1].rating + '/5<p class="firstCardPhone"><strong>Phone Number: </strong>' + apiData.businesses[count1].phone + '</p></div></div></div>')
            }
            else {
                document.querySelector('.card1Image').src = apiData.businesses[count1].image_url;
                $('.firstCardName').replaceWith('<h1 class="firstCardName">' + apiData.businesses[count1].name + '</h1></h1>');
                $('.firstCardAddress').replaceWith('<h3 class="firstCardAddress">' + apiData.businesses[count1].location.display_address[0] + " " + apiData.businesses[count1].location.display_address[1] + '</h3>');
                $('.firstCardRating').replaceWith('<p class="firstCardRating"> <strong>Rating </strong>' + apiData.businesses[count1].rating + '/5</p>');
                $('.firstCardPhone').replaceWith('<p class="firstCardPhone"><strong>Phone Number: </strong>' + apiData.businesses[count1].phone + '</p>');
            }
            clearInterval(getData);
            setData2();
            var timer = setInterval(() => {
                if (typeof data2 !== 'undefined') {
                    clearInterval(timer);
                    secondApiCall();
                }
            }, 200);
        }
    }, 200)

}
function count1add() {
    var getData = setInterval(() => {
        if (typeof firstApiCallData.responseJSON !== 'undefined') {
            if (count1 === apiData.businesses.length) {
            }
            else {
                count1++;
                SetCard1Display();
            }
            clearInterval(getData);
        }
    }, 1)

}
function count1subtract() {
    var getData = setInterval(() => {
        if (typeof firstApiCallData.responseJSON !== 'undefined') {
            if (count1 === 0) {
            }
            else {
                count1--;
                SetCard1Display();
            }
            clearInterval(getData);
        }
    }, 1)

}
function SetCard2Display() {
    var getData = setInterval(() => {
        if (typeof secondApiCallData.responseJSON !== 'undefined') {
            apiData2 = secondApiCallData.responseJSON;
            if (document.querySelector('.check2') === null) {
                $('.display').append('<div class="card m-5 check2"><div class="card-image startPoint2"><figure class="image is-4by3"><img class="card2Image" src=' + apiData2.businesses[count2].image_url + ' alt="Placeholder image"></figure></div><div class="card-content"><button id="card2LBtn"> < </button><button id="card2RBtn"> > </button><div class="content"><h1 class="SecondCardName">' + apiData2.businesses[count2].name + '</h1><h3 class="SecondCardAddress">' + apiData2.businesses[count2].location.display_address[0] + " " + apiData2.businesses[count2].location.display_address[1] + '</h3><p class="SecondCardRating"><strong>Rating: </strong>' + apiData2.businesses[count2].rating + '/5<p class="firstCardPhone"><strong>Phone Number: </strong>' + apiData2.businesses[count2].phone + '</p></div></div></div>')
            }
            else {
                document.querySelector('.card2Image').src = apiData2.businesses[count2].image_url;
                $('.SecondCardName').replaceWith('<h1 class="SecondCardName">' + apiData2.businesses[count2].name + '</h1></h1>');
                $('.SecondCardAddress').replaceWith('<h3 class="SecondCardAddress">' + apiData2.businesses[count2].location.display_address[0] + " " + apiData2.businesses[count2].location.display_address[1] + '</h3>');
                $('.SecondCardRating').replaceWith('<p class="SecondCardRating"> <strong>Rating </strong>' + apiData2.businesses[count2].rating + '/5</p>');
                $('.SecondCardPhone').replaceWith('<p class="SecondCardPhone check2"><strong>Phone Number: </strong>' + apiData2.businesses[count2].phone + '</p>');
            }
            clearInterval(getData)
        }
    }, 200);

}

function count2add() {
    var getData = setInterval(() => {
        if (typeof secondApiCallData.responseJSON !== 'undefined') {
            if (count2 === apiData2.businesses.length) {
            }
            else {
                count2++;
                SetCard1Display();
            }
            clearInterval(getData);
        }
    }, 1)
}
function count2subtract() {
    var getData = setInterval(() => {
        if (typeof secondApiCallData.responseJSON !== 'undefined') {
            if (count2 === 0) {
            }
            else {
                count2--;
                SetCard2Display();
            }
            clearInterval(getData);
        }
    }, 1)

}
function setSearch() {
    count1 = 0
    count2 = 0
    data = {
        location: $('#location').val(),
        categories: $('#catagoryList1 :selected').val(),
        limit: 25
    }
    firstApiCall();
}

function setData2() {
    var getData = setInterval(() => {

        if (typeof apiData !== 'undefined') {
            clearInterval(getData);
            console.log(apiData.businesses[count2].location.display_address[0])
            data2 = {
                // location:apiData.businesses[count2].location.display_address[0]+ " " +apiData.businesses[count2].location.display_address[1],
                // location:'3210 Madison Rd Cincinnati, OH 45209',
                latitude: apiData.businesses[count1].coordinates.latitude,
                longitude: apiData.businesses[count1].coordinates.longitude,
                categories:$('#catagoryList2 :selected').val(),
                limit: 25,
            }
            console.log(data2);

        }
    }, 100);
}
$(document).on('click', '#submitBtn', setSearch);
$(document).on('click', '#card1LBtn', count1subtract);
$(document).on('click', '#card1RBtn', count1add);
$(document).on('click', '#card2LBth', count2subtract);
$(document).on('click', '#card2RBtn', count2add);

// card1RBth.addEventListener('click', card1Right)

//$("iframe")
// var originInput = $("#origin")
// originInput.text = "text"
// console.log(originInput)
// $(".destination")
// "https://www.google.com/maps/embed/v1/directions?key=AIzaSyBhzc6b3tPUkEyQ9TkqRl2gCCcw5WGCQyo&origin=Oslo+Norway&destination=Telemark+Norway&avoid=tolls|highways"
// var iframe = $("#map")
// console.log(iframe)

// var origin = 32708
// var destination = 14625
// var url = "https://www.google.com/maps/embed/v1/directions?key=AIzaSyBhzc6b3tPUkEyQ9TkqRl2gCCcw5WGCQyo&origin=" + origin + "&destination=" + destination

// iframe.attr("src", url)

const queryURL =
  "https://corsanywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search";
const apiKey =
  "wLsYlFFOEJdGUiTRil4CptoWnvddp4BlhEke6YiwNnrTMfgW4wb5pLR89f5PhynrvqSAEsRjHlaiPB8y5H4ChUcx08gx9UenAnD4ThPGe5NMpR6ARQ2Hutvlt0NeYXYx";
const apiKey2 =
  "znqgGvWZjSHuviYlTuSQ0S624sMP0C-YDc1EjqNSW_OQEZLzt5zPnRNHuJ_hsRgLzTZtxZpdDnrY2O1FX9Ta94dYRIeAhlZ9UaLNXDCrPohuFzphGPuM0mG0M7ZhYXYx";
let count1;
let count2;
let firstApiData;
let secondApiData;
let distance;
async function firstApiCall() {
  firstApiCallData = await $.ajax({
    url: queryURL,
    metthod: "GET",
    headers: {
      accept: "application/json",
      "x-requested-with": "xmlhttprequest",
      "Access-Control-Allow-Origin": "*",
      Authorization: `Bearer ${apiKey}`,
    },
    data: searchPerams1,
  });
  return (firstApiData = firstApiCallData);
}

async function firstCard() {
  await firstApiCall();
  if (document.querySelector(".check") === null) {
    $(".display").append(
      '<div class="card m-5 check"><div class="card-image startPoint"><figure class="image is-4by3"><img class="card1Image" src=' +
        firstApiData.businesses[count1].image_url +
        ' alt="Placeholder image"></figure></div><div class="card-content"><button id="card1LBtn"> < </button><button id="card1RBtn"> > </button><div class="content"><h1 class="firstCardName">' +
        firstApiData.businesses[count1].name +
        '</h1><h3 class="firstCardAddress">' +
        firstApiData.businesses[count1].location.display_address[0] +
        " " +
        firstApiData.businesses[count1].location.display_address[1] +
        '</h3><p class="firstCardRating"><strong>Rating: </strong>' +
        firstApiData.businesses[count1].rating +
        '/5<p class="firstCardPhone"><strong>Phone Number: </strong>' +
        firstApiData.businesses[count1].phone +
        "</p></div></div></div>"
    );
  } else {
    document.querySelector(".card1Image").src =
      firstApiData.businesses[count1].image_url;
    $(".firstCardName").replaceWith(
      '<h1 class="firstCardName">' +
        firstApiData.businesses[count1].name +
        "</h1></h1>"
    );
    $(".firstCardAddress").replaceWith(
      '<h3 class="firstCardAddress">' +
        firstApiData.businesses[count1].location.display_address[0] +
        " " +
        firstApiData.businesses[count1].location.display_address[1] +
        "</h3>"
    );
    $(".firstCardRating").replaceWith(
      '<p class="firstCardRating"> <strong>Rating </strong>' +
        firstApiData.businesses[count1].rating +
        "/5</p>"
    );
    $(".firstCardPhone").replaceWith(
      '<p class="firstCardPhone"><strong>Phone Number: </strong>' +
        firstApiData.businesses[count1].phone +
        "</p>"
    );
  }
  setSearchPerams2();
}

function count1add() {
  if (count1 !== firstApiData.businesses.length) {
    count1++;
    firstCard();
  }
}

function count1subtract() {
  if (count1 !== 0) {
    count1--;
    firstCard();
  }
}

async function secondApiCall() {
  secondApiCallData = await $.ajax({
    url: queryURL,
    method: "GET",
    headers: {
      accept: "application/json",
      "x-requested-with": "xmlhttprequest",
      "Access-Control-Allow-Origin": "*",
      Authorization: `Bearer ${apiKey}`,
    },
    data: searchPerams2,
  });
  console.log("second Api Call", secondApiCallData);

  return (secondApiData = secondApiCallData);
}

async function secondCard() {
  await secondApiCall();
  if (document.querySelector(".check2") === null) {
    $(".display").append(
      '<div class="card m-5 check2"><div class="card-image startPoint2"><figure class="image is-4by3"><img class="card2Image" src=' +
        secondApiData.businesses[count2].image_url +
        ' alt="Placeholder image"></figure></div><div class="card-content"><button id="card2LBtn"> < </button><button id="card2RBtn"> > </button><div class="content"> <p>'+count2+'/'+secondApiData.businesses.length+'<p/><h1 class="SecondCardName">' +
        secondApiData.businesses[count2].name +
        '</h1><h3 class="SecondCardAddress">' +
        secondApiData.businesses[count2].location.display_address[0] +
        " " +
        secondApiData.businesses[count2].location.display_address[1] +
        '</h3><p class="SecondCardRating"><strong>Rating: </strong>' +
        secondApiData.businesses[count2].rating +
        '/5<p class="firstCardPhone"><strong>Phone Number: </strong>' +
        secondApiData.businesses[count2].phone +
        "</p></div></div></div>"
    );
  } else {
    document.querySelector(".card2Image").src =
      secondApiData.businesses[count2].image_url;
    $(".SecondCardName").replaceWith(
      '<h1 class="SecondCardName">' +
        secondApiData.businesses[count2].name +
        "</h1></h1>"
    );
    $(".SecondCardAddress").replaceWith(
      '<h3 class="SecondCardAddress">' +
        secondApiData.businesses[count2].location.display_address[0] +
        " " +
        secondApiData.businesses[count2].location.display_address[1] +
        "</h3>"
    );
    $(".SecondCardRating").replaceWith(
      '<p class="SecondCardRating"> <strong>Rating </strong>' +
        secondApiData.businesses[count2].rating +
        "/5</p>"
    );
    $(".SecondCardPhone").replaceWith(
      '<p class="SecondCardPhone check2"><strong>Phone Number: </strong>' +
        secondApiData.businesses[count2].phone +
        "</p>"
    );
  }
  addMap();
}

function count2add() {
  if (count2 !== secondApiCallData.businesses.length) {
    count2++;
    secondCard();
  }
}

function count2subtract() {
  if (count2 !== 0) {
    count2--;
    secondCard();
  }
}

function setSearchPerams1() {
  count1 = 0;
  count2 = 0;
  searchPerams1 = {
    location: $("#location").val(),
    categories: $("#catagoryList1 :selected").val(),
    limit: 25,
  };
  firstCard();
  console.log(firstApiCall());
}

function setSearchPerams2() {
  searchPerams2 = {
    latitude: firstApiData.businesses[count1].coordinates.latitude,
    longitude: firstApiData.businesses[count1].coordinates.longitude,
    categories: $("#catagoryList2 :selected").val(),
    radius: $("#distance :selected").val(),
    limit: 25,
  };
  secondCard();
}

function addMap() {
  if (document.querySelector(".check3") === null) {
    $(".display").append(
      '<iframe class="map m-5 check3" width="650" height="450" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/directions?key=AIzaSyBhzc6b3tPUkEyQ9TkqRl2gCCcw5WGCQyo&origin=' +
      firstApiData.businesses[count1].location.display_address[0] +
        " " +
        firstApiData.businesses[count1].location.display_address[1] +
        "&destination=" +
        secondApiData.businesses[count2].location.display_address[0] +
        " " +
        secondApiData.businesses[count2].location.display_address[1] +
        '" allowfullscreen></iframe>'
    );
  } else {
    $(".map").replaceWith(
      '<iframe class="map m-5 check3" width="650" height="450" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/directions?key=AIzaSyBhzc6b3tPUkEyQ9TkqRl2gCCcw5WGCQyo&origin=' +
      firstApiData.businesses[count1].location.display_address[0] +
        " " +
        firstApiData.businesses[count1].location.display_address[1] +
        "&destination=" +
        secondApiData.businesses[count2].location.display_address[0] +
        " " +
        secondApiData.businesses[count2].location.display_address[1] +
        '" allowfullscreen></iframe>'
    );
  }
}

$(document).on("click", "#submitBtn", setSearchPerams1);
$(document).on("click", "#card1LBtn", count1subtract);
$(document).on("click", "#card1RBtn", count1add);
$(document).on("click", "#card2LBth", count2subtract);
$(document).on("click", "#card2RBtn", count2add);

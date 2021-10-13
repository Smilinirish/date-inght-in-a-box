function addToFirstCard{
    $('.firstCardName').replaceWith('<div class="firstCardName">'+res.business[i].name+'</h1>')
}

function buttonRight(){
    if( i === res.business.length)
    i =0
    addToFirstCard()
}
else{
    i++
    addToFirstCard
}
function buttonLeft(){
    if( i === 0)
    i = res.business.length
    addToFirstCard()
}
else{
    i--
    addToFirstCard
}




leftarrow1.addeventlistener("click",populateCard())



submitBtn = document.querySelector('#submitBtn')


submitBtn.addeventlistener("click",whateverfunch())


function whateverfunch(){
    event.preventDefault();
    catagory1 = $('#catagoryList1 :selected').val();
    catagory2 = $('#catagoryList2 :selected').val();
    distance = $('#distance :selected').val()
    i = 0
    whateverFunctionRappingAPI1();
    whateverfuntionrappingapi2();
    whateverfuntionforGoogleAPI();
    
}






function card1display() {
    $('.firstCardName').replaceWith('<h1 class="firstCardName">' + res.businesses[count1].name + '</h1></h1>');
    $('.firstCardAddress').replaceWith('<h3 class="firstCardAddress">' + res.businesses[count1].location.display_address[0] + " " + res.businesses[count1].location.display_address[1] + '</h3>');
    $('.firstCardRating').replaceWith('<p class="firstCardRating"> <strong>Rating </strong>' + res.businesses[count1].rating + '/5</p>');
    $('.firstCardPhone').replaceWith('<p class="firstCardPhone"><strong>Phone Number: </strong>' + res.businesses[count1].phone + '</p>');
    document.querySelector('.card1Image').src = res.businesses[count1].image_url;
}
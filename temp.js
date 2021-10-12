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
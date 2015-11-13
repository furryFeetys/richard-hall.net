/**
 * Created by Richard Hall on 11/6/2015.
 */

// This function checks the divs to see if they have the "clicked" class. If they do, increment the "count"
// variable that we are using to keep track of how many cards are clicked.
var count = 0;
var startClass = '';
function checkClass() {
    //alert ("first step");
    if ( $(".card").hasClass("clicked")){
        count++;
    }
}

/*

/////////////// RICHARD THESE NOTES ARE FOR YOU!!! //////////
// getElementById needs to be passed an id, not an element type.
//var classList = document.getElementById('div').className.split(/\s+/);
var classList = document.getElementById('div').className.split(/\s+/);
for (var i = 0; i < classList.length; i++) {
    if (classList[i] === 'heart') {
        alert("I think this works?");
    }
}
// So I thought to do classList = $(this).getElement...
// That didn't quite work. Here's why.
// http://stackoverflow.com/questions/4069982/document-getelementbyid-vs-jquery
// $(this)[0]... works, but because we're looking at .card).click, it gives me the class of the card div, not the span.
// So I added classes in the card div that correlate to the icons. We're checking against those classes now.
//*/



// when you click a card, this finds the "front card class" and triggers toggleClass to mark them as "clicked" then fades the front card covering the back card
// finally, it triggers checkClass - which counts how many cards are "clicked"
$ (".card").click(function() {

    // Add 'clicked' class and fade out the front of the card.
    $(this).toggleClass("clicked").find(".front").fadeToggle("fast", "linear");


    //alert ("before function");
    checkClass();
    var classList = $(this)[0].className.split(/\s+/);
    //first-heart
    //var classList = document.getElementById('first-heart').className.split(/\s+/);
    //alert( classList[1] );
    // if startClass empty, assign the class icon of what we clicked into start class.
    if( '' == startClass ) {
        startClass = classList[1];
    }

    // if statClass not empty, compare the icon class of what we clicked to start class.
    // If they match, huzzah. GOt one right on memory game.
    // else, fade out.


    // trying to establish a way to track things.
    //if ( $(".back").hasClass("heart") ){ }

    //alert (count);

    // when 2 objects have been clicked, this triggers a delayed toggleClass on the clicked objects, then toggles the fade so the cards revert back to default.
    if( count >= 2){

        //var divs = $(".clicked").find(".back");
        //console.log($(divs).get(0));
        //console.log($(divs).get(1));
        //alert(divs.length);
        //alert( divs.get(0) );
        //if (divs.get(0) == divs.get(1)) alert("Same");
        //if ($(".clicked").get(0) == $(".clicked").get(1) )alert("YEAH!");
        //$('.clicked *').attr('disabled','disabled').off('click');

        if( startClass == classList[1] ) {
            alert('You found a match!');
            $(".clicked").toggleClass("clicked");
        } else {
            $(".clicked").toggleClass("clicked").find(".front").delay( 2000).fadeToggle("fast", "linear");
        }
        // Have to reset both of these for the next set.
        startClass = '';
        count = 0;
    }
});













// add into the function the addition of a class to track what has been flipped.
// then set up some magic to read if there are two of the same classes selected
// to make those vanish/lock/fart, whatever.

// if the two classes don't match, remove the class from both and undo the flip. (probably have to research how to undo that flippy bit)


//also think about doing some jQuery magic to randomize the location of the cards on initial load.


// make loop checking with hasClass (hasclass returns true/false)
//set variable = 0 - if hasClass = true, increment variable.
// if variable = 2 do shit










/**
 * Created by Richard Hall on 11/6/2015.
 */

// This function checks the divs to see if they have the "clicked" class. If they do, increment the "count"
// variable that we are using to keep track of how many cards are clicked.
//function checkClass(){
//    //alert ("first step");
//
//    if ( $(".front").hasClass("clicked")){
//        count++;
//    }
//}

//function establishMatch(){
//    if($(".front").hasClass("clicked") && (this).hasClass("heart") ){
//        alert ("Boom!");
//    }
//    //need some jquizzle magic to establish if we have a match or if I'm just SOL.
//}


//var count = 0;
//
//// when you click a card, this finds the "front card class" and triggers toggleClass to mark them as "clicked" then fades the front card covering the back card
//// finally, it triggers checkClass - which counts how many cards are "clicked"
//$ (".card").click(function() {
//    $(this).find(".front").toggleClass("clicked").fadeToggle("fast", "linear");
//    //alert ("before function");
//    checkClass();


    // trying to establish a way to track things.
    //if ( $(".back").hasClass("heart") ){
    //
    //
    //}

    //var heart = $(".heart").length;
    //    $(".test").text ("There are " + heart + " hearts.");
    //        if(heart == 2) {
    //            alert ("match");
    //            // and then do some jquizzle magic to make these not do anything.
    //        }

    //alert (count);

    // when 2 objects have been clicked, this triggers a delayed toggleClass on the clicked objects, then toggles the fade so the cards revert back to default.
//    if( count >= 2){
//        establishMatch();
//        $(".clicked").toggleClass("clicked").delay( 2000 ).fadeToggle("fast", "linear");
//        count = 0;
//    }
//});
//
//
//
//
//
//







// add into the function the addition of a class to track what has been flipped.
// then set up some magic to read if there are two of the same classes selected
// to make those vanish/lock/fart, whatever.

// if the two classes don't match, remove the class from both and undo the flip. (probably have to research how to undo that flippy bit)


//also think about doing some jQuery magic to randomize the location of the cards on initial load.


// make loop checking with hasClass (hasclass returns true/false)
//set variable = 0 - if hasClass = true, increment variable.
// if variable = 2 do shit
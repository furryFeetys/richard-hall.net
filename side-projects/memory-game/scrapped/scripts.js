/**
 * Created by Richard Hall on 11/6/2015.
 */
//$(document).load(function () {
//

function flipCard(className){
    $(className).flip({
        axis: "x", // y or x
        reverse: false, // true and false
        speed: 1000
    });
    alert( className );
    //$ (className).toggleClass("flipped")
//    $( this ).toggleClass( "flipped" )
}

//$ (".card").click(function(){
//    $( this ).toggleClass( "flipped" )
//});



flipCard( '#card-1' );
flipCard( '#card-2' );
flipCard( '#card-3' );
flipCard( '#card-4' );
flipCard( '#card-5' );
flipCard( '#card-6' );
flipCard( '#card-7' );
flipCard( '#card-8' );
flipCard( '#card-9' );
flipCard( '#card-10' );
flipCard( '#card-11' );
flipCard( '#card-12' );

//});


// add into the function the addition of a class to track what has been flipped.
// then set up some magic to read if there are two of the same classes selected
// to make those vanish/lock/fart, whatever.

// if the two classes don't match, remove the class from both and undo the flip. (probably have to research how to undo that flippy bit)


//also think about doing some jQuery magic to randomize the location of the cards on initial load.


// make loop checking with hasClass (hasclass returns true/false)
//set variable = 0 - if hasClass = true, increment variable.
// if variable = 2 do shit
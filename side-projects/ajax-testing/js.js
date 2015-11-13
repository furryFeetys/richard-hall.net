/**
 * Created by Richard Hall on 11/12/2015.
 */

$("#demo1").click(function(){
    $( "#result" ).load( "test1.txt", function() {
    });
});

$("#demo2").click(function(){
    $( "#result" ).load( "test2.txt", function() {
    });
});
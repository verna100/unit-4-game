// These are the variablles I will need for the functions to be calculated
var wins =0;
var losses=0;
var score=0;
var randomNum

// This is a function for when the crystal image is clicked. currently working but alert showing up as NAN
$(document).ready(function(){

// set this as the number that will generate for the player to add up to
var randonNum= 50;

//link this function to the html tag that it represents-box
$("scoreHold").text(randomNum);



    var counter =0;
    $(".image1",).on("click", function(){
        counter+=10;
    });
    
        if(counter === randomNum){
            alert("you win!");
        }
  
    
});





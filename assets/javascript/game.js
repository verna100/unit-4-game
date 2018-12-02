// These are the variablles I will need for the functions to be calculated
var scorebox= $(".scorebox");
var numMatch= $("#scoreHold");
var randomNum;
var crystal1;
var crystal2;
var crystal3;
var crystal4;
var wins=0;
var losses=0;
var totalScore= 0;

// document.getElementById("client").reset();
// function reset() {
  // $("#reset").on("click" ,this.form.reset()


function restartGame() {
    randomNum = Math.floor(Math.random() * 100 + 9);
    numMatch.html(randomNum);   
    crystal1= Math.floor(Math.random() * 11 + 1);
    crystal2= Math.floor(Math.random() * 11 + 1);
    crystal3= Math.floor(Math.random() * 11 + 1);
    crystal4= Math.floor(Math.random() * 11 + 1);
    
 }
 
  restartGame();



// This is a function for when the crystal image is clicked. 
$(".image1").on("click", function () {
  totalScore =  totalScore + crystal1;
    scorebox.html(totalScore);
    tracker();
});

$(".image2").on("click", function () {
    totalScore =  totalScore + crystal2;
      scorebox.html(totalScore);
      tracker();
  });

  $(".image3").on("click", function () {
    totalScore =  totalScore + crystal3;
      scorebox.html(totalScore);
      tracker();
  });

  $(".image4").on("click", function () {
    totalScore =  totalScore + crystal4;
      scorebox.html(totalScore);
      tracker();

  });


  function tracker(){
    
      if(totalScore === randomNum){
            wins++;
          $("#won").text("Wins: " + wins);
          $(".score").text("Your total score is: " + wins);
          alert("Great work, refresh page to play again!")
      } 
      // I could not figure out how to add a reset/restart feature so I added an alert so that the game player can know to refresh the page to start the game again. Not the best coding skill but a creative one!
        if 
          (totalScore > randomNum){
          losses++
          $("#loss").text("Losses: " + losses);
          $(".score").text("Your total score is: " + (losses - 1));
          alert("Sorry, maybe next time. Refresh page to try again!");
  
      } 


  }

  tracker()

  

 
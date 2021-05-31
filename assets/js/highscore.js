
//Button for viweing high score
const highScoreList = document.getElementById("highscore-list");
//highscore array of objs 
const hscoreArr = JSON.parse(localStorage.getItem("highScoreArr"))||[];


var scoreli;
// For every obj in highscoreArr create a list element and add it to the <ul>
for (let i = 0; i <hscoreArr.length; i++) {
    scoreli = document.createElement("li");
    scoreli.className ="hslist";
    scoreli.innerHTML =hscoreArr[i].name+"      "+"-"
    +"  "+hscoreArr[i].score ;
    console.log(scoreli.innerHTML);
    highScoreList.appendChild(scoreli);
  }
  
// clear score from local storage when button is clicked 
const clearScoreButton=document.getElementById("clear-btn");  
// // Clear localStorage items 
clearScoreButton.addEventListener("click", function () {
    localStorage.clear();
    highScoreList.innerHTML = "";
});
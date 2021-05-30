var body = document.body;
//Button for viweing high score
const highScoreList = document.getElementById("highscore-list");
const hscoreArr = JSON.parse(localStorage.getItem("highScoreArr"))||[];


var scoreli;
for (let i = 0; i <hscoreArr.length; i++) {
    scoreli = document.createElement("li");
    scoreli.className ="hslist";
    scoreli.innerHTML =hscoreArr[i].name+"      "+"  "+hscoreArr[i].score ;
    console.log(scoreli.innerHTML);
    highScoreList.appendChild(scoreli);
  }
  

// // Restart or reload the page
//  restartButton.addEventListener("click", function () {
//     window.location.reload();
// });

const clearScoreButton=document.getElementById("clear-btn");  
// // Clear localStorage items 
clearScoreButton.addEventListener("click", function () {
    localStorage.clear();
    highScoreList.innerHTML = "";
});

//Button for viweing high score
const highScoreList = document.getElementById("highscore-list");
const hscoreArr = JSON.parse(localStorage.getItem("higScoreArr"))||[];

highScoreList.innerHTML= hscoreArr.map(score =>
{
    console.log(score);
    console.log(score.name);
    console.log(score.score);
    console.log("<li>${score.name}-${score.score} </li>");
});

for (let i = 0; i < hscoreArr.length; i++) {
   console.log(hscoreArr[i].name);
     }


// submitButton.addEventListener("click", function (event) {
//     event.preventDefault()
//     var initials = document.querySelector("#initials-field").value;
//     showHighScores(initials);
// });


// // Restart or reload the page
//  restartButton.addEventListener("click", function () {
//     window.location.reload();
// });


// // Clear localStorage items 
// clearScoreButton.addEventListener("click", function () {
//     localStorage.clear();
//     document.getElementById("highscore").innerHTML = "";
// });
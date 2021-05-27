var body = document.body;

//align Div 
var quizContainer= document.getElementById("home");
quizContainer.display="flex";
quizContainer.style.justifyContent="center";
quizContainer.style.flexDirection="column";
quizContainer.style.alignItems ="center";
quizContainer.style.fontFamily="Arial";
quizContainer.style.textAlign="center";
quizContainer.style.minHeight="100vh";


// Add Link to high score 
var highScoreLink= document.createElement("a");
highScoreLink.textContent="View high-score"
highScoreLink.href= "assets/highscore.html";
highScoreLink.class="btn";
highScoreLink.style.textAlign="left";
highScoreLink.style.display="flex";
highScoreLink.style.alignItems="flex-start";
highScoreLink.style.flexWrap="wrap";
highScoreLink.style.marginLeft="50px"
quizContainer.appendChild(highScoreLink);


// time display
var timeDisplayEl =document.createElement("h4");
timeDisplayEl.textContent="Time : 0";
timeDisplayEl.style.textAlign="right"
timeDisplayEl.style.display ="flex";
timeDisplayEl.style.margin="flex-start";
timeDisplayEl.style.marginRight="500px";


quizContainer.appendChild(timeDisplayEl);

// Page 1 - Add a centered h1
var headerElement1 =document.createElement("h1");
headerElement1.style.textAlign ="center";
headerElement1.textContent="Coding Quiz Challenge";
headerElement1.style.fontSize="x-large";
headerElement1.style.fontWeight ="bolder";
headerElement1.style.justifyContent="left";
console.log(headerElement1);
quizContainer.appendChild(headerElement1);
//body.appendChild(quizContainer);


//Add A paragraph 
var paraElement = document.createElement("p");
paraElement.style.textAlign="center";
paraElement.textContent= "Try to answer the following code realted questions within the time limit.Keep in mind that incorrect answers will penalize your score by 10seconds!"
paraElement.fontSize="large";
paraElement.style.lineHeight="1.5";
paraElement.style.wordSpacing="3"
paraElement.style.marginLeft ="100px";
paraElement.style.marginRight="200px";
paraElement.style.alignContent="center";
paraElement.justifyContent="center";

quizContainer.appendChild(paraElement);


//Create Button 
var buttonElement = document.createElement("button");
buttonElement.textContent="START";
buttonElement.style.backgroundColor= "lightblue";
buttonElement.style.textAlign="center";
buttonElement.display="flex";
buttonElement.style.justifyContent="center";
buttonElement.style.borderRadius="12px";
buttonElement.style.padding ="12px 28px";
buttonElement.addEventListener("click",function(){
    window.location ="assets/quiz.html"

});
buttonElement.addEventListener("mouseover", function(){
    buttonElement.style.cursor="pointer";
    
});
quizContainer.appendChild(buttonElement);

//Add All the child elements to body 
body.appendChild(quizContainer);





//create a question element 
const questionEl = document.getElementById("question");
//Create an array of choices element  for four button choices 
const choiceEl =Array.from(document.getElementsByClassName("option"));
// varaible declaration 
var questionIndex =0;  // Starting quiz array index 
let quizScoreEl =5;     
var questionCounterEl =0; 
var currentQuestion ={};    //  array to select the cuurent question displayed
var acceptResponse =false; // If user has clicked a respnse 
var timeLeft =50;

const _MAX_QUESTIONS=5; //Maximum number of questions 

// Question Bank array of objects  - Question,choices and answer
const questionBankArr =[
    {
        question:" What function returns a random number between 0 (inclusive),  and 1?",
        choice1:"1. Math.ceil",
        choice2:"2. Math.random",
        choice3:"3. Math.round",
        choice4:"4. Math.floor",
        answer: 2
    },
    {
        question:"What does DOM stand for?",
        choice1:"1. Document Object Module",
        choice2:"2. Dynamic Object model",
        choice3:"3. Document Object model",
        choice4:"4. Document Object Module",
        answer: 3

    },
    {
        question:" How do you select all p elements inside a div element?",
        choice1:"1. div p",
        choice2:"2. div{p}",
        choice3:"3. div.p",
        choice4:"4. div(p)",
        answer:1
    
    },
    {
        question:"Which function of Array object extracts a section of an array and returns a new array?",
        choice1:"1. shift()",
        choice2:"2. reverse()",
        choice3:"3. slice()",
        choice4:"4. split()",
        answer:3      
    },
    {
        question:"Which tag is used for creating a drop-down selection list? ",
        choice1:"1.<select>",
        choice2:"2.<option>",
        choice3:"3.<dropdown>",
        choice4:"4.<list>",
        answer:3      
    }

];
//Initialize variables and 
function startQuiz(){
    
        questionCounterEl =0;
        quizScoreEl=5;
        currentQuestion={};
        timeLeft=50;
        //timer function

        // Call playing the game 
        playQuiz();
       
        return;
   
}
// PLaying quiz 
function playQuiz(){
        // get the question set to be displayed 
        getQuestion();
        return;

}
// Display if answer is correct or wrong 
function displayMessage(str){
        alert(str);
        return;
}
//Feteches the question from the array and displays it along with choices
function getQuestion(){
       
        // If the quiz is done or timer runs out 
        if((questionIndex>=_MAX_QUESTIONS)||(timeLeft <=0))
        {
            // go to the page to display score 
           return window.location.assign ("./highscore.html");
            
        }
        // get the current object fron the array 
        currentQuestion =questionBankArr[questionIndex];
        questionEl.innerText=currentQuestion.question;
        //select each choice from array and add to the corresponding button
        choiceEl.forEach(choiceItem =>
        {
            var num = choiceItem.dataset["choicenum"];
            choiceItem.innerText=currentQuestion["choice"+num];
        });

        return;
};
//When each button is clicked
choiceEl.forEach(choiceItem =>{
    choiceItem.addEventListener("click",checkandLoad=>
    {
        //console.log(checkandLoad.target);
        // Geth button  details that was clicked 
        var selectedButton =checkandLoad.target;
        // get the corresponding  choice chosen 
        var selectedChoice= selectedButton.dataset["choicenum"];
        console.log(selectedChoice);
        console.log(selectedButton.innerText);
        console.log(questionBankArr[questionIndex].answer);
        //Compare if the answer choices are same 
        if (selectedChoice == questionBankArr[questionIndex].answer)
        {  displayMessage("Correct!");
        }    
        else {
            displayMessage("Wrong!");
            timeLeft-=10;
        }
        // increment the index 
        questionIndex++;   
        //Gwt the next question in the Array 
        getQuestion();
});
});
// timer function
var downloadTimer = setInterval(function(){
    if(timeLeft <= 0){
      clearInterval(downloadTimer);
      document.getElementById("countdown").innerHTML = "Finished";
      alert("Time Up !!!");
    } else {
      document.getElementById("countdown").innerHTML ="Time:"+ timeLeft ;
    }
    timeLeft -= 1;
  }, 500);

startQuiz();
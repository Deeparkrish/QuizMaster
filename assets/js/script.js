//Start Button element 
startButtonEl = document.getElementById("start-btn");
// header container 
startContainerEl =document.getElementById("start-container");
//quiz container 
quizcontainerEl =document.getElementById("quiz-container");
//create a question element 
const questionEl = document.getElementById("question");
//Create an array of choices element  for four button choices 
const choiceEl =Array.from(document.getElementsByClassName("option"));

//Score Element 
var scoreEl = document.getElementById("countdown");
// varaible declaration 
var questionIndex =0;  // Starting quiz array index     
var currentQuestion ={};    //  array to select the cuurent question displayed
var timeLeft =75; //timer initia; va;ue

const _MAX_QUESTIONS=5; //Maximum number of questions 

// Question Bank array of objects  - Question,choices and answer
const questionBankArr =[
    {
        question:"Q1. What function returns a random number between 0 (inclusive),  and 1?",
        choice1:"1. Math.ceil",
        choice2:"2. Math.random",
        choice3:"3. Math.round",
        choice4:"4. Math.floor",
        answer: 2
    },
    {
        question:"Q2.What does DOM stand for?",
        choice1:"1. Document Object Module",
        choice2:"2. Dynamic Object model",
        choice3:"3. Document Object model",
        choice4:"4. Document Object Module",
        answer: 3

    },
    {
        question:"Q3.How do you select all p elements inside a div element?",
        choice1:"1. div p",
        choice2:"2. div{p}",
        choice3:"3. div.p",
        choice4:"4. div(p)",
        answer:1
    
    },
    {
        question:"Q4.Which function of Array object extracts a section of an array and returns a new array?",
        choice1:"1. shift()",
        choice2:"2. reverse()",
        choice3:"3. slice()",
        choice4:"4. split()",
        answer:3      
    },
    {
        question:"Q5.Which tag is used for creating a drop-down selection list? ",
        choice1:"1.<select>",
        choice2:"2.<option>",
        choice3:"3.<dropdown>",
        choice4:"4.<list>",
        answer:3      
    }

];
var countDownTimer;
startButtonEl.addEventListener("click", startQuiz);

//Initialize 
function startQuiz(){
        
        questionIndex=0;
        questionCounterEl =0;
        quizScoreEl=5;
        currentQuestion={};
        timeLeft=75;
        //timer function

        //localStorage.clear();
        //hide the current diplay 
        startContainerEl.classList.add("hide");
        // Call playing the game 
        quizcontainerEl.classList.remove("hide");
        countDownTimer = setInterval(function(){
    
            if(timeLeft === 0){
              clearInterval(countDownTimer);
              document.getElementById("countdown").innerHTML = "Finished";
              
            } else {
              document.getElementById("countdown").innerHTML ="Time:"+ timeLeft ;  
            }
            timeLeft --;
             return;   
            
          },1000);
        getQuestion();
       
        return;
}

// Display if answer is correct or wrong 
function displayMessage(str){
        
        if(str === "Incorrect!")
        document.getElementById("message").style.color="red" ;
        else 
        document.getElementById("message").style.color="green" ;

        document.getElementById("message").innerHTML =str ;            
        return;
}
//Fetches the question from the array and displays it along with choices
function getQuestion(){
       
        console.log(questionIndex); 
        // If the quiz is done or timer runs out 
        if((questionIndex >= _MAX_QUESTIONS)||(timeLeft <=0))
        {
            
            //timeLeft.textContent ="Time :" +timeLeft;
           
            scoreEl.textContent ="Time :" +timeLeft;
            JSON.stringify(localStorage.setItem("score" , timeLeft));
            //clear the timer 
            clearInterval(countDownTimer);
            //set timeout ???
            //hide the quiz content 
            quizcontainerEl.classList.add("hide");
            //show the score content 
            document.getElementById("score-container").classList.remove("hide");
            //  display score 
            return DisplayScore();
        }
       
        // get the current object fron the array 
        currentQuestion =questionBankArr[questionIndex];
        console.log(questionIndex);
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
    choiceItem.addEventListener("click",e =>
    {      
        // Get details of the button  clicked 
        var selectedButton =e.target;
        // get the corresponding  choice chosen 
        var selectedChoice= selectedButton.dataset["choicenum"];
        //Compare if the answer choices are same 
        if (selectedChoice == questionBankArr[questionIndex].answer)
        {  displayMessage("Correct!");
        }    
        else {
            displayMessage("Incorrect!");
            //Lower the timer by 10
            timeLeft-=10;
            if(timeLeft <0) timeLeft =0;
        }
        // increment the index 
        questionIndex++;   
        
        //Get the next question in the Array 
        getQuestion();
    });
});

// timer function
// function CountdownTimer(){
// var countDownTimer = setInterval(function(){
    
//     if(timeLeft === 0){
//       clearInterval(countDownTimer);
//       document.getElementById("countdown").innerHTML = "Finished";
      
//     } else {
//       document.getElementById("countdown").innerHTML ="Time:"+ timeLeft ;  
//     }
//     timeLeft --;
//      return;   
    
//   },1000);
//  };
/* Score.js */

var nameEl; 
function DisplayScore(){
    displayscoreEl=document.getElementById("final-score");
    displayscoreEl.innerHTML="Your final score is :" +timeLeft;



};
var saveScoreButtonEl =  document.getElementById("show-score");
saveScoreButtonEl.addEventListener("click",function(event) {
     event.preventDefault();
        nameEl = document.getElementById("myText").value;
        console.log(nameEl);


        //Save score and name details in Local storage 

         window.location.href="highscore.html";

}) ;

   
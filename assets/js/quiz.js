const questionEl = document.getElementById("question");
const choiceEl =Array.from(document.getElementsByClassName("option"));
console.log(choiceEl);
// const c1 = document.getElementById("choice1");
// const c2 = document.getElementById("choice2");
// const c3 =document.getElementById("choice3");
// const c4=document.getElementById("choice4");

var quizScoreEl =0;
var questionCounterEl =0; 
var currentQuestion ={};
var acceptResponse =false;

const questionBankArr =[
    {
        question:" What function returns a random number between 0 (inclusive),  and 1?",
        choice1:"Math.ceil",
        choice2:"Math.random",
        choice3:"Math.round",
        choice4:"Math.floor",
        answer: 2
    },
    {
        question:"What does DOM stand for?",
        choice1:"Document Operation Module",
        choice2:"Dynamic Object model",
        choice3:"Document Object model",
        choice4:"Document Object Module",
        answer: 3

    },
    {
        question:" How do you select all p elements inside a div element?",
        choice1:"div p",
        choice2:"div{p}",
        choice3:"div.p",
        choice4:"div(p)",
        answer:1
    
    },
    {
        question:"Which function of Array object extracts a section of an array and returns a new array?",
        choice1:"shift()",
        choice2:"reverse()",
        choice3:"slice()",
        choice4:"split()",
        answer:3      
    },
    {
        question:"Which tag is used for creating a drop-down selection list? ",
        choice1:"<select>",
        choice2:"<option>",
        choice3:"<dropdown>",
        choice4:"<list>",
        answer:3      
    }

];

function startQuiz(){
    questionCounterEl =0;
    quizScoreEl=0;
    playQuiz();
}
function playQuiz(){
    getQuestion();
}
var i=0;
function getQuestion(){
       
       questionCounterEl++;
       currentQuestion =questionBankArr[i];
       questionEl.innerText=currentQuestion.question;
       choiceEl.forEach(choice);
       

       function choice( ){
       var num = choiceEl.dataset["choiceNo"];
        choiceEl.innerText=currentQuestion["choice"+num];
       }
};

startQuiz();
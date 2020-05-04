const num1=document.querySelector(".option1");
const num2=document.querySelector(".option2");
const num3=document.querySelector(".option3");
const options =document.querySelector(".options").children;
const answerTrackers=document.querySelector(".answers-tracker"); 
const questionNumberSpan=document.querySelector(".question-num-value");
const totalQuestionSpan=document.querySelector(".total-question");
const question=document.querySelector(".question");
const correctAnswer=document.querySelector(".correct-answer");
const totalQuestion2=document.querySelector(".total-question2");
let questionIndex=0;
let index=0;
let myArray =[];
let myArr = [];
const spanElement = document.querySelector(".span-element");
let score=0;
let darkMode = document.querySelector(".dark-mode");
let quizContainer = document.querySelector(".quiz-container");


// array of questions
const questions = [
    {
        unit:'From May 2003 to October 2004, Arsenal went unbeaten in the Premier League. Across how many games were they unbeaten?',
        options:[ '43', '49','59'
        ],
        answer:1
    },
    {
        unit:'How many goals did Thierry Henry score in his career at Arsenal?',
        options:['226','347','187'
        ],
        answer:0
    },
    {
        unit:'Arsenals famous trademark chant "1-0 to the Arsenal", was sung to the tune of a song by which group?',
        options:['fun','rolling stone','village people'
        ],
        answer:2
    },
    {
        unit:'Which player scored the first Premier League goal for Arsenal at the new Emirates Stadium?',
        options:['Henry','Pires','Gilberto'
        ],
        answer:2
    },
    {
        unit:'When was Arsenal Football Club founded?',
        options:['1887','1886','1888',
        ],
        answer:1
    }

    
]
totalQuestionSpan.innerHTML=questions.length;
// function to load question and options
function load(){
      questionNumberSpan.innerHTML=index+1
      question.innerHTML=questions[questionIndex].unit;
      num1.innerHTML=questions[questionIndex].options[0];
      num2.innerHTML=questions[questionIndex].options[1];
      num3.innerHTML=questions[questionIndex].options[2];
      index++
}
// check if the question clicked is correct
function check(element){
    if (element.id==questions[questionIndex].answer){
        element.classList.add("correct");
        updateAnswerTracker("correct");
        score++;    
    }
    else{
        element.classList.add("wrong");
        updateAnswerTracker("wrong")
        
    }
    disabledOptions()
}

// disabled the ability click other options
function disabledOptions(){
    for(let i=0; i<options.length; i++) {
        options[i].classList.add("disabled");
        if(options[i].id==questions[questionIndex].answer){
            options[i].classList.add("correct");
        }
    }
}
function enableOptions(){
    for(let i=0; i<options.length; i++) {
        options[i].classList.remove("disabled", "correct", "wrong");
    }
}
// validate the click option
function validate(){
    if(!options[0].classList.contains("disabled")){
        alert("oga abeg choose one option")
    }
    else{
        randomQuestion();
        enableOptions();
    }
}
// load next question
function next(){
    validate();
}
// loading radom questions and disabling duplicate
function randomQuestion(){
    let randomNumber=Math.floor(Math.random()*questions.length);
    let hidDuplicate=0;
    if(index==questions.length){
          quizOver();
    }
    else{
        if(myArray.length>0){
            for (let i=0; i<myArray.length; i++){
              if(myArray[i]==randomNumber){
                  hidDuplicate=1;
                  break;
                  
              }
            }
            if(hidDuplicate==1){
                randomQuestion();
            }
            else{
                questionIndex=randomNumber;
                load(); 
                myArr.push(questionIndex)
            }
        }
        if(myArray.length==0){
        questionIndex=randomNumber;
        load();
        myArr.push(questionIndex)
         }
         
        myArray.push(randomNumber);
        }
}
// enabling answer tracker
function answerTracker(){
  for(let i=0; i<questions.length; i++ ){
      const div=document.createElement("div")
      answerTrackers.appendChild(div);
  }
}

function updateAnswerTracker(classOne){
    answerTrackers.children[index-1].classList.add(classOne);
}
// quiz over options
function quizOver(){
     document.querySelector(".quiz-over").classList.add("show");
     correctAnswer.innerHTML=score;
     totalQuestion2.innerHTML=questions.length;
     
}

    function tryAgain(){
        window.location.reload();
}
// dark mode enable
darkMode.addEventListener('click', ()=>{
    quizContainer.classList.toggle('dark');
})

window.onload=function(){
    randomQuestion();
    answerTracker();
}




























// const startButton = document.getElementById('start-btn')
// startButton.addEventListener('click', startGame)

// let shuffledQuestion, currentQuestion

// const queElement = document.getElementById('question-container')

// let questionElement = document.getElementById('question')
// let answerElement=document.getElementById('answer-button')

// function startGame(){
//      startButton.classList.add('hide') 
//      shuffledQuestion=myArr.sort(() => Math.random()- .5) 
//      currentQuestion=0  
//      queElement.classList.remove('hide')
//      nextQuestion()
     
// }
// startGame();
// function setNextQuestion(){
//     showQuestion(shuffledQuestion[currentQuestion])
// } 
// function showQuestion(question) {
//     questionElement.innerText = question.question
// }
   
// function selectAnswer()



// const myArr =[
//     {
//         question:'what is 2 + 2',
//         answers:[
//             {text: '4', correct:true},
//             {text: '2', correct false}
//         ]
//     }
//     console.log(myArr)
// ]


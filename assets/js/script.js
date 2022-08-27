const questionsList = [
    {
        question: 'What does HTML stand for?',
        a: 'Hypertext Machine language.',
        b: 'Hypertext and links markup language.',
        c: 'Hypertext Markup Language',
        d: 'Hightext machine language',
        correct: 'c'
    },
    {
        question: 'Which of the following HTML Elements is used for making any text bold?',
        a: '<p>',
        b: '<i>',
        c: '<li>',
        d: '<b>',
        correct: 'd'

    },
    {
        question: 'Which of the following attributes is used to add link to any element?',
        a: 'link',
        b: 'ref',
        c: 'href',
        d: 'newref',
        correct: 'c'

    },
    {
        question: 'Which of the following property is used to control the position of an image in the background?',
        a: 'background-color',
        b: 'background-image',
        c: 'background-repeat',
        d: 'background-position',
        correct: 'd'
    },
    {
        question: 'Which of the following property is used as shorthand to specify a number of other font properties?',
        a: 'font-size',
        b: 'font',
        c: 'font-variant',
        d: 'font-weight',
        correct: 'b'

    },
    {
        question: 'Which of the following property is used to set the width of an image border?',
        a: 'border',
        b: 'height',
        c: 'width',
        d: '-moz-opacity',
        correct: 'a'
    },
    {
        question: 'Inside which HTML element do we put the JavaScript?',
        a: '<javascript>',
        b: '<js>',
        c: '<script>',
        d: '<scripting>',
        correct: 'c'

    },
    {
        question: 'JavaScript is a ___ -side programming language',
        a: 'Client',
        b: 'Server',
        c: 'Both',
        d: 'None',
        correct: 'c'

    },
    {
        question: 'Which of the following will write the message “Hello DataFlair!” in an alert box?',
        a: 'alertBox(“Hello DataFlair!”);',
        b: 'alert(Hello DataFlair!);',
        c: 'msgAlert(“Hello DataFlair!”);',
        d: 'alert(“Hello DataFlair!”);',
        correct: 'd'
    },
    {
        question: 'How do you find the minimum of x and y using JavaScript?',
        a: 'min(x,y);',
        b: 'Math.min(x,y)',
        c: 'Math.min(xy)',
        d: 'min(xy);',
        correct: 'b'
    }
]

// Starts the game
const startbtn = document.getElementById('start');
startbtn.addEventListener('click', startGame);

//Question and Choice container
const questionAndChoices = document.getElementById('quesAns');

// Details related to questions and answers
const questionEl = document.getElementById('question');
const aText = document.getElementById('aText');
const bText = document.getElementById('bText');
const cText = document.getElementById('cText');
const dText = document.getElementById('dText');

// Time element
var timerCount = document.getElementById('timer');


// Result page content
const gameScoreResult = document.getElementById('gameScoreResult')
const scoreSection = document.getElementById("quizScore");

//Name of radio buttons for choices
const answerChoice = document.getElementsByName('answer');

//Title element
const introContainer = document.getElementById('quesTitleContainer');

// Submit button event
const submitbtn = document.getElementById('submit');
submitbtn.addEventListener('click', submitBtn);

const saveSection = document.getElementById('saveSection');

let currentQuestionIndex = 0;
let score = 0;

function showAndHideIntroContainer() {
    introContainer.classList.add('hide');
    scoreSection.classList.add('hide');
    gameScoreResult.classList.add('hide');
    questionAndChoices.classList.remove('hide');
    submitbtn.classList.remove('hide');
}

function startGame() {
    showAndHideIntroContainer();
    getQuestionAndChoices();
    setTime();
}

function getQuestionAndChoices() {
    const currentQuestion = questionsList[currentQuestionIndex];
    questionEl.innerText = currentQuestion.question;
    aText.innerText = currentQuestion.a;
    bText.innerText = currentQuestion.b;
    cText.innerText = currentQuestion.c;
    dText.innerText = currentQuestion.d;

}

var correctAnswer = questionsList[currentQuestionIndex].correct;

var answer = 0;
function getAnswer() {  
    
    answerChoice.forEach(function(element){
        if(element.checked){
            answer = element.id;                    
        }
    });
    return answer;
}

function scoreIncrement() {
    getAnswer();
    if (answer == correctAnswer) {
        score++;
    }

}
function submitBtn() {
    scoreIncrement()
    currentQuestionIndex++;
    clearPreviousSelectedAnswer();
    resultPage();

}

function clearPreviousSelectedAnswer() {
    answerChoice.forEach(function (element) {
        element.checked = false;
    }
    );
}

function resultPage() {

    if (currentQuestionIndex < questionsList.length) {
        startGame();
    }
    else {
        scoreSection.classList.remove('hide');
        scoreSection.innerHTML = `<h2>Your Result: ${score}/${questionsList.length}</h2>`;
    }
}


var secondsLeft = 60;

function setTime() {
    scoreSection.classList.remove('hide');
    gameScoreResult.classList.remove('hide');

    var intervalTime = setInterval(function () {
        secondsLeft--;
        timerCount.textContent = secondsLeft + " : seconds left";

        if (secondsLeft == 0) {
            clearInterval(intervalTime);
        }
    }, 1000)

    scorePage();
}

function displayScore(){
    if (currentQuestionIndex > questionsList.length){
        scorePage();
    }

}

var stdName = document.getElementById('studentName');
var savebtn = document.getElementById('save');


function scorePage() {
         
        var enterUserName = localStorage.getItem('userNameinput');
        stdName.textContent = userNameinput;

        savebtn.addEventListener("click", function (event) {
            event.preventDefault();
            
        var user = document.querySelector('#userName').value;

        if(user === ""){
            displayMessage("error", "Email cannot be blank");
        }
        else{
            displayMessage("success", "Registered successfully");
        
        localStorage.setItem('user',user);
        scorePage();
        }

        })
}



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

const quiz = document.getElementsByClassName('quizScore');
const answerChoice = document.querySelectorAll(".answer");
const startbtn = document.getElementById('start');
startbtn.addEventListener('click', startGame);

const questionAndChoices = document.getElementById('quesAns');
const introContainer = document.getElementById('quesTitleContainer');
const submitbtn = document.getElementById('submit');
submitbtn.addEventListener('click', submitQuiz);


const questionEl = document.getElementById('question');
const aText = document.getElementById('aText');
const bText = document.getElementById('bText');
const cText = document.getElementById('cText');
const dText = document.getElementById('dText');


let currentQuestionIndex = 0;
let score = 0;


function introHide() {
    introContainer.classList.add('hide');
    questionAndChoices.classList.remove('hide');
    submitbtn.classList.remove('hide');
}

function startGame() {
    introHide();
    uniqueAnswer();
    const currentQuestion = questionsList[currentQuestionIndex];
    questionEl.innerText = currentQuestion.question;
    aText.innerText = currentQuestion.a;
    bText.innerText = currentQuestion.b;
    cText.innerText = currentQuestion.c;
    dText.innerText = currentQuestion.d;
    setTime();

}
function getAnswer() {
    var answer1 ;

    answerChoice.forEach((answerSelected) => {
        if (answerSelected.checked) {
            answer1 = answerSelected.id;
        }
    });

    return answer1;
}

function uniqueAnswer() {
    answerChoice.forEach((answerSelected) => {
        answerSelected.checked = false;
    }
    );
}

console.log(questionsList[currentQuestionIndex].correct);

function submitQuiz(){

    var answer = getAnswer();
    if (answer) {
        if (answer === questionsList[currentQuestionIndex].correct) {
            score++;
        }
        currentQuestionIndex++;
    }
    resultPage();
   
}

function resultPage(){
    getAnswer();
        if (currentQuestionIndex < questionsList.length) {
            startGame();
        }
        else {
            quiz.innerHTML = `<h2>Your Result: ${score}/${questionsList.length}</h2>
            <button onclick="location.reload()">Try Again</button>`;
        }
    };

function setTime(){
    var timeLeft = 60;
    var counterInterval = setInterval(function(){
        document.querySelector("#timer").innerHTML = timeLeft;
        timeLeft--;
        
        if(timeLeft === 0)
        {
            clearInterval(counterInterval);
            document.querySelector("#timer").innerHTML = "Done, Your time is up";
        }
    }, 1000)   
}
const questionsList = [
    {
        Question: 'What does HTML stand for?',
        Answer: [
            { text: 'Hypertext Machine language.', correct: false },
            { text: 'Hypertext and links markup language.', correct: false },
            { text: 'Hypertext Markup Language', correct: true },
            { text: 'Hightext machine language', correct: false }
        ]
    },
    {
        Question: 'Which of the following HTML Elements is used for making any text bold?',
        Answer: [
            { text: '<p>', correct: false },
            { text: '<i>', correct: false },
            { text: '<li>', correct: false },
            { text: '<b>', correct: true }
        ]
    },
    {
        Question: 'Which of the following attributes is used to add link to any element?',
        Answer: [
            { text: 'link', correct: false },
            { text: 'ref', correct: false },
            { text: 'href', correct: true },
            { text: 'newref', correct: false }
        ]
    },
    {
        Question: 'Which of the following property is used to control the position of an image in the background?',
        Answer: [
            { text: 'background-color', correct: false },
            { text: 'background-image', correct: false },
            { text: 'background-repeat', correct: false },
            { text: 'background-position', correct: true }
        ]
    },
    {
        Question: 'Which of the following property is used as shorthand to specify a number of other font properties?',
        Answer: [
            { text: 'font-size', correct: false },
            { text: 'font', correct: true },
            { text: 'font-variant', correct: false },
            { text: 'font-weight', correct: false }
        ]
    },
    {
        Question: 'Which of the following property is used to set the width of an image border?',
        Answer: [
            { text: 'border', correct: true },
            { text: 'height', correct: false },
            { text: 'width', correct: false },
            { text: '-moz-opacity', correct: false }
        ]
    },
    {
        Question: 'If you type "3 > 2 > 1 === false" in the console window, what result will you get?',
        Answer: [
            { text: 'True', correct: true },
            { text: 'False', correct: false }
        ]
    },
    {
        Question: 'JavaScript is a ___ -side programming language',
        Answer: [
            { text: 'Client', correct: false },
            { text: 'Server', correct: false },
            { text: 'Both', correct: true },
            { text: 'None', correct: false }
        ]
    },
    {
        Question: 'Which of the following will write the message “Hello DataFlair!” in an alert box?',
        Answer: [
            { text: 'alertBox(“Hello DataFlair!”);', correct: false },
            { text: 'alert(Hello DataFlair!);', correct: false },
            { text: 'msgAlert(“Hello DataFlair!”);', correct: false },
            { text: 'alert(“Hello DataFlair!”);', correct: true }
        ]
    },
    {
        Question: 'How do you find the minimum of x and y using JavaScript?',
        Answer: [
            { text: 'min(x,y);', correct: false },
            { text: 'Math.min(x,y)', correct: true },
            { text: 'Math.min(xy)', correct: false },
            { text: 'min(xy);', correct: false }
        ]
    }
]

const startbtn = document.getElementById('start');
startbtn.addEventListener('click', startGame);
const nextbtn = document.getElementById('next');
nextbtn.addEventListener('click', nextQues);
const prebtn = document.getElementById('previous');
prebtn.addEventListener('click', previousQues);
const instruction = document.getElementById('startIntro');
const questionEl = document.getElementById('question');
const choiceEl = document.getElementById('choices');
const quesAnsContainer = document.getElementById('quesAns');
const startAndIntroContainer = document.getElementById('quesTitleContainer');
var currentQuestion = questionsList[0];
const firstChoice = document.querySelector('.btn1')
const secondChoice = document.querySelector('.btn2')
const thirdChoice = document.querySelector('.btn3')
const forthChoice = document.querySelector('.btn4')
var currentQuestionIndex = 0;


function startGame() {
    startAndIntroContainer.classList.add('hide');
    quesAnsContainer.classList.remove('hide');
    getQuestion();
    getChoices();
    prebtn.disabled == true;
    

}
function getQuestion() {

   questionEl.innerText = questionsList[currentQuestionIndex].Question;

    
}

function getChoices() {
    firstChoice.innerText = questionsList[currentQuestionIndex].Answer[0].text;
    secondChoice.innerText = questionsList[currentQuestionIndex].Answer[1].text;
    thirdChoice.innerText = questionsList[currentQuestionIndex].Answer[2].text;
    forthChoice.innerText = questionsList[currentQuestionIndex].Answer[3].text;


}

function nextQues() {
    
        currentQuestionIndex++;
        getQuestion();
        getChoices();
}

function previousQues() {
    currentQuestionIndex--;
    getQuestion();
    getChoices();
}

function submitQuiz() {

}



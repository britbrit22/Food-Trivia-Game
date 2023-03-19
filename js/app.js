const startButton = document.getElementById('startButton')
const nextButton = document.getElementById('nextButton')
const questionContainer = document.querySelector('.question-container')
const answerContainer = document.getElementById('answer-container')



let shuffledQuestions, currentQuestionIndex


startButton.addEventListener('click', startTrivia)
nextButton.addEventListener('click', () => {
currentQuestionIndex++
setNextQuestion()
})

function startTrivia() {
   console.log('Started')
   startButton.classList.add('hide')
   shuffledQuestions = questions.sort(() => Math.random() -10)
   currentQuestionIndex = 0
   
   setNextQuestion()
}

function setNextQuestion() {
   reset()
   showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
   questionContainer.innerText = question.question
   question.answer.forEach(answer => {
   const button = document.createElement('button')
   button.innerText = answer.text
   button.classList.add('button')
   if(answer.correct) {
      button.dataset.correct = answer.correct
   }
      button.addEventListener('click', selectAnswer)
      answerContainer.append(button)
   })
}

function reset() {
while (answerContainer.firstChild) {
   answerContainer.removeChild(answerContainer.firstChild)
}
}




function selectAnswer() {
   const selectedAnswer = this.getAttribute("data-correct");
   if (selectedAnswer === "true") {
     this.classList.add("correct");
   } else {
     this.classList.add("incorrect");
   }
 }
 
 const answerButtons = document.querySelectorAll(".answer");
 for (let i = 0; i < answerButtons.length; i++) {
   answerButtons[i].addEventListener("click", selectAnswer);
 }
 

const questions =  [
    {
        question: "Which fast-food restaurant has the slogan, Eat fresh?",
        answer: [
        { id:1, text: "Taco Bell", correct: false },
        { id:2, text: "Subway", correct: true },
        { id:3, text: "Wendys", correct: false },
        { id:4, text: "Arbys", correct: false },
        ],
        correctAnswerIndex:1
     },
     {
        question: "What is the most common pizza topping?",
        answer: [
        { id:1, text: "Pepperoni", correct: true },
        { id:2, text: "Ham", correct: false },
        { id:3, text: "Sausage", correct: false },
        { id:4, text: "Bacon", correct: false },
        ],
     },  
     {
        question: "How many flavors of ice cream does Baskin-Robbins have?",
        answer: [
        { id:1, text: "22", correct: false },
        { id:2, text: "60", correct: false },
        { id:3, text: "40", correct: false },
        { id:4, text: "31", correct: true },
        ],
        correctAnswerIndex:3
     },   
     {  
        question: "Coca-Cola was first sold in which state?",
        answer: [
        { id:1, text: "New York", correct: false },
        { id:2, text: "Arizona", correct: false },
        { id:3, text: "Georgia", correct: true },
        { id:4, text: "Texas", correct: false },
        ], 
        correctAnswerIndex:2
     },
     {
        question: "What is the oldest soft drink in America?",
        answer: [
        { id:1, text: "Coca Cola", correct: false },
        { id:2, text: "Dr. Pepper", correct: true },
        { id:3, text: "Sprite", correct: false },
        { id:4, text: "Pepsi", correct: false },
        ],
        correctAnswerIndex:1
     }
]





   

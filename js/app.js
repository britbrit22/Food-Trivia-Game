const startButton = document.getElementById('startButton')
const nextButton = document.getElementById('nextButton')
const questionContainer = document.querySelector('.question-container')
const answerContainer = document.getElementById('answer-container')
// const question = document.querySelector('.question')
// const answers = document.getElementById("answer")

// const questionElement = document.getElementById('question');



let shuffledQuestions, currentQuestionIndex


startButton.addEventListener('click', startTrivia)
nextButton.addEventListener('click', () => {
currentQuestionIndex++
setNextQuestion(nextButton)
})

function startTrivia() {
   console.log('Started')
   startButton.classList.add('hide')
   shuffledQuestions = questions.sort(() => Math.random())
   currentQuestionIndex = 0
   // question.classList.remove('hide')
   setNextQuestion()
}

function setNextQuestion() {
   reset()
   showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
   showQuestion.innerText = question.question
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
while(answerContainer.firstChild) {
   answerContainer.removeChild(answerContainer.firstChild)
}
}


 function selectAnswer(event) {
   const selectedButton = event.target
   const correct = selectedButton.dataset.correct
   // setStatusClass(document.body, correct)
   // Array.from(answerContainer.child).forEach(button => {
   // setStatusClass(button, button.dataset.correct)
   // })
   if (shuffledQuestions.length > currentQuestionIndex + 1) {
   nextButton.classList.remove('hide')
   } else {
     startButton.innerText = 'Restart'
     startButton.classList.remove('hide')
   }
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
        
     },   
     {  
        question: "Coca-Cola was first sold in which state?",
        answer: [
        { id:1, text: "New York", correct: false },
        { id:2, text: "Arizona", correct: false },
        { id:3, text: "Georgia", correct: true },
        { id:4, text: "Texas", correct: false },
        ], 
     },
     {
        question: "What is the oldest soft drink in America?",
        answer: [
        { id:1, text: "Coca Cola", correct: false },
        { id:2, text: "Dr. Pepper", correct: true },
        { id:3, text: "Sprite", correct: false },
        { id:4, text: "Pepsi", correct: false },
        ],
     }
]
// const currentQuestion = questions[currentQuestionIndex];
// question.innerText = currentQuestion.question;

questions.innerHTML = questions.question
// questionContainer.innerHTML = question.question
// questions.innerHTML = questions[1].question
// questions.innerHTML = questions[2].question
// questions.innerHTML = questions[3].question
// questions.innerHTML = questions[4].question
// questions.innerHTML = questions[5].question


// answer1.innerHTML = answer1
// answer2.innerHTML = answer2
// answer3.innerHTML = answer3
// answer4.innerHTML = answer4


   

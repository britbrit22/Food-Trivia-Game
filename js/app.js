//User clicks on the play button
// -What would it take for the users to click on the button.
const button = document.createElement('button')

      button.innerText = 'Press Start'

      button.id = 'BeginButton'
      document.body.append(button)
    
      button.addEventListener('click', click)


     function click() {
        console.log('Begin Game')
      

      button.removeEventListener('click', click)
    }


//Remove the button and display the questions and answers.
// -How would I remove the button then activate the questions and answers.

//const question = document.querySelector('question');
//const answers = document.querySelectorAll('answers');

const questions =  [
    {
        question: "Which fast-food restaurant has the slogan, Eat fresh?",
        answer1: "Taco Bell",
        answer2: "Subway",
        answer3: "Wendys",
        answer4: "Arbys",
        correctAnswer: "Subway",
     },
     {

        question: "What is the most common pizza topping?",
        answer: "Pepperoni",
        answer: "Ham",
        answer: "Sausage",
        answer: "Bacon",
        correctAnswer: "Pepperoni",
     },
     {
        question: "How many flavors of ice cream does Baskin-Robbins have?",
        answer1: "22",
        answer2: "60",
        answer3: "40",
        answer4: "31",
        correctAnswer: "31",
     },   
     { 
        question: "Coca-Cola was first sold in which state?",
        answer1: "New York",
        answer2: "Arizona",
        answer3: "Georgia",
        answer4: "Texas",
        correctAnswer: "Georgia",
     },
     {
        question: "What is the oldest soft drink in America?",
        answer1: "Coca Cola",
        answer2: "Pepsi",
        answer3: "Sprite",
        answer4: "Dr. Pepper",
        correctAnswer: "Dr. Pepper",
     }
]

const start = true;

function generate(Class) {

    const answer = document.querySelectorAll("answer")
}

const question = document.querySelector("question");

question.innerText = 'question[Class]';

const answer1 = document.getElementByClass('answer1');
const answer2 = document.getElementByClass('answer2');
const answer3 = document.getElementByClass('answer3');
const answer4 = document.getElementByClass('answer4');

answer1.innerText = questions[Class].answer1;
answer2.innerText = questions[Class].answer2;
answer3.innerText = questions[Class].answer3;
answer4.innerText = questions[Class].answer4;



    





    


//User selects an answer.
// -What would it take for the users to click an answer.



//Display to the user if the answer is correct or incorrect.
//-How would I make the answer correct or incorrect.


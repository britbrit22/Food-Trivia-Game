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
        answer1: "Pepperoni",
        answer2: "Ham",
        answer3: "Sausage",
        answer4: "Bacon",
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
 console.log({start})


const answer = document.querySelectorAll(".answer")

console.log({answer})
      
const question = document.querySelector(".question");

console.log({question})

const next = document.querySelector(".next");
console.log({next})

// const next = document.querySelector(".next")
// console.log({next})



const answer1 = document.querySelector('.answer1');
console.log({answer1})
const answer2 = document.querySelector('.answer2');
console.log({answer2})
const answer3 = document.querySelector('.answer3');
console.log({answer3})
const answer4 = document.querySelector('.answer4');
console.log({answer4})


question.innerText = questions[0].question;//Injecting the question onto the question div.
answer1.innerText = questions[0].answer1;//Injecting the answer1 onto the answer1 div.
answer2.innerText = questions[0].answer2;
answer3.innerText = questions[0].answer3;
answer4.innerText = questions[0].answer4;


function checkAnswer(event) {
   
const choice = event.target.innerText
   console.log(choice)
 if (choice === questions[0].correctAnswer) {
    console.log(choice)

let currentIndex = 0;

 if (currentIndex >= questions.length)  
 {
   console.log('end of questions')
 } else { 
   console.log(questions[currentIndex]);
 }



 


}
}

      //Increase the currentIndex by 1📝



 
   


answer1.addEventListener("click", checkAnswer)   

answer2.addEventListener("click", checkAnswer)
  
answer3.addEventListener("click", checkAnswer)
   
answer4.addEventListener("click", checkAnswer)






   
const selected = "";

answer2.addEventListener("click", () => {
   answer1.style.backgroundColor = "red"
   answer2.style.backgroundColor = "green"
   answer3.style.backgroundColor = "red"
   answer4.style.backgroundColor = "red"
   selected = answer2.value;

})



// const choice = document.querySelector("check");

//  checkAnswer[0].addEventListener("click"); 
//    if(choice == "true") {
//       answer[0].innerText = "True";
//       answer.style.color = "green"; 
//    } else {
//        answer.innerText = "False";
//       answer[0].style.color = "red";
//    }
    





    


//User selects an answer.
// -What would it take for the users to click an answer.



//Display to the user if the answer is correct or incorrect.
//-How would I make the answer correct or incorrect.


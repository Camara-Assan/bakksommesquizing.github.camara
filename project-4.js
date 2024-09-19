
const questions = [
    {
        question: "When I was four years old, my sister was half of my age, when I am 100 years old, how old will my sister be?",
        answers: [
            { text: "She will be 50 years old", correct: false},
            { text: "She will be 100 years old", correct: false},
            { text: "She will be 98 years old", correct: true},
            { text: "None of the above is correct", correct: false},

        ]   

    },
    {
        question: "Ousainou is a foolish business man who bought a goat for $300 and later sold it for $320. He later bought the same goat for $400 and sold it for $300, what will be his actual lost?",
        answers: [
            { text: "He will make a lost of $100", correct: false},
            { text: "He will make a profit of $20", correct: false},
            { text: "He will make a lost of $300", correct: false},
            { text: "He will make a lost of $80", correct: true},
            
        ]
    },
    {
        question:"If Ousman is 30% fater than John and gave him a 25 meters head start in a 100 meters race, will Ousman win the race?",
        answers: [
            { text: "Yes", correct: true},
            { text: "No", correct: false},

        ]   

    },
    {
        question:"If it takes 3 people 3 hours to build a wall, how long will it take 1 person that is 50% faster than the average speed of the 3 people, to build the same wall?",
        answers: [
            { text: "6 hours", correct: true},
            { text: "4 hours and 30 minutes", correct: false},
            { text: "9 hours", correct: false},
            { text: "1 hour", correct: false},

        ]   

    },

    {
        question: "If a group of ten people meet a group of 9 people and each idividaul in both groups have to give a hand shake to everyone on the other group. What will be the total number of hand shakes in their gathering",
        answers: [
            { text: "A total of 19 hand shakes", correct: false},
            { text: "A total of 90 hand shakes", correct: true},
            { text: "A total of 10 hand shekes", correct: false},
            { text: "A total of 9 hand shakes", correct: false},

        ]   

    },
    {
        question: "There are five brothers in a family Ebrima, John, Abdou, Musa and Alagie. Ebrima is older than Abdou but younger than Musa, Alagie is older than Musa and John is older than Ebrima. Which of the following statements is true? ",
        answers: [
            { text: "Ebrima is older than Alagie", correct: false},
            { text: "Ebrima is the oldest and Abdou is the youngest", correct: false},
            { text: "Musa is older than Abdou", correct: false},
            { text: "Alagie is the oldest and Abdou is the youngest", correct: true},
            

        ]   

    },
    {
        question: "A bat and a ball cost $1.10 together. The bat costs $1.00 more than the ball. How much does the ball cost?",
        answers: [
            { text: "$0.10", correct: false},
            { text: "$1", correct: false},
            { text: "$0.05", correct: true},
            { text: "None of the above is correct", correct: false},

        ]   

    },
    {
        question: "If all Bloogs are Bleeps, and all Bleeps are Blups, are all Bloogs Blups?",
        answers: [
            { text: "Yes", correct: true},         
            { text: "No", correct: false},
        

        ]   

    },
    {
        question:"A,B,D,G,K,P,_? Which letter will make sense in the gap?",
        answers: [
            { text: "Q", correct: false},
            { text: "U", correct: false},
            { text: "W", correct: true},
            { text: "None of the above is correct", correct: false},

        ]   

    },
];
const quesElement = document.getElementById("question");
const ansButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-bttn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    quesElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("bttn");
       ansButtons.appendChild(button);
       if(answer.correct){
        button.dataset.correct = answer.correct;
       }
       button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(ansButtons.firstChild){
        ansButtons.removeChild(ansButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBttn = e.target;
    const isCorrect = selectedBttn.dataset.correct === "true";
    if(isCorrect){
        selectedBttn.classList.add("correct");
        score++;
    } else{
        selectedBttn.classList.add("incorrect");
    }
    Array.from(ansButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    quesElement.innerHTML = "You scored " + score + " out of " + "9" + " !";
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

 function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
 };

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz();









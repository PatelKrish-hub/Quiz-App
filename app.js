const realTextEl = document.getElementById("realText");
const optionEl1 = document.getElementById("option1");
const optionEl2 = document.getElementById("option2");
const optionEl3 = document.getElementById("option3");
const optionEl4 = document.getElementById("option4");
const submitBtnEl = document.getElementById("submit");
const nextBtnEl = document.getElementById("next");
const scoreEl = document.getElementById("score");
const optionBox = document.getElementById("options");

let currentQuestionIndex = 0;
let score = 0;
let selectedOption = null;
let answered = false;



let questions = [

    {
        question: "Who is the richest person in the world?",
        options: ["Krish", "Elon", "Mark", "Bill"],
        correct: "Elon"
    },

    {
        question: "Which language runs in browser?",
        options: ["Python", "Java", "JavaScript", "C++"],
        correct: "JavaScript"
    },

    {
        question: "What is the capital of India?",
        options: ["Mumbai", "Delhi", "Kolkata", "Chennai"],
        correct: "Delhi"
    },

    {
        question: "How many days are there in a week?",
        options: ["5", "6", "7", "8"],
        correct: "7"
    },

    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        correct: "Mars"
    },

    {
        question: "Water freezes at what temperature (°C)?",
        options: ["0", "50", "100", "-10"],
        correct: "0"
    },

    {
        question: "What does GST stand for?",
        options: [
            "General Sales Tax",
            "Goods and Services Tax",
            "Global Service Tax",
            "Gross Sales Tax"
        ],
        correct: "Goods and Services Tax"
    },

    {
        question: "Which one is a liability?",
        options: ["Cash", "Building", "Loan", "Stock"],
        correct: "Loan"
    },

    {
        question: "Which language is mainly used for web browsers?",
        options: ["Python", "C++", "JavaScript", "Java"],
        correct: "JavaScript"
    },

    {
        question: "HTML is used for?",
        options: [
            "Styling websites",
            "Structuring web pages",
            "Programming logic",
            "Database"
        ],
        correct: "Structuring web pages"
    },

    {
        question: "What is the Big Bang Theory related to?",
        options: [
            "Origin of Earth",
            "Origin of Life",
            "Origin of Universe",
            "Origin of Humans"
        ],
        correct: "Origin of Universe"
    },

    {
        question: "Who proposed the Theory of Relativity?",
        options: [
            "Isaac Newton",
            "Nikola Tesla",
            "Albert Einstein",
            "Stephen Hawking"
        ],
        correct: "Albert Einstein"
    },

    {
        question: "Which gas is most abundant in Earth’s atmosphere?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        correct: "Nitrogen"
    },

    {
        question: "What is the SI unit of force?",
        options: ["Joule", "Pascal", "Newton", "Watt"],
        correct: "Newton"
    }

];



// UI Update

function showQuestion() {

    let currentQuestion = questions[currentQuestionIndex];
    realTextEl.textContent = currentQuestion.question;

    let currentOption = questions[currentQuestionIndex];
    optionEl1.textContent = currentOption.options[0];
    optionEl2.textContent = currentOption.options[1];
    optionEl3.textContent = currentOption.options[2];
    optionEl4.textContent = currentOption.options[3];

    answered = false;
};

showQuestion();



// Logic + Score
function checkAnswer() {

    if (answered === true) {
        return;
    }

    let currentAnswer = questions[currentQuestionIndex].correct;

    if (selectedOption === currentAnswer) {
        score++
        scoreEl.textContent = score;
        alert("Wahh BC Correct!!");
    } else {
        alert("Abe Chutiyee!!");
    }


    answered = true;
};




nextBtnEl.addEventListener('click', () => {

    currentQuestionIndex++;

    if (currentQuestionIndex >= questions.length) {
        realTextEl.textContent = "Quiz Finished";
        optionBox.innerHTML = "";
        scoreEl.textContent = "Final Score: " + score;
        nextBtnEl.disabled = true;
        submitBtnEl.disabled = true;
        return;
    }

    selectedOption = null;

    showQuestion();
})

submitBtnEl.addEventListener('click', checkAnswer);


optionEl1.addEventListener('click', () => {
    selectedOption = optionEl1.textContent;
    // console.log(selectedOption);

});

optionEl2.addEventListener('click', () => {
    selectedOption = optionEl2.textContent;
    // console.log(selectedOption);

});

optionEl3.addEventListener('click', () => {
    selectedOption = optionEl3.textContent;
    // console.log(selectedOption);

});

optionEl4.addEventListener('click', () => {
    selectedOption = optionEl4.textContent;
    // console.log(selectedOption);

});


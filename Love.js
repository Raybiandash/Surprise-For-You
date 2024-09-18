const questions = [
    "Do you love surprises? 💖",
    "Do you know how special you are? 🌟",
    "Are you ready for a surprise? 😍"
];

let currentQuestionIndex = 0;
const questionElement = document.getElementById('question');
const instructionsElement = document.getElementById('instructions');
const nextBtn = document.getElementById('next-btn');
const loveMessage = document.getElementById('love-message');
const questionBox = document.getElementById('question-box');
const resetBtn = document.getElementById('reset-btn');
const choicesDiv = document.getElementById('choices');
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');

nextBtn.addEventListener('click', startQuiz);
yesBtn.addEventListener('click', showNextQuestion);
noBtn.addEventListener('click', showNextQuestion);
resetBtn.addEventListener('click', resetQuiz);

function startQuiz() {
    nextBtn.classList.add('hidden');
    showNextQuestion();
}

function showNextQuestion() {
    if (currentQuestionIndex < questions.length) {
        questionElement.textContent = questions[currentQuestionIndex];
        instructionsElement.textContent = "";
        choicesDiv.classList.remove('hidden');
        currentQuestionIndex++;
    } else {
        showLoveMessage();
    }
}

function showLoveMessage() {
    questionBox.classList.add('hidden');
    loveMessage.classList.remove('hidden');
    loveMessage.classList.add('fadeIn');
}

function resetQuiz() {
    currentQuestionIndex = 0;
    questionElement.textContent = "Welcome, my love!";
    instructionsElement.textContent = "Let's answer a few questions first 😘";
    nextBtn.textContent = "Start";
    loveMessage.classList.add('hidden');
    questionBox.classList.remove('hidden');
    choicesDiv.classList.add('hidden');
}

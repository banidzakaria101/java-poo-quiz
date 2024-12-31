const quizData = [
    { question: "What is encapsulation in Java?", answers:
         ["Hiding implementation details", "Inheritance", "Polymorphism", "Abstraction"],
          correct: 0 },
    { question: "Which keyword is used to create an object in Java?",
         answers: ["class", "object", "new", "this"],
         correct: 2 },
    { question: "What is inheritance in Java?", answers: ["A way to reuse code", "A way to hide data", "A type of variable", "A function call"], correct: 0 },
    { question: "Which of the following is a pillar of OOP?", answers: ["Compilation", "Encapsulation", "Loops", "Conditions"], correct: 1 },
    { question: "What does the 'this' keyword refer to?", answers: ["Current object", "Parent class", "Child class", "Static methods"], correct: 0 },
    { question: "Which method is called when an object is created?", answers: ["main()", "finalize()", "constructor", "super()"], correct: 2 },
    { question: "What is polymorphism?", answers: ["Many forms of a method", "Code hiding", "Variable declaration", "Memory management"], correct: 0 },
    { question: "Which access modifier makes a class member visible to all?", answers: ["private", "protected", "public", "default"], correct: 2 },
    { question: "What is abstraction in Java?", answers: ["Hiding implementation details", "Using interfaces", "Both", "None"], correct: 2 },
    { question: "Which keyword prevents method overriding?", answers: ["final", "static", "abstract", "volatile"], correct: 0 }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const answersElement = document.getElementById('answers');
const resultElement = document.getElementById('result');
const restartButton = document.getElementById('restart');
const questionCounterElement = document.getElementById('question-counter');
const progressBarElement = document.getElementById('progress-bar');

function updateProgress() {
    questionCounterElement.textContent = `Question ${currentQuestionIndex + 1} of ${quizData.length}`;
    const progressPercentage = ((currentQuestionIndex + 1) / quizData.length) * 100;
    progressBarElement.style.width = `${progressPercentage}%`;
}

function loadQuestion() {
    // Fade out current question and answers
    questionElement.classList.add('fade-out');
    answersElement.classList.add('fade-out');

    // Wait for the fade-out animation to complete
    setTimeout(() => {
        // Update progress bar and question counter
        updateProgress();

        // Load the new question
        const currentQuestion = quizData[currentQuestionIndex];
        questionElement.textContent = currentQuestion.question;

        // Clear and load new answers
        answersElement.innerHTML = '';
        currentQuestion.answers.forEach((answer, index) => {
            const button = document.createElement('button');
            button.textContent = answer;
            button.onclick = () => handleAnswer(index, button);
            answersElement.appendChild(button);
        });

        // Fade in new content
        questionElement.classList.remove('fade-out');
        answersElement.classList.remove('fade-out');
        questionElement.classList.add('fade-in');
        answersElement.classList.add('fade-in');

        // Remove the fade-in class after animation completes
        setTimeout(() => {
            questionElement.classList.remove('fade-in');
            answersElement.classList.remove('fade-in');
        }, 300);
    }, 300); // Match the duration of the fade-out animation
}


function handleAnswer(selectedIndex, selectedButton) {
    const currentQuestion = quizData[currentQuestionIndex];

    const buttons = Array.from(answersElement.children);
    buttons.forEach((button, index) => {
        if (index === currentQuestion.correct) {
            button.classList.add('correct');
        } else if (index === selectedIndex) {
            button.classList.add('wrong');
        }
        button.disabled = true;
    });

    if (selectedIndex === currentQuestion.correct) {
        score++;
    }

    setTimeout(() => {
        currentQuestionIndex++;

        if (currentQuestionIndex < quizData.length) {
            loadQuestion();
        } else {
            showResult();
        }
    }, 1500);
}

function showResult() {
    questionElement.style.display = 'none';
    answersElement.style.display = 'none';

    resultElement.style.display = 'block';
    resultElement.textContent = `You scored ${score} out of ${quizData.length}`;

    restartButton.style.display = 'block';
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;

    questionElement.style.display = 'block';
    answersElement.style.display = 'block';

    resultElement.style.display = 'none';
    restartButton.style.display = 'none';

    progressBarElement.style.width = '0%';
    loadQuestion();
}

restartButton.addEventListener('click', restartQuiz);

loadQuestion();
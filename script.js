const quizData = [
  {
    question: "What is encapsulation in Java?",
    answers: [
      "Hiding implementation details",
      "Inheritance",
      "Polymorphism",
      "Abstraction",
    ],
    correct: 0,
  },
  {
    question: "Which keyword is used to create an object in Java?",
    answers: ["class", "object", "new", "this"],
    correct: 2,
  },
  {
    question: "What is inheritance in Java?",
    answers: [
      "A way to reuse code",
      "A way to hide data",
      "A type of variable",
      "A function call",
    ],
    correct: 0,
  },
  {
    question: "Which of the following is a pillar of OOP?",
    answers: ["Compilation", "Encapsulation", "Loops", "Conditions"],
    correct: 1,
  },
  {
    question: "What does the 'this' keyword refer to?",
    answers: [
      "Current object",
      "Parent class",
      "Child class",
      "Static methods",
    ],
    correct: 0,
  },
  {
    question: "Which method is called when an object is created?",
    answers: ["main()", "finalize()", "constructor", "super()"],
    correct: 2,
  },
  {
    question: "What is polymorphism?",
    answers: [
      "Many forms of a method",
      "Code hiding",
      "Variable declaration",
      "Memory management",
    ],
    correct: 0,
  },
  {
    question: "Which access modifier makes a class member visible to all?",
    answers: ["private", "protected", "public", "default"],
    correct: 2,
  },
  {
    question: "What is abstraction in Java?",
    answers: [
      "Hiding implementation details",
      "Using interfaces",
      "Both",
      "None",
    ],
    correct: 2,
  },
  {
    question: "Which keyword prevents method overriding?",
    answers: ["final", "static", "abstract", "volatile"],
    correct: 0,
  },
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const resultElement = document.getElementById("result");
const restartButton = document.getElementById("restart");

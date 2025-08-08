const questions = [
  {
    question: "What is the capital of India?",
    options: ["London", "Berlin", "Delhi", "Madrid"],
    answer: 2,
  },

  {
    question: "Which language runs in Web Browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: 3,
  },

  {
    question: "What does CSS stands for?",
    options: [
      "Central Style Sheets",
      "Cascading Style Sheets",
      "Cascading Simple Sheets",
      "Cars SUVs Sailboats",
    ],
    answer: 1,
  },

  {
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Jupiter", "Saturn", "Mars"],
    answer: 1,
  },
  {
    question: "Which HTML tag is used to define an internal style sheet?",
    options: ["<script>", "<css>", "<style>", "<link>"],
    answer: 2,
  },
  {
    question: "What is the primary function of JavaScript?",
    options: [
      "To style web pages",
      "To structure web content",
      "To add interactivity and dynamic behavior",
      "To manage databases",
    ],
    answer: 2,
  },
  {
    question: "Which of the following is NOT a JavaScript data type?",
    options: ["String", "Number", "Boolean", "Float"],
    answer: 3,
  },
  {
    question: "What does API stand for?",
    options: [
      "Application Programming Interface",
      "Automated Protocol Integration",
      "Advanced Program Instruction",
      "Another Project Idea",
    ],
    answer: 0,
  },
  {
    question:
      "In CSS, what property is used to change the text color of an element?",
    options: ["font-color", "text-color", "color", "fgcolor"],
    answer: 2,
  },
  {
    question: "Which of these is a way to declare a variable in JavaScript?",
    options: ["variable myVar;", "v myVar;", "let myVar;", "create myVar;"],
    answer: 2,
  },
];

let currentQuestion = 0;
let score = 0;
let timer;
let timeLeft = 12;
let progressTimer;
let quizStarted = false;

const quizContainer = document.getElementById("quizContainer");
const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");
const displayScore = document.getElementById("score");
const progressBar = document.getElementById("progressBar");
const questionCount = document.getElementById("questionCount");

startBtn.addEventListener("click", startQuiz);
nextBtn.addEventListener("click", () => {
  currentQuestion++;
  showQuestion();
});

function startQuiz() {
  quizStarted = true;
  startBtn.classList.add("d-none");
  currentQuestion = 0;
  score = 0;
  displayScore.textContent = `Score 0`;
  showQuestion();
}

function showQuestion() {
  if (currentQuestion < questions.length) {
    const q = questions[currentQuestion];
    quizContainer.innerHTML = `
        <h4 class="mb-4">${q.question}</h4>
        <div id="options">Hello</div>
    `;
    q.options.forEach(function (opt, idx) {
      const btn = document.createElement("button");
      btn.className = "btn btn-option btn-outline-light";
      btn.textContent = opt;
      btn.onclick = () => selectOption(idx, btn);
      document.getElementById("options").appendChild(btn);
    });

    nextBtn.classList.add("d-none");
    questionCount.textContent = `Questions ${currentQuestion + 1} of ${
      questions.length
    }`;
    startTimer();
    updateProgressBar();
  } else {
    showResult();
  }
}

function selectOption(selected, btn) {
  stopTimer();
  const q = questions[currentQuestion];
  const options = document.querySelectorAll(".btn-option");
  options.forEach(function (b, idx) {
    b.disabled = true;
    if (idx === q.answer) b.classList.add("btn-correct");
    if (idx === selected && idx !== q.answer) b.classList.add("btn-wrong");
  });
  if (selected === q.answer) {
    score++;
    displayScore.textContent = `Score ${score}`;
  }
  nextBtn.classList.remove("d-none");
}

function showResult() {
  quizContainer.innerHTML = `
    <div class="text-center">
      <h3 class="mb-3">Quiz Finished!</h3>
      <p class="fs-4">Your Score: <span class="fw-bold">${score} / ${questions.length}</span></p>
      <button class="btn btn-lg btn-success mt-3" onclick="location.reload()">Play Again</button>
    </div>
  `;
  nextBtn.classList.add("d-none");
  questionCount.textContent = "";
  progressBar.style.width = "0%";
}

function resetQuiz() {
  quizContainer.innerHTML = "";
  stopTimer();
  progressBar.style.width = "100%";
}

function startTimer() {
  timeLeft = 12;
  progressBar.style.width = "100%";
  progressBar.classList.remove("bg-danger");
  progressBar.classList.add("bg-warning");
  progressTimer = setInterval(() => {
    timeLeft--;
    let percent = (timeLeft / 12) * 100;
    progressBar.style.width = percent + "%";
    if (timeLeft <= 3) {
      progressBar.classList.remove("bg-warning");
      progressBar.classList.add("bg-danger");
    }
    if (timeLeft <= 0) {
      clearInterval(progressTimer);
      autoLock();
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(progressTimer);
}

function autoLock() {
  const q = questions[currentQuestion];
  const options = document.querySelectorAll(".btn-option");
  options.forEach((b, idx) => {
    b.disabled = true;
    if (idx === q.answer) b.classList.add("btn-correct");
  });
  nextBtn.classList.remove("d-none");
}

function updateProgressBar() {
  let percent = (currentQuestion / questions.length) * 100;
  progressBar.style.width = percent + "%";
}

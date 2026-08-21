const API_URL = "http://localhost:5000";

if (document.getElementById("startForm")) {
  document.getElementById("startForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("playerName").value.trim();
    localStorage.setItem("playerName", name);
    window.location.href = "quiz.html";
  });
}

async function loadQuiz() {
  const quiz = document.getElementById("quiz");
  if (!quiz) return;

  const response = await fetch(`${API_URL}/questions`);
  const questions = await response.json();
  localStorage.setItem("questions", JSON.stringify(questions));

  quiz.innerHTML = questions.map((q, index) => `
    <div class="question">
      <h3>${index + 1}. ${q.question}</h3>
      ${q.options.map((option) => `
        <label class="option">
          <input type="radio" name="q${q.id}" value="${option}">
          ${option}
        </label>
      `).join("")}
    </div>
  `).join("");
}

async function submitQuiz() {
  const questions = JSON.parse(localStorage.getItem("questions") || "[]");
  const playerName = localStorage.getItem("playerName");

  if (!playerName || questions.length === 0) {
    window.location.href = "index.html";
    return;
  }

  let score = 0;
  questions.forEach((q) => {
    const selected = document.querySelector(`input[name="q${q.id}"]:checked`);
    if (selected && selected.value === q.correct_answer) score++;
  });

  const response = await fetch(`${API_URL}/scores`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      player_name: playerName,
      score: score,
      total_questions: questions.length
    })
  });

  const result = await response.json();
  localStorage.setItem("lastResult", JSON.stringify(result));
  window.location.href = "result.html";
}

function showResult() {
  const resultDiv = document.getElementById("result");
  if (!resultDiv) return;

  const result = JSON.parse(localStorage.getItem("lastResult") || "{}");
  resultDiv.innerHTML = `
    <h2>Player: ${result.player_name || "Unknown"}</h2>
    <p>Score: <strong>${result.score ?? 0}/${result.total_questions ?? 0}</strong></p>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  loadQuiz();
  showResult();

  const submitBtn = document.getElementById("submitBtn");
  if (submitBtn) submitBtn.addEventListener("click", submitQuiz);
});

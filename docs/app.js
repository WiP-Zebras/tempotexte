import { countWords, estimateReadingMinutes } from "./src/reading-time.js";

const form = document.querySelector("#estimator");
const textInput = document.querySelector("#text");
const speedInput = document.querySelector("#speed");
const result = document.querySelector("#result");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = textInput.value;
  const speed = Number(speedInput.value);

  if (!text.trim()) {
    result.textContent = "Ajoute un texte pour obtenir une estimation.";
    textInput.focus();
    return;
  }
  if (!Number.isInteger(speed) || speed < 1 || speed > 2000) {
    result.textContent = "Choisis une vitesse entre 1 et 2 000 mots par minute.";
    speedInput.focus();
    return;
  }

  const words = countWords(text);
  const minutes = estimateReadingMinutes(text, speed);
  const wordLabel = words === 1 ? "mot" : "mots";
  const timeLabel = minutes === 1 ? "minute" : "minutes";
  result.textContent = `${words} ${wordLabel} · environ ${minutes} ${timeLabel} de lecture.`;
});

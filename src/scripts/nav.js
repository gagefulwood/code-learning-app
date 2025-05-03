import { loadPage } from './routing.js';

export function setupHome() {
  console.log("setupHome called");

  document.getElementById('view-lessons-btn')?.addEventListener('click', () => {
    loadPage('lessons.html');
  });

  document.getElementById('start-coding-btn')?.addEventListener('click', () => {
    loadPage('exercises.html');
  });

  document.getElementById('view-quizzes-btn')?.addEventListener('click', () => {
    loadPage('quiz.html');
  });
}

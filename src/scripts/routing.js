import { setupHome } from './nav.js';
import { loadLessons } from './lessonLoader.js';
import { loadExerciseList } from './loadExerciseList.js';
import { loadQuiz } from './quiz.js';

const routeMap = {
  'home.html': setupHome,
  'lessons.html': loadLessons,
  'exercise-list.html': loadExerciseList,
  'quiz.html': loadQuiz
};

export function loadPage(path) {
  console.log(`Loading page: ${path}`);
  fetch(`../pages/${path}`)
    .then(res => res.text())
    .then(html => {
      document.getElementById('app').innerHTML = html;
      requestAnimationFrame(() => {
        const initFn = routeMap[path];
        if (typeof initFn === 'function') {
          console.log(`Running init function for ${path}`);
          initFn();
        }

        const btn = document.getElementById('back-home-btn');
        if (btn) {
          btn.addEventListener('click', () => loadPage('home.html'));
        }
      });
    })
    .catch(err => {
      console.error(`Failed to load ${path}:`, err);
    });
}
import { setupDashboard } from './dashboard.page.js';
import { setupExercisePage } from './exercise.page.js';

const routeMap = {
  'dashboard.html': setupDashboard,
  'exercise.html': () => setupExercisePage(),
};

export function loadPage(path) {
  console.group('Loading:', path);
  fetch(`../pages/${path}`)
    .then(res => {
      if (!res.ok) throw new Error(`Page not found: ${path}`);
      return res.text();
    })
    .then(html => {
      document.getElementById('app').innerHTML = html;

      const initFn = routeMap[path];
      if (typeof initFn === 'function') {
        initFn();
      }
    })
    .catch(err => {
      console.error(`Failed to load ${path}:`, err);
    });
}

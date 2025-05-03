export function loadExerciseList() {
    fetch('../data/exercises.json')
      .then(res => res.json())
      .then(exercises => {
        const container = document.getElementById('exercise-list');
        container.innerHTML = '';
        exercises.forEach(exercise => {
          const div = document.createElement('div');
          div.className = 'exercise-card';
          div.innerHTML = `
            <h2>${exercise.title}</h2>
            <p>${exercise.description}</p>
            <button data-id="${exercise.id}">Start</button>
          `;
          div.querySelector('button').addEventListener('click', () => {
            localStorage.setItem('currentExerciseId', exercise.id);
            loadPage('exercise.html');
          });
          container.appendChild(div);
        });
      })
      .catch(err => {
        console.error('Failed to load exercises:', err);
      });
  }  
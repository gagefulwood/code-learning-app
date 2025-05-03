export function loadLessons() {
  fetch('../data/lessons.json')
    .then(res => res.json())
    .then(lessons => {
      const container = document.getElementById('lesson-list');
      container.innerHTML = '';
      lessons.forEach(lesson => {
        const div = document.createElement('div');
        div.className = 'lesson-card';
        div.innerHTML = `
          <h2>${lesson.title}</h2>
          <p>${lesson.description}</p>
        `;
        container.appendChild(div);
      });
    })
    .catch(err => {
      console.error('Failed to load lessons:', err);
    });
}

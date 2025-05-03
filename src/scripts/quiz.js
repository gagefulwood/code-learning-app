export function loadQuiz() {
    fetch('../data/quizzes.json')
      .then(res => res.json())
      .then(questions => {
        const container = document.getElementById('quiz-content');
        container.innerHTML = '';
        questions.forEach((q, index) => {
          const div = document.createElement('div');
          div.className = 'quiz-question';
          div.innerHTML = `
            <h3>Q${index + 1}: ${q.question}</h3>
          `;
          container.appendChild(div);
        });
      })
      .catch(err => {
        console.error('Failed to load quiz:', err);
      });
  }  
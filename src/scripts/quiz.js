function loadQuiz() {
    fetch('../data/quizzes.json')
        .then(res => res.json())
        .then(questions => {
            const container = document.getElementById('quiz-content');
            container.innerHTML = questions.map(q => `<p>${q.question}</p>`).join('');
        });
    document.getElementById('back-home-btn')?.addEventListener('click', () => {
        loadPage('home.html');
    });
}
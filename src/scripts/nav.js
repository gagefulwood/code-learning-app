function setupHome() {
    document.getElementById('view-lessons-btn')?.addEventListener('click', () => {
        loadPage('lessons.html');
    });
    document.getElementById('view-quizzes-btn')?.addEventListener('click', () => {
        loadPage('quiz.html');
    });
}
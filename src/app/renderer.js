function loadPage(path) {
    fetch(`../pages/${path}`)
        .then(response => response.text())
        .then(html => {
            document.getElementById('app').innerHTML = html;
            if (path === 'home.html') setupHome();
            if (path === 'lessons.html') loadLessons();
            if (path === 'exercises.html') setupEditor();
            if (path === 'quiz.html') loadQuiz();
        });
}

loadPage('home.html');
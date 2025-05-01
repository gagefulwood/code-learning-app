function loadLessons() {
    fetch('../data/lessons.json')
        .then(res => res.json())
        .then(lessons => {
            const container = document.getElementById('lesson-list');
            container.innerHTML = '';
            lessons.forEach(lesson => {
                const div = document.createElement('div');
                div.innerHTML = `<h2>${lesson.title}</h2><p>${lesson.description}</p>`;
                container.appendChild(div);
            });

            document.getElementById('back-home-btn')?.addEventListener('click', () => {
                loadPage('home.html');
            });
        });
}
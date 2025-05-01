function setupEditor() {
    document.getElementById('back-home-btn')?.addEventListener('click', () => {
        loadPage('home.html');
    });
    document.getElementById('editor').textContent = 'Editor placeholder';
}
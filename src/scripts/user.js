const DEFAULT_USER = {
    id: 'guest',
    name: 'Guest',
};

export function loadUser() {
    const stored = localStorage.getItem('user');
    return stored ? JSON.parse(stored) : DEFAULT_USER;
}

export function saveUser(user) {
    localStorage.setItem('user', JSON.stringify(user));
}
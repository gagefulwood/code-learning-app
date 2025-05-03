import { loadUser, saveUser } from './user.js';

export function setupDashboard() {
    const user = loadUser();
    document.getElementById('username').textContent = user.name;
    // code for loading dynamic, per-user content (e.g. courses, excercies, etc.)
}
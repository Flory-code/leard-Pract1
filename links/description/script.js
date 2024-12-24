const headerUsername = document.getElementById('header-username');
const storedLogin = localStorage.getItem('userLogin');
if (headerUsername) {
    headerUsername.textContent = storedLogin ? `Привет, ${storedLogin}` : 'Гость';
}

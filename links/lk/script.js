document.addEventListener('DOMContentLoaded', () => {
    const profileLogin = document.getElementById('profile-login');
    const profileDob = document.getElementById('profile-dob'); 
    const profileGender = document.getElementById('profile-gender'); 
    const profileTestResult = document.getElementById('profile-test-result');
    const logoutBtnProfile = document.getElementById('logout-btn-profile');
    const headerUsername = document.getElementById('header-username'); // Новый элемент для имени пользователя

    const storedLogin = localStorage.getItem('userLogin');
    const storedDob = localStorage.getItem('userDob'); 
    const storedGender = localStorage.getItem('userGender'); 
    const storedTestResult = localStorage.getItem('testResult');

    // Отображение данных
    if (profileLogin) {
        profileLogin.textContent = storedLogin || 'Гость';
    }

    if (profileDob) {
        profileDob.textContent = storedDob || 'Не указано'; 
    }

    if (profileGender) {
        profileGender.textContent = storedGender || 'Не указано'; 
    }

    if (profileTestResult) {
        profileTestResult.textContent = storedTestResult || 'Не выполнено'; 
    }

    // Установка имени пользователя в заголовке
    if (headerUsername) {
        headerUsername.textContent = storedLogin ? `Привет, ${storedLogin}` : 'Гость';
    }

    if (logoutBtnProfile) {
        logoutBtnProfile.addEventListener('click', () => {
            localStorage.removeItem('userLogin');
            localStorage.removeItem('userDob');
            localStorage.removeItem('userGender');
            localStorage.removeItem('testResult');
            window.location.href = 'index.html';
        });
    }
});

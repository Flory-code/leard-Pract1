document.addEventListener('DOMContentLoaded', () => {
    // Установка максимальной даты для поля даты рождения
    const dobInput = document.getElementById('dob');
    const today = new Date().toISOString().split('T')[0];
    dobInput.setAttribute('max', today);

    const authForm = document.getElementById('authForm');

    authForm.addEventListener('submit', function(event) {
        // Если форма валидна, сохраняем данные в localStorage
        if (authForm.checkValidity()) {
            const login = document.getElementById('login').value;
            const dob = document.getElementById('dob').value;
            const gender = document.querySelector('input[name="gender"]:checked').value;

            localStorage.setItem('userLogin', login);
            localStorage.setItem('userDob', dob);
            localStorage.setItem('userGender', gender);

            // Переход на другую страницу
            window.location.href = 'links/description/description.html';
        } else {
            // Если форма не валидна, показываем ошибки
            authForm.reportValidity();
        }
    });
});
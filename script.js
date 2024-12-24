document.addEventListener('DOMContentLoaded', () => {
    const form1 = document.forms.auth;

    form1.addEventListener('submit', (event) => {
        event.preventDefault(); // Отменяем стандартное поведение формы

        // Сбрасываем предыдущие сообщения об ошибках
        document.getElementById('login-error').textContent = '';
        document.getElementById('dob-error').textContent = '';
        document.getElementById('gender-error').textContent = '';

        // Проверяем валидность полей
        const login = form1.login;
        const dob = form1.dob;
        const gender = form1.gender;

        let hasError = false; // Флаг для отслеживания наличия ошибок

        if (!login.validity.valid) {
            document.getElementById('login-error').textContent = 'Ошибка: Логин не соответствует требованиям.';
            hasError = true;
        }

        if (!dob.validity.valid) {
            document.getElementById('dob-error').textContent = 'Ошибка: Дата рождения не соответствует требованиям.';
            hasError = true;
        }

        if (!gender.value) {
            document.getElementById('gender-error').textContent = 'Ошибка: Выберите пол.';
            hasError = true;
        }

        if (!hasError) {
            // Если все поля валидны, сохраняем данные в localStorage
            localStorage.setItem('userLogin', login.value);
            localStorage.setItem('userDob', dob.value);
            localStorage.setItem('userGender', gender.value);

            console.log('Данные сохранены:', {
                login: login.value,
                dob: dob.value,
                gender: gender.value
            });

            // Перенаправление на другую страницу
            window.location.href = 'links/description/description.html';
        }
    });
});

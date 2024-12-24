document.addEventListener('DOMContentLoaded', () => {
    const authForm = document.getElementById('authForm');

    if (authForm) {
        authForm.addEventListener('submit', function(event) {
            document.getElementById('login-error').textContent = '';
            document.getElementById('dob-error').textContent = '';
            document.getElementById('gender-error').textContent = '';

            let login = document.getElementById('login').value;
            let dob = document.getElementById('dob').value;
            let gender = document.querySelector('input[name="gender"]:checked');

            let errors = [];

            // Валидация логина
            if (!login.match(/^[а-яА-ЯёЁ0-9]{4,10}$/)) {
                errors.push('Логин должен состоять из символов русского алфавита и цифр, иметь количество символов от 4 до 10.');
                document.getElementById('login-error').textContent = errors[errors.length - 1];
            }

            // Валидация даты рождения
            if (!dob) {
                errors.push('Дата рождения не может быть пустой.');
                document.getElementById('dob-error').textContent = errors[errors.length - 1];
            } else {
                let birthDate = new Date(dob);
                let today = new Date();
                if (birthDate > today) {
                    errors.push('Дата рождения должна быть не позже текущей даты.');
                    document.getElementById('dob-error').textContent = errors[errors.length - 1]; 
                }
            }

            // Валидация пола
            if (!gender) {
                errors.push('Выберите пол.');
                document.getElementById('gender-error').textContent = errors[errors.length - 1]; 
            }

            // Если есть ошибки, предотвращаем отправку формы
            if (errors.length > 0) {
                event.preventDefault();
            } else {
                localStorage.setItem('userLogin', login);
                localStorage.setItem('userDob', dob);
                localStorage.setItem('userGender', gender.value);
                
                event.preventDefault(); 
                window.location.href = 'links/description/description.html'; 
            }
        });
    }
});

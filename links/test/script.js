const headerUsername = document.getElementById('header-username');
const storedLogin = localStorage.getItem('userLogin');
if (headerUsername) {
    headerUsername.textContent = storedLogin ? `Привет, ${storedLogin}` : 'Гость';
}



document.addEventListener('DOMContentLoaded', () => {
    const profileLogin = document.getElementById('profile-login');
    const profileTestResult = document.getElementById('profile-test-result');
    const logoutBtnProfile = document.getElementById('logout-btn-profile');
    const quizForm = document.getElementById('quizForm');
    const resultContent = document.getElementById('resultContent');
    const retryBtn = document.getElementById('retry');

    const storedLogin = localStorage.getItem('userLogin');
    const storedTestResult = localStorage.getItem('testResult');

    if (profileLogin) {
        profileLogin.textContent = storedLogin;
    }

    if (profileTestResult) {
        profileTestResult.textContent = storedTestResult;
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

    // Обработчик отправки формы теста
    if (quizForm) {
        quizForm.addEventListener('submit', function(event) {
            event.preventDefault(); 

            // Получение ответов
            let q1 = document.getElementById('q1').value.toLowerCase();
            let q2 = document.getElementById('q2').value.toLowerCase();
            let q3 = document.querySelector('input[name="q3"]:checked');
            let q4 = document.querySelector('input[name="q4"]:checked');
            let q5 = document.getElementById('q5').value.toLowerCase();

            let correctAnswers = 0;
            let errors = [];

            // Правильные ответы
            const correctAnswersList = {
                q1: 'wraith',
                q2: 'medkit',
                q3: 'support',
                q4: 'scan',
                q5: 'sniper'
            };

            // Сброс ошибок перед проверкой
            document.querySelectorAll('.error-message').forEach(el => el.textContent = '');

            // Проверка ответов
            if (q1 === correctAnswersList.q1) {
                correctAnswers++;
            } else {
                errors.push({ question: 'q1', message: `Правильный ответ - ${correctAnswersList.q1}` });
            }

            if (q2 === correctAnswersList.q2) {
                correctAnswers++;
            } else {
                errors.push({ question: 'q2', message: `Правильный ответ - ${correctAnswersList.q2}` });
            }

            if (q3 && q3.value === correctAnswersList.q3) {
                correctAnswers++;
            } else {
                errors.push({ question: 'q3', message: `Правильный ответ - ${correctAnswersList.q3}` });
            }

            if (q4 && q4.value === correctAnswersList.q4) {
                correctAnswers++;
            } else {
                errors.push({ question: 'q4', message: `Правильный ответ - ${correctAnswersList.q4}` });
            }

            if (q5 === correctAnswersList.q5) {
                correctAnswers++;
            } else {
                errors.push({ question: 'q5', message: `Правильный ответ - ${correctAnswersList.q5}` });
            }

            // Отображение результатов
            resultContent.innerHTML = `
                <h2>Результаты:</h2>
                <p>Вы ответили на ${correctAnswers} из 5 вопросов верно.</p>
            `;

            // Отображение ошибок под полями ответов
            errors.forEach(error => {
                const errorElement = document.getElementById(`error-${error.question}`);
                if (errorElement) {
                    errorElement.textContent = error.message;
                    errorElement.style.color = 'red'; // Установка цвета текста для ошибок
                }
            });

            localStorage.setItem('testResult', `Вы ответили на ${correctAnswers} из 5 вопросов верно.`);
        });
    }

    if (retryBtn) {
        retryBtn.addEventListener('click', function() {
            quizForm.reset();
            resultContent.innerHTML = `
                <h2>Результаты:</h2>
                <p>Вы ответили на 0 из 5 вопросов верно.</p>
            `;
            // Сброс ошибок
            document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
        });
    }
});

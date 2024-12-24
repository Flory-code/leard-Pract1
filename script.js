document.addEventListener('DOMContentLoaded', () => {
    // Первая часть кода
    const profileLogin = document.getElementById('profile-login');
    const profileTestResult = document.getElementById('profile-test-result');
    const logoutBtnProfile = document.getElementById('logout-btn-profile');
    const quizForm = document.getElementById('quizForm');
    const resultContent = document.getElementById('resultContent');
    const retryBtn = document.getElementById('retry');
    const authForm = document.getElementById('authForm');
    const profileDob = document.getElementById('profile-dob'); 
    const profileGender = document.getElementById('profile-gender'); 

    const storedLogin = localStorage.getItem('userLogin');
    const storedDob = localStorage.getItem('userDob'); 
    const storedGender = localStorage.getItem('userGender'); 
    const storedTestResult = localStorage.getItem('testResult');

    if (profileLogin) {
        profileLogin.textContent = storedLogin;
    }

    if (profileDob) {
        profileDob.textContent = storedDob; 
    }

    if (profileGender) {
        profileGender.textContent = storedGender; 
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


    if (quizForm) {
        quizForm.addEventListener('submit', function(event) {
            event.preventDefault();


            let q1 = document.getElementById('q1').value.toLowerCase();
            let q2 = document.getElementById('q2').value.toLowerCase();
            let q3 = document.querySelector('input[name="q3"]:checked');
            let q4 = document.querySelector('input[name="q4"]:checked');
            let q5 = document.getElementById('q5').value.toLowerCase();


            let correctAnswers = 0;
            if (q1 === 'wraith') correctAnswers++;
            if (q2 === 'medkit') correctAnswers++;
            if (q3 && q3.value === 'support') correctAnswers++;
            if (q4 && q4.value === 'scan') correctAnswers++;
            if (q5 === 'sniper') correctAnswers++;


            resultContent.innerHTML = `
                <h2>Результаты:</h2>
                <p>Вы ответили на ${correctAnswers} из 5 вопросов верно.</p>
            `;


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
        });
    }


    if (authForm) {
        authForm.addEventListener('submit', function(event) {

            document.getElementById('login-error').textContent = '';
            document.getElementById('dob-error').textContent = '';
            document.getElementById('gender-error').textContent = '';


            let login = document.getElementById('login').value;
            let dob = document.getElementById('dob').value;
            let gender = document.querySelector('input[name="gender"]:checked');


            let errors = [];


            if (!login.match(/^[а-яА-ЯёЁ0-9]{4,10}$/)) {
                errors.push('Логин должен состоять из символов русского алфавита и цифр, иметь количество символов от 4 до 10.');
                document.getElementById('login-error').textContent = errors[errors.length - 1];
            }


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


            if (!gender) {
                errors.push('Выберите пол.');
                document.getElementById('gender-error').textContent = errors[errors.length - 1]; 
            }


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

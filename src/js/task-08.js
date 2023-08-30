const formEl = document.querySelector('.login-form');

function getUserInfo(event) {
    event.preventDefault();
    const login = formEl.elements.email.value;
    const password = formEl.elements.password.value;
    if (login === '' || password === '') {
        alert('Enter login or password please!');
        return;
    }

    const formData = {
        email: login,
        password: password,
    };

    console.log(formData);
    formEl.reset();
}


formEl.addEventListener('submit', getUserInfo);

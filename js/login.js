document.getElementById('login-submit').addEventListener('click', function () {
    const emailField = document.getElementById('email');
    const passwordField = document.getElementById('password');


    if (emailField.value == 'rounakjahanraj@gmail.com' && passwordField.value == '12345678') {
        window.location.href = 'banking.html';
    }
})
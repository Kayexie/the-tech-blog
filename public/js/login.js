let logInForm = document.querySelector('#login-form');
let signUpForm = document.querySelector('#signup-form');

//handling login
async function logInHandler(event){
    event.preventDefault();
    let email = document.querySelector('#login-email').value.trim();
    let password = document.querySelector('#login-password').value.trim();

    if (email && password) {
        const response =  await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({email, password}),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            document.location.replace('/');
        } else{
            alert('Failed to log in')
        }
        }
    };

//handling singup
async function signUpHandler(event) {
    event.preventDefault();
    let username = document.querySelector('#signup-name').value.trim();
    let email = document.querySelector('#signup-email').value.trim();
    let password = document.querySelector('#signup-password').value.trim();

    if (username && email && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ username, email, password }),
            headers: { 'Content-Type': 'application/json' },
        })
        if (response.ok) {
            document.location.replace('/');
          } else {
            alert('Failed to sign up.');
          }
    }
};



logInForm.addEventListener('submit', logInHandler);
signUpForm.addEventListener('submit', signUpHandler);
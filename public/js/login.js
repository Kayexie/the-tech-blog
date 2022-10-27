let logInForm = document.querySelector('.logIn');
let signUpForm = document.querySelector('.signUp');

//handling login
async function logInHandler(event){
    event.preventDefault();
    let email = document.querySelector('#loginemail').value.trim();
    let password = document.querySelector('#loginpswd').value.trim();

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
    let username = document.querySelector('#signupUsername').value.trim();
    let email = document.querySelector('#signupEmail').value.trim();
    let password = document.querySelector('#signupPswd').value.trim();

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
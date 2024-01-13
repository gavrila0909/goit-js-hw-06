
const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', e => {
e.preventDefault();

const email = document.querySelector('input[type="email"]');
const password = document.querySelector('input[type="password"]');


if(email.value === '' || password.value === ''){
   alert('Te rugam sa introduci o valoare in ambele campuri!');
} else {
    console.log('Email:', email.value );
    console.log('Password:', password.value);
    loginForm.reset();
    alert('Formularul a fost salvat cu succes');
}

 })

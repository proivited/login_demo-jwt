const formLogin = document.querySelector('#formLogin');
formLogin.addEventListener('submit', (e)=> {

    e.preventDefault();
    const email = document.querySelector('#email');
    const password = document.querySelector('#password');

    const emailError = document.querySelector('#emailError');
    const passwordError = document.querySelector('#passwordError');

    if( email.textContent == ''){
        emailError.textContent = 'Error, el email no debe estar vacia';
    }

    if( password.textContent == ''){
        passwordError.textContent = 'Error, la contraseña no debe estar vacio';
    }

    if( email.textContent != '' && password.textContent != ''){

    let req = fetch('https://localhost:8080/login',{
        method: 'POST',
        body: JSON.stringify({
            username: email.textContent,
            password: password.textContent
        })
        }).then((response) => response.json())
        .then((data) => console.log(data));

    }

});
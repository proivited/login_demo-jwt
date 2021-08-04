const formLogin = document.querySelector('#formLogin');
formLogin.addEventListener('submit', (e) => {

    e.preventDefault();
    const email = document.querySelector('#email');
    const password = document.querySelector('#password');

    const emailError = document.querySelector('#emailError');
    const passwordError = document.querySelector('#passwordError');

    if (email.value == '') {
        emailError.textContent = 'Error, el email no debe estar vacia';
    }

    if (password.value == '') {
        passwordError.textContent = 'Error, la contraseña no debe estar vacio';
    }

    if (email.value != '' && password.value != '') {

        let req = fetch('http://localhost:8080/login', {
            method: 'POST',
            body: JSON.stringify({
                username: email.value,
                password: password.value
            }),
            headers: {
                'Content-Type': 'application/jason'
            }
        }).then(resp => resp.text()).then(token => {

            if (token.includes('Bearer')) {
                //console.log(token);
                localStorage.setItem('token', token);
                url = window.location;
                console.log(url);
                const path = url.pathname.substring(0, url.pathname.lastIndexOf('/') + 1)
                
                location.href = path + 'success.html';
            }else{
                localStorage.removeItem('token');
                emailError.textContent = 'Usuario o contrasena incorrecta';
            }

        })

    }

});
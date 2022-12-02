const email = document.querySelector('#email')
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const submit = document.querySelector('#submit');


submit.addEventListener('click', (event) => {
    event.preventDefault();

    if (email.value.trim() == '') {
        error(email, 'E-mail can not be empty')
    } else {
        success(email);
    }


    if (username.value.trim() == '') {
        error(username, 'Username can not be empty')
    } else {
        success(username);
    }


    if (password.value.trim() == '') {
        error(password, 'password can not be empty')
    } else {
        success(password)
    }


    // if (password.value.lenght > 6) {
    //     error(password, 'password lesss')
    // } 


    // if (password.value.lenght <10) {
    //     error(password, 'password kicik')
    // }

});



function error(element, msg) {
    element.style.border = '3px red solid';
    const parent = element.parentElement;
    const p = parent.querySelector('p');
    p.textContent = msg;
    p.style.visibility = 'visible'
}

function success(element) {
    element.style.border = '3px green solid';
    const parent = element.parentElement;
    const p = parent.querySelector('p');
    p.style.visibility = 'hidden'
    
}


let register = document.querySelector('#register1')
let user = document.querySelector('#user_name')
let email = document.querySelector('#user_email');
register.addEventListener('click', (e) => {
    e.preventDefault()
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.value.match(mailformat)) {
        window.open('/index.html', '_self')
        return true;
    }
    else {
        alert('You have entered wrong credentials!')
        return false;
    }
});
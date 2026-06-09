let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    login.classList.remove('active');
    search.classList.remove('active');
    cart.classList.remove('active');
}

let login = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    login.classList.toggle('active');
    search.classList.remove('active');
    cart.classList.remove('active');
    navbar.classList.remove('active');
} 

var loginForm = document.getElementById("loginForm");
var regForm = document.getElementById("registrationForm");
var Indicator = document.getElementById("indicator");

function register(){
  regForm.style.transform = "translateX(0px)";
  loginForm.style.transform = "translateX(0px)";
  Indicator.style.transform = "translateX(100px)";
}
function login(){
  regForm.style.transform = "translateX(330px)";
  loginForm.style.transform = "translateX(330px)";
  Indicator.style.transform = "translateX(0px)";
  
}


const togglePassword = document.querySelector('#togglePassword');
  const password = document.querySelector('#password');

  togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});
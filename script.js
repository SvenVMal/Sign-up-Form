let pw = document.getElementById('user_password');
let cpw = document.getElementById('confirm_password');
let error = document.querySelector('.error-text');
let submitBtn = document.querySelector('.create-acc');
let form = document.getElementById('test-form');

if (pw.value === "") {
    
    error.textContent = '* Please enter a password';
}

pw.addEventListener('input', () => {
    if (cpw.value !== pw.value) {
        error.textContent = '* Passwords do not match';
    }
});
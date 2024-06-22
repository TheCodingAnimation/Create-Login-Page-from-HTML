// script.js

function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    const passwordToggle = document.querySelector('.toggle-password');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        passwordToggle.textContent = '🙈'; // Change the icon to indicate hiding
    } else {
        passwordInput.type = 'password';
        passwordToggle.textContent = '👁️'; // Change the icon to indicate showing
    }
}

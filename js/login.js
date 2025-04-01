document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    usernameInput.addEventListener('input', function() {
        if (usernameInput.value.trim() !== '') {
            clearError(usernameInput, 'userError');
        }
    });

    passwordInput.addEventListener('input', function() {
        if (passwordInput.value.trim() !== '') {
            clearError(passwordInput, 'pwErr');
        }
    });
    
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        clearError(usernameInput, 'userError');
        clearError(passwordInput, 'pwErr');
        
        let isValid = true;
        
        if (!usernameInput.value.trim()) {
            displayError(usernameInput, 'userError', 'Username cannot be empty. Please enter your username.');
            isValid = false;
        }
        if (!passwordInput.value.trim()) {
            displayError(passwordInput, 'pwErr', 'Password cannot be empty. Please enter your password.');
            isValid = false;
        }
        if (isValid) {
            loginForm.submit();
        }
    });

    function displayError(inputElement, errorId, errorMessage) {
        const errorElement = document.getElementById(errorId);
        errorElement.textContent = errorMessage;
        inputElement.classList.add('error');
    }

    function clearError(inputElement, errorId) {
        const errorElement = document.getElementById(errorId);
        errorElement.textContent = '';
        inputElement.classList.remove('error');
    }
});

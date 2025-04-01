document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registration');
    const usernameInput = document.getElementById('reg-username');
    const emailInput = document.getElementById('reg-email');
    const passwordInput = document.getElementById('reg-password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    const resetBtn = document.querySelector('.reset-btn');

    usernameInput.addEventListener('input', function() {
        if (usernameInput.value.trim() !== '') {
            clearError(usernameInput, 'regUserError');
        }
    });

    emailInput.addEventListener('input', function() {
        if (emailInput.value.trim() !== '') {
            clearError(emailInput, 'emailError');
        }
    });

    passwordInput.addEventListener('input', function() {
        if (passwordInput.value.trim() !== '') {
            clearError(passwordInput, 'regPwErr');
        }
        
        // are passwords matching
        if (confirmPasswordInput.value.trim() !== '' && 
            confirmPasswordInput.value === passwordInput.value) {
            clearError(confirmPasswordInput, 'confirmPwErr');
        }
    });

    confirmPasswordInput.addEventListener('input', function() {
        if (confirmPasswordInput.value.trim() !== '') {
            if (confirmPasswordInput.value === passwordInput.value) {
                clearError(confirmPasswordInput, 'confirmPwErr');
            }
        }
    });

    // Form submission validation
    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Clear all old errors
        clearError(usernameInput, 'regUserError');
        clearError(emailInput, 'emailError');
        clearError(passwordInput, 'regPwErr');
        clearError(confirmPasswordInput, 'confirmPwErr');
        
        let isValid = true;
        
        if (!usernameInput.value.trim()) {
            displayError(usernameInput, 'regUserError', 'Username cannot be empty.');
            isValid = false;
        }
        
        if (!emailInput.value.trim()) {
            displayError(emailInput, 'emailError', 'Email address cannot be empty.');
            isValid = false;
        } else if (!isValidEmail(emailInput.value)) {
            displayError(emailInput, 'emailError', 'Please enter a valid email address.');
            isValid = false;
        }
        
        if (!passwordInput.value.trim()) {
            displayError(passwordInput, 'regPwErr', 'Password cannot be empty.');
            isValid = false;
        } else if (!isValidPassword(passwordInput.value)) {
            displayError(passwordInput, 'regPwErr', 'Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.');
            isValid = false;
        }
        
        if (!confirmPasswordInput.value.trim()) {
            displayError(confirmPasswordInput, 'confirmPwErr', 'Please confirm your password.');
            isValid = false;
        } else if (confirmPasswordInput.value !== passwordInput.value) {
            displayError(confirmPasswordInput, 'confirmPwErr', 'Passwords do not match.');
            isValid = false;
        }
        
        if (isValid) {
            registrationForm.submit();
        }
    });

    // errors
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

    function isValidEmail(email) {
        // email validation regex, checks to see if there's an @, a ., and there are no spaces in the email address
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function isValidPassword(password) {
        // Password policy: at least 8 characters, with at least one uppercase letter, one lowercase letter, one number, and one special character
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+={}[\]|:;"'<>,.?/])[A-Za-z\d!@#$%^&*()_\-+={}[\]|:;"'<>,.?/]{8,}$/;
        return passwordRegex.test(password);
    }

    // Reset button
    resetBtn.addEventListener('click', function() {
        clearError(usernameInput, 'regUserError');
        clearError(emailInput, 'emailError');
        clearError(passwordInput, 'regPwErr');
        clearError(confirmPasswordInput, 'confirmPwErr');
    });
});

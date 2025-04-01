document.addEventListener('DOMContentLoaded', function(){

const postForm = document.getElementById('posts');
const titleInput= document.getElementById('title');
const tagsInput = document.getElementById('tags');
const contentInput = document.getElementById('content');
const resetBtn = document.querySelector('.reset-btn');


titleInput.addEventListener('input', function() {
    if (titleInput.value.trim() !== '') {
        clearError(titleInput, 'titleError');
    }
});

tagsInput.addEventListener('input', function() {
    if (tagsInput.value.trim() !== '') {
        clearError(tagsInput, 'tagsError');
    }
});
contentInput.addEventListener('input', function() {
    if (contentInput.value.trim() !== '') {
        clearError(contentInput, 'contentErr');
    }
});

 // Post submission validation
 postForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Clear all old errors
    clearError(titleInput, 'titleError');
    clearError(tagsInput, 'tagsError');
    clearError(contentInput, 'contentErr');
    
    let isValid = true;
    
    if (!titleInput.value.trim()) {
        displayError(titleInput, 'titleError', 'Title cannot be empty.');
        isValid = false;
    } else if (titleInput.value.length > 80) {
        displayError(titleInput, 'titleError', 'Title cannot exceed 80 characters.');
        isValid = false;
    }
    
    if (!tagsInput.value.trim()) {
        displayError(tagsInput, 'tagsError', 'Tags cannot be empty.');
        isValid = false;
    } 
    
    if (!contentInput.value.trim()) {
        displayError(contentInput, 'contentErr', 'Content cannot be empty.');
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

    resetBtn.addEventListener('click', function() {
        clearError(titleInput, 'titleError');
        clearError(tagsInput, 'tagsError');
        clearError(contentInput, 'contentErr');
    });

});
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
        displayError(titleInput, 'titleError', 'Title cannot be empty!');
        isValid = false;
    } else if (titleInput.value.length > 80) {
        displayError(titleInput, 'titleError', 'Title cannot exceed 80 characters!');
        isValid = false;
    }
    
    if (!tagsInput.value.trim()) {
        displayError(tagsInput, 'tagsError', 'Tags cannot be empty!');
        isValid = false;
    } 
    
    if (!contentInput.value.trim()) {
        displayError(contentInput, 'contentErr', 'Content cannot be empty!');
        isValid = false;
    } 
     
    if (isValid) {
        postForm.submit();
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

    document.getElementById('bold').addEventListener('click', function (){
        const textarea = document.getElementById('content');
        if (textarea.style.fontWeight === "bold"){
            textarea.style.fontWeight = "normal";
        }else{
            textarea.style.fontWeight = "bold";
        };
        bold.classList.toggle("active");

    })

    document.getElementById('italic').addEventListener('click', function (){
        const textarea = document.getElementById('content');
        if (textarea.style.fontStyle === "italic"){
            textarea.style.fontStyle = "normal";
        }else{
            textarea.style.fontStyle = "italic";
        }
        italic.classList.toggle("active");
    })


    document.getElementById('underline').addEventListener('click', function (){
        const textarea = document.getElementById('content');
        if (textarea.style.textDecoration === "underline"){
            textarea.style.textDecoration = "none";
        }else{
            textarea.style.textDecoration = "underline";
        }
        underline.classList.toggle("active");
    })



});


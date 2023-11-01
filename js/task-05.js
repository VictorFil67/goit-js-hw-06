const nameInput = document.querySelector('#name-input');

nameInput.addEventListener('input', onNameInputchange);
 
function onNameInputchange(e) {
    const span = document.querySelector('#name-output');
    if (e.target.value) {
        span.textContent = e.target.value;
    } else {
    span.textContent = 'Anonymous'}
    
} 
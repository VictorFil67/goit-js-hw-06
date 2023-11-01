const validationInput = document.querySelector('#validation-input');

validationInput.addEventListener('blur', onValidationInputBlur);

function onValidationInputBlur(e) {
    const validationInputLength = e.target.value.length;
    const dataLength = +e.target.dataset.length;
if (validationInputLength === dataLength) {
    e.target.classList.remove('invalid');
    e.target.classList.add('valid');
} else {
    e.target.classList.remove('valid');
    e.target.classList.add('invalid');
}
}
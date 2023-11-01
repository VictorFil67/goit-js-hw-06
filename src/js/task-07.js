const fontSizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
console.log(text);
fontSizeControl.addEventListener('input', onFontSizeControlchange);

function onFontSizeControlchange(e) {
const size = e.target.value;
console.log(size);
text.style.fontSize = `${size}px`;
}
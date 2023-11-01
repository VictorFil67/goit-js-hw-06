const counter = document.querySelector('#value');
let counterValue = 0;
const decrementButton = document.querySelector('#counter').firstElementChild;
const incrementButton = document.querySelector('#counter').lastElementChild;

decrementButton.addEventListener('click', onDecrementButtonClick);
incrementButton.addEventListener('click', onIncrementButtonClick);

function onDecrementButtonClick(e) {
    counterValue -= 1;
    counter.textContent = counterValue;
}
function onIncrementButtonClick(e) {
    counterValue += 1;
    counter.textContent = counterValue;
}
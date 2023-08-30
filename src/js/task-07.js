const inputEL = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text');

function onInputEl(event) {
    const scaleValue = inputEL.value;
    spanText.style.fontSize = `${scaleValue}px`;
};


inputEL.addEventListener('input', onInputEl);





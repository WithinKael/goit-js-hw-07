const decrementButton = document.querySelector('button[data-action="decrement"]');
const incrementButton = document.querySelector('button[data-action="increment"]');
const valueElement = document.querySelector("#value");
let counterValue = 0;

const updateValue = () => {
    valueElement.textContent = counterValue;
}

const incrementClick = () => {
    counterValue += 1;
    updateValue();
};

const decrementClick = () => {
    counterValue -= 1;
    updateValue();
};


incrementButton.addEventListener("click", incrementClick);
decrementButton.addEventListener("click", decrementClick);


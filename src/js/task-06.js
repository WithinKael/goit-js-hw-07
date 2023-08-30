const myInput = document.querySelector('#validation-input');

const checkInputText = (event) => {
    const lengthMustBe = Number(myInput.dataset.length);
    const inputLength = myInput.value.length;

    if (myInput.value === "") { 
        console.log("Введіть літери!");
        myInput.classList.remove('valid', 'invalid');
        return;
    };

    if (inputLength >= lengthMustBe) {
        myInput.classList.add('valid');
        myInput.classList.remove('invalid');
    } else {
        myInput.classList.add('invalid');
        myInput.classList.remove('valid');
    }
};

myInput.addEventListener("blur", checkInputText);
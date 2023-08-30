const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


function addNewLi(array) {
  const myList = document.querySelector('#ingredients');
  const resultArray = [];
  myList.style.listStyle = "none";
  myList.style.color = "purple";


  array.forEach((element) => {
    const newItem = document.createElement('li');
    newItem.textContent = element;
    newItem.classList.add('item');
    resultArray.push(newItem);
  });
  myList.append(...resultArray);
}

addNewLi(ingredients);
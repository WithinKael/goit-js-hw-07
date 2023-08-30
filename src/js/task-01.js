function countUl() {
    const list = document.querySelectorAll(".item");
    console.log(`Number of categories: ${list.length}`);
    
    list.forEach(element => {
        console.log(`Category: ${element.firstElementChild.textContent}`);
        console.log(`Element: ${element.lastElementChild.children.length}`);
    });
;
}
countUl();


// function countUl() {
//     const list = document.querySelectorAll(".item");
//     console.log(`Number of categories: ${list.length}`);
    
//     const listTwo = document.querySelector(".item");
//     console.log(`Category: ${listTwo.firstElementChild.textContent}`);
//     console.log(`Elements: ${listTwo.lastElementChild.children.length}`);

//     const listFour = document.querySelector(".item");
//     console.log(`Category: ${listFour.nextElementSibling.firstElementChild.textContent}`);
//     console.log(`Category: ${listFour.nextElementSibling.lastElementChild.children.length}`);

//     const listThree = document.querySelector("#categories");
//     console.log(`Category: ${listThree.lastElementChild.firstElementChild.textContent}`);
//     console.log(`Category: ${listThree.lastElementChild.lastElementChild.children.length}`);

// }
// countUl();
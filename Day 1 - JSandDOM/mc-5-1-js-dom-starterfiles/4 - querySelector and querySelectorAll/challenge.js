//cycle over the list items and apply colors from the array called colours
const colours = ['red', 'yellow', 'goldenrod', 'lightgreen', 'blue', 'purple'];

// const listItems = document.querySelectorAll("li:nth-child(even)");

// for (let i = 0; i < listItems.length; i++) {
//     listItems[i].style.color = colours[3];
// };

const listItems = document.querySelectorAll("li");

for (let i = 0; i < listItems.length; i++) {
    listItems[i].style.color = colours[i % colours.length];
    console.log(i % colours.length);
}
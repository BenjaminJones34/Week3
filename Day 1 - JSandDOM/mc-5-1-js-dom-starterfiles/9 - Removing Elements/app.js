const list = document.getElementById("list");
const remove = document.getElementById("remove");
const submit = document.getElementById("submit");
const input = document.getElementById("input");
let theList = document.getElementsByTagName("ul")[0];

submit.addEventListener("click", ()=> {
    let listItem = document.createElement("li");
    listItem.textContent = input.value;
    input.value = "";
    // let theList = document.getElementsByTagName("ul")[0];
    list.appendChild(listItem);
});

remove.addEventListener("click", ()=> {
    let lastItem = document.querySelector("li:last-child");
    theList.removeChild(lastItem);
});
const list = document.getElementById("list");
const remove = document.getElementById("remove");
const submit = document.getElementById("submit");
const input = document.getElementById("input");
let theList = document.getElementsByTagName("ul")[0];
let liList = theList.querySelectorAll("li");

submit.addEventListener("click", ()=> {
    let listItem = document.createElement("li");
    listItem.textContent = input.value;
    input.value = "";
    list.appendChild(listItem);

});

theList.addEventListener("mouseover", (event)=> {
    event.target.textContent = event.target.textContent.toUpperCase();
});

theList.addEventListener("mouseout", (event)=> {
    event.target.textContent = event.target.textContent.toLowerCase();
});

theList.addEventListener("click", (event)=> {
    theList.removeChild(event.target);
});
    
const input = document.getElementById("input");
const submit = document.getElementById("submit");
const list = document.getElementById("list");
const showhide = document.getElementById("showhide-btn");

submit.addEventListener("click", ()=> {
    let listItem = document.createElement("li");
    listItem.textContent = input.value;
    input.value = "";
    // let theList = document.getElementsByTagName("ul")[0];
    list.appendChild(listItem);
});

showhide.addEventListener("click", ()=> {
    if (list.style.display == "block") {
        list.style.display = "none";
        showhide.textContent = "show";
    } else {
        list.style.display = "block";
        showhide.textContent = "hide";
    }
});
const list = document.getElementById("list");

list.addEventListener("click", (event)=> {
    let parent = event.target.parentNode;
    parent.removeChild(event.target);
});
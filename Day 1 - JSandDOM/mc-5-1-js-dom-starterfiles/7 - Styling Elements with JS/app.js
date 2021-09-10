const submit = document.getElementById("submit");
const cat = document.getElementById("cat");

submit.addEventListener("click", ()=> {
    if (cat.style.display == "block") {
        cat.style.display = "none";
        submit.textContent = "show";
    } else {
        cat.style.display = "block";
        submit.textContent = "hide";
    }
});
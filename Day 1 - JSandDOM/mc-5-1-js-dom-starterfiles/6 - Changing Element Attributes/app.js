const image = document.getElementById("image");
const input = document.getElementById("input");
const submit = document.getElementById("submit");

submit.addEventListener("click", ()=> {
    image.src = input.value;
    input.value = "";
});
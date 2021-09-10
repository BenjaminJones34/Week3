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

    listItem.addEventListener("click", ()=> {
        theList.removeChild(listItem);
    });

    listItem.addEventListener("mouseover", ()=> {
        listItem.textContent = listItem.textContent.toUpperCase();
    });

    listItem.addEventListener("mouseout", ()=> {
        listItem.textContent = listItem.textContent.toLowerCase();
    });

    list.appendChild(listItem);

});

remove.addEventListener("click", ()=> {
    let lastItem = document.querySelector("li:last-child");
    theList.removeChild(lastItem);
});

for (let i = 0; i < liList.length; i++) {
    liList[i].addEventListener("mouseover", ()=> {
        liList[i].textContent = liList[i].textContent.toUpperCase();
    });

    liList[i].addEventListener("mouseout", ()=> {
        liList[i].textContent = liList[i].textContent.toLowerCase();
    });
    liList[i].addEventListener("click", ()=> {
            theList.removeChild(liList[i]);
        });
    
    
};
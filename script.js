const list = document.querySelector("#to-do");


function insert(){
    let textInsert = document.querySelector("#text-box");
    let li = document.createElement("li");
    li.innerText = textInsert.value;
    list.appendChild(li);
    addEventListener(li);
    textInsert.value = "";
}

function addEventListener(child){
    child.addEventListener("click", function(){
        list.removeChild(child);
    });
}

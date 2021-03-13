todo = document.querySelector("#ToDo");
todo.addEventListener('click', submit, false);

function submit(event) {
    i1 = document.querySelector("#input1");
    i2 = document.querySelector("#input2");
    var tag = document.createElement("li");
    var text = document.createTextNode(i1.value+" : "+i2.value+ " ");
    tag.appendChild(text);
    tag.innerHTML += '<img src="Assets/trash.svg" alt="">';
    console.log(tag);
    tag.className += "list-group-item d-flex justify-content-between align-items-center";
    var element = document.querySelector("ul");
    element.appendChild(tag);
}
body = document.querySelector("body");
body.addEventListener("click", onClick, false);
function onClick(event) {
    if(event.target.tagName == 'IMG'){
        event.target.parentNode.remove();
    }
}
colorPicker = document.querySelector("#ColorPicker");
colorPicker.addEventListener("input", updateFirst, false);


function updateFirst(event) {
    var p = document.querySelector("p");
    if (p) {
        p.style.color = event.target.value;
    }
}


s = document.querySelector('#mySize');
myParagraph = document.querySelector("#MyParagraph");
s.addEventListener('input', changeSize, false);
function changeSize(event) {
    myParagraph.style.fontSize = event.target.value + "px";
}
f = document.querySelector('#font');
f.addEventListener("input", getFont, false);
f.addEventListener("click", onClick, false);
function getFont(event) {
    myParagraph.style.fontFamily = event.target.value;
}
function onClick(event){
    if(event.target.value)
        event.target.value = "";
}

const ul = document.querySelector('ul')
function changeColor(color){
    body.style.backgroundColor = color;
    if(body.style.backgroundColor === "black"){
        ul.style.color = "white"
    }
    else{
        ul.style.color = "black"
    }
}
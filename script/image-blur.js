const div = document.getElementById("image-blur"); 
const img = document.getElementById("image");

function loaded(){
    div.classList.add("loaded");
}

if(img.complete){
    loaded();
}
else{
    img.addEventListener("load", loaded);
}
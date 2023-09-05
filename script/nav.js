function checkPageWidth() {    
    if (window.innerWidth > 400) {
        links.style.display = "flex";
        links.style.flexDirection = "row";
        navbar.style.height = "";
        navArrow.style.rotate="";
    } else{
        links.style.display = "none";
        links.style.flexDirection = "";
        navbar.style.height = "";
        navArrow.style.rotate= "";
    }
}

function displayList(){
    if (links.style.display === "flex") {
        links.style.display = "none"; 
        links.style.flexDirection = "row";
        navbar.style.height = "";
        navArrow.style.rotate="";
    } else {
        links.style.display = "flex";
        links.style.flexDirection = "column";
        navbar.style.height = "400px";
        navArrow.style.rotate="180deg";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    toggleNav.addEventListener("click", displayList);
    window.addEventListener("load", checkPageWidth);
    window.addEventListener("resize", checkPageWidth);
});
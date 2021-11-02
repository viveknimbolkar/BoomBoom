//hide down arrow when scroll by y
var downArrow = document.querySelector(".arrow");

function hideArrow() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 50) 
        downArrow.style.display = "none";
    else
        downArrow.style.display = "block";
}
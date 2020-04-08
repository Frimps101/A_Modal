// Getting the elements
var modal = document.getElementById("modal");
var btn = document.getElementById("btn");
var closeBtn = document.getElementById("close");

//Adding the event listeners
window.addEventListener("click", clickOutside);
btn.addEventListener("click", showModal);
closeBtn.addEventListener("click", closeModal);

function clickOutside(e){
    if(e.target == modal){
        modal.style.display = "none";
    }
}

function showModal(){
    modal.style.display = "block";
}

function closeModal(){
    modal.style.display = "none";
}
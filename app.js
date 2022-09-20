const lock = document.querySelector(".lock");
const unlock = document.querySelector(".unlock");
const deleteBtn = document.querySelector(".delete");

let isLocked = false;
let isDelete = false;

lock.addEventListener("click", lockHelper);
unlock.addEventListener("click", unlockHelper);
deleteBtn.addEventListener("click", deleteHelper);

function lockHelper(e){
    isLocked = true;
    disableEdit();
}
function unlockHelper(e) {
    isLocked = false;
    showAll();
    // edit -> enable 
    enableEdit();
}
function deleteHelper() {
    if (isDelete == false) {
        isDelete = true;
    } else {
        isDelete = false;
    }
}

function disableEdit(){
    let allTickets = document.querySelectorAll(".ticket");
    for(let i=0;i<allTickets.length;i++){
        let textarea = allTickets[i].querySelector("textarea");
        textarea.setAttribute("readonly","");
    }
}

function enableEdit(){
    let allTickets = document.querySelectorAll(".ticket");
    for(let i=0;i<allTickets.length;i++){
        let textarea = allTickets[i].querySelector("textarea");
        textarea.removeAttribute("readonly","");
    }
}

function showAll(){
    let allTickets = document.querySelectorAll(".ticket");
    for(let i=0;i<allTickets.length;i++){
        allTickets[i].style.display = "block";
    }
    for(let i=0;i<colorBoxes.length;i++){
        colorBoxes[i].classList.remove("clicked");
    }
}
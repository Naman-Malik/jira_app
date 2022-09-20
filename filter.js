const allColors = document.querySelectorAll(".color");

const colors = ["pink","blue","green","black"];
const colorBoxes = document.querySelectorAll(".color_boxes");
for(let i=0;i<colorBoxes.length;i++){
    colorBoxes[i].addEventListener("click",filterTickets);
}
function filterTickets(e){
    if(isLocked==false){
        alert("First lock it");
        return;
    } 
    let elem = e.currentTarget;
    let childElemArr = elem.children;
    let clickedColor = childElemArr[0].classList[1];

    let secondClass = elem.classList[1];
    if(secondClass=="clicked"){
        showAll(elem);
    }else{
        for(let i=0;i<colorBoxes.length;i++){
            colorBoxes[i].classList.remove("clicked");
        }
        elem.classList.add("clicked");
        showOnlyMyColor(clickedColor);
    }
}

function showOnlyMyColor(clickedColor){
    let allTickets = document.querySelectorAll(".ticket");

    for(let i=0;i<allTickets.length;i++){
        let header = allTickets[i].children[0];
        let headerColor = header.classList[1];
        if(headerColor==clickedColor){
            allTickets[i].style.display = "block";
        }else{
            allTickets[i].style.display = "none";
        }
    }
}
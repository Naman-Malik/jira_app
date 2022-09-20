const main = document.querySelector(".main");
const addBtn = document.querySelector(".add");

addBtn.addEventListener("click",function(){
    if(isLocked==true){
        alert("First unlock it");
        return;
    }
    handleCreation();
})

function handleCreation(){
    isDelete = false;
    let id = uuidv4();
    createModal(id);
}
function createModal(id){
    let cColor = "black";
    let modal = document.createElement("div");
    modal.setAttribute("class","modal");
    modal.innerHTML=`
    <textarea class="contentarea"
    placeholder="Enter some Task"
    ></textarea>
    <div class="pallet_container">
    <div class="pallet_color pink"></div>
    <div class="pallet_color blue"></div>
    <div class="pallet_color green"></div>
    <div class="pallet_color black"></div>
    </div>`;
    main.appendChild(modal);
    let allColors = modal.querySelectorAll(".pallet_color");
    for(let i=0;i<allColors.length;i++){
        allColors[i].addEventListener("click",function(e){
            cColor = allColors[i].classList[1];
        })
    }
    modal.addEventListener("keypress",function(e){
        let key = e.key;
        if(key=="Enter"){
            let textarea = modal.querySelector("textarea");
            let text = textarea.value;

            modal.remove();

            createTicket(id,cColor,text);
        }
    })
}

function createTicket(id,color,text){
    let ticket = document.createElement("div");
    ticket.setAttribute("class","ticket");
    ticket.innerHTML=`
    <div class="ticket_header ${color}"></div>
    <div class="ticket_content">
    <div class="ticket_id">
    #${id}
    </div>
    <textarea name="">${text}</textarea>
    </div>`;
    main.appendChild(ticket);

    let header = ticket.querySelector(".ticket_header");
    header.addEventListener("click",changeColor);
    ticket.addEventListener("click",deleteTicket);
}

function changeColor(e){
    if(isLocked==true){
        alert("First unlock it");
        return;
    }
    let header = e.currentTarget;

    let classes = header.classList;
    let cColor = classes[1];

    let cIdx = 0;
    for(let i=0;i<colors.length;i++){
        if(cColor==colors[i]){
            cIdx = i;
            break;
        }
    }
    let nextIdx = (cIdx+1)%colors.length;
    let nextColor = colors[nextIdx];

    classes.remove(cColor);
    classes.add(nextColor);
}
function deleteTicket(e){
    if(isLocked==true){
        alert("First unlock it");
        return;
    }
    if(isDelete==true&&isLocked==false){
        e.currentTarget.remove();
    }
}
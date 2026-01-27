const boxes=document.querySelectorAll(".box");
const hide=document.querySelector("#hidden");
const para=document.querySelector("#cong");
const resetBtn=document.querySelector("#reset_button");
const newBtn=document.querySelector("#new_game");




let winPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

let count=0;

let turnO=true;


let enableBox=()=>{
    boxes.forEach((box)=>{
        box.disabled=false;
    })
    return;
}
let winner=()=>{
    hide.style.display="flex";
    if(turnO){
        para.textContent='CONGRATULATION! WINNER IS PLAYER X';
    }else{
        para.textContent='CONGRATULATION! WINNER IS PLAYER O';
    }
    return;
};

let draw=()=>{
    if(count===9){
        console.log("draw");
        hide.style.display="flex";
        para.textContent="MATCH HAS BEEN DRAW!";
    }
    return;
};

let disableButton=()=>{
    boxes.forEach((box)=>{
        box.disabled=true;
    })
    return;
};

let checkWinner=()=>{
    for(let pattern of winPattern){
        let val1=boxes[pattern[0]].textContent;
        let val2=boxes[pattern[1]].textContent;
        let val3=boxes[pattern[2]].textContent;
       if(val1!=""&&val2!=""&&val3!=""){
            if(val1===val2&&val2===val3){
                console.log("winner");
                winner();
                disableButton();
                return;
            }
       }
    }
};

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            console.log("O");
            turnO=false;
            box.textContent="O";
        }else{
            console.log("X");
            turnO=true;
            box.textContent="X";
        }
        box.disabled=true;
        count++;
        draw();
        checkWinner(); 
    })
});

resetBtn.addEventListener("click",()=>{
    enableBox();
    count=0;
    hide.style.display="none";
    boxes.forEach((box)=>{
        box.textContent="";
    })
})

newBtn.addEventListener("click",()=>{
    enableBox();
    count=0;
    hide.style.display="none";
    boxes.forEach((box)=>{
        box.textContent="";
    })
})






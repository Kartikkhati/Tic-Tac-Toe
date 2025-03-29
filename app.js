let boxes = document.querySelectorAll(".box"); 
let resetbtn = document.querySelector("#reset");
let newbtn = document.querySelector("#new-btn"); // Fixed selector
let msgcont = document.querySelector(".msg-cont"); // Fixed selector
let msg = document.querySelector("#msg");
let turno = true;

const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [3, 4, 5],
    [2, 4, 6],
    [6, 7, 8],
];

const rebtn = () => {
    turno = true;
    enableboxes();
    msgcont.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (box.innerText === "") { 
            box.innerText = turno ? "O" : "X";
            turno = !turno; 
            box.disabled = true;
            checkwinner();
        }
    });
});

const disableboxes = () => {
    boxes.forEach(box => box.disabled = true);
};

const enableboxes = () => {
    boxes.forEach(box => {
        box.innerText = ""; // Clear all boxes
        box.disabled = false; // Enable all boxes
    });
};

const showwinner = (winner) => {
    msg.innerText = `🎉 Congratulations! Player ${winner} wins! 🎉`;
    msgcont.classList.remove("hide");
    disableboxes();
};

const checkwinner = () => {
    for (let pattern of winpatterns) {
        let pos1 = boxes[pattern[0]].innerText; 
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 !== "" && pos1 === pos2 && pos2 === pos3) {
            console.log("Winner:", pos1);
            showwinner(pos1);
            return;
        }
    }
};

newbtn.addEventListener("click", rebtn);
resetbtn.addEventListener("click", rebtn);

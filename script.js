let currentModeHandler = drawBlack;

const container = document.querySelector("#container");
const gridSizeBtn = document.querySelector("#grid-size-btn");
const rainbowModeBtn = document.querySelector("#rainbow-mode-btn");
const normalModeBtn = document.querySelector("#normal-mode-btn");

container.addEventListener("mouseover", (e) => {
    currentModeHandler(e);
});

gridSizeBtn.addEventListener("click", () => {
    const size = getGridSize();

    if(size !== null) {
        createGrid(size);
    }
});

rainbowModeBtn.addEventListener("click", () => {
    currentModeHandler = drawRainbow;
});

normalModeBtn.addEventListener("click", () => {
    currentModeHandler = drawBlack;
});


function createGrid(n) {
    container.replaceChildren();
    const cellWidth = 100 / n;
    const grid = n*n;
    for (let i = 1; i <= grid; i++) {
        let div = document.createElement("div");
        div.style.width = `${cellWidth}%`;
        div.style.height = `${900/n}px`;
        div.classList.add("cell");
        container.appendChild(div);
    }
}

createGrid(20);

function randomRGBValue() {
    const randFun = () => Math.floor(Math.random() * 256);
    const red = randFun();
    const green = randFun();
    const blue = randFun();

    return `rgb(${red}, ${green}, ${blue})`;
}


function getGridSize() {
    while(true) {
        const input = prompt("Enter number of squares per side (1-100):");

        if (input === null) return null;

        const size = Number(input); 

        if(
            Number.isInteger(size) &&
            size >=1 &&
            size <= 100     
        ) return size;

        alert("Please enter a number between(1 & 100).");
    } 
}

function drawRainbow(e) {
    e.target.style.backgroundColor = randomRGBValue();
}

function drawBlack(e) {
    e.target.style.backgroundColor = "black";
}

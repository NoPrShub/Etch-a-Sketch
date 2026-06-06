const container = document.querySelector("#container");
const gridSizeBtn = document.querySelector("#grid-size-btn");

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

container.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = "black";
});

gridSizeBtn.addEventListener("click", () => {
    const size = getGridSize();

    if(size !== null) {
        createGrid(size);
    }
})

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

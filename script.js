const container = document.querySelector("#container");

function createGrid(n) {
    const containerWidth = container.getBoundingClientRect().width;
    const cellWidth = 100 / n;
    const grid = n*n;
    for (let i = 1; i <= grid; i++) {
        let div = document.createElement("div");
        div.style.width = `${cellWidth}%`;
        div.style.height = `${500/n}px`;
        div.classList.add("cell");
        container.appendChild(div);
    }
}

createGrid(20);

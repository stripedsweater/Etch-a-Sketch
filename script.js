const container = document.querySelector("#container");


function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        cell.addEventListener("mouseover", changeColor);
        container.appendChild(cell).className = "grid-item";
    };
};

function changeColor(event) {
    event.target.style.backgroundColor = "black";
};

function clearGrid(gridSize = 16) {
    container.innerHTML = '';
    gridSize = Number(prompt("How many squares would you like?"));

    if (gridSize > 0 && gridSize <= 100) {
        makeRows(gridSize, gridSize);
    } else {
        prompt("Sorry! Pick a number from 1 to 100");
    };
};
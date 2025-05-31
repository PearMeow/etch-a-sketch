console.log("If you can see this, the script is loaded");

const theContainer = document.querySelector(".container");
const gridWidth = 16;
const gridHeight = 16;

let grid = [];
let rowContainers = [];

function genGrid(gridWidth = 16, gridHeight = 16) {
    deleteGrid();
    for (let i = 0; i < gridWidth; ++i) {
        let rowCont = document.createElement("div");
        rowCont.className = "rowContainer";
        rowContainers.push(rowCont);
        grid.push([]);
        for (let j = 0; j < gridHeight; ++j) {
            grid[i].push(document.createElement("div"));
            grid[i][j].className = "square";
            rowCont.appendChild(grid[i][j]);
        }
        theContainer.appendChild(rowContainers[i]);
    }
}

function deleteGrid() {
    for (let i = 0; i < grid.length; ++i) {
        for (let j = 0; j < grid[i].length; ++j) {
            grid[i][j].remove();
        }
    }
    for (let i = 0; i < rowContainers.length; ++i) {
        rowContainers[i].remove();
    }
    grid.length = 0;
    rowContainers.length = 0;
}

genGrid();

console.log("If you can see this, the script is loaded");

const theContainer = document.querySelector(".container");
const gridWidth = 16;
const gridHeight = 16;

let grid = [];
let rowContainers = [];

for (let i = 0; i < gridWidth; ++i) {
    let rowCont = document.createElement("div");
    rowCont.className = "rowContainer";
    rowContainers.push(rowCont);
    grid.push([]);
    for (let j = 0; j < gridWidth; ++j) {
        grid[i].push(document.createElement("div"));
        grid[i][j].className = "square";
        rowCont.appendChild(grid[i][j]);
    }
    theContainer.appendChild(rowContainers[i]);
}

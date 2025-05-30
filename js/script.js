console.log("If you can see this, the script is loaded");

const theContainer = document.querySelector(".container");
const gridWidth = 16;
const gridHeight = 16;

let grid = [];

for (let i = 0; i < gridWidth; ++i) {
    grid.push([]);
    for (let j = 0; j < gridWidth; ++j) {
        let square = document.createElement("div");
        grid[i] = square;
        grid[i].className = "square";
        grid[i].textContent = `${i}, ${j}`;
        theContainer.appendChild(grid[i]);
    }
}

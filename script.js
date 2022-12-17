let gridContainer = document.querySelector(".grid-container");
let gridSize = 32;

for (let i = 0; i != gridSize * gridSize; i++) {
  let gridCell = document.createElement("div");
  gridCell.classList.add("grid-cell");
  gridContainer.appendChild(gridCell);
}

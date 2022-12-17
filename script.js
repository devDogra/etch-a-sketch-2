let gridContainer = document.querySelector(".grid-container");
let root = document.documentElement;
let btnResize = document.querySelector(".resize-btn");

let gridSize = 3;

function renderGrid(gridSize) {
  removeChilds(gridContainer);
  for (let i = 0; i != gridSize * gridSize; i++) {
    let gridCell = document.createElement("div");
    gridCell.classList.add("grid-cell");
    gridContainer.appendChild(gridCell);
  }
}

function removePaint(gridCell) {
  gridCell.classList.remove("painted");
}

function removeChilds(node) {
  let last;
  while ((last = node.lastChild)) node.removeChild(last);
}
// Paint cell on mouse over
document.addEventListener("mouseover", (e) => {
  if (e.target.matches(".grid-cell") == false) return;
  let gridCell = e.target;
  gridCell.classList.add("painted");

  setTimeout(() => removePaint(gridCell), 2000);
});

btnResize.addEventListener("click", (e) => {
  gridSize = prompt("Enter new grid size", 16);

  root.style.setProperty("--grid-size", gridSize);
  renderGrid(gridSize);
});

renderGrid(gridSize);

let selected_cell = null;
let position = null;

document.querySelectorAll(".cell").forEach((cell) => {
  cell.addEventListener("click", () => {
    if (cell.firstChild === null) {
      position = cell;
      movePiece(selected_cell, cell);
    } else {
      selected_cell = cell;
    }
  });
});

function movePiece(from, to) {
  to.innerHTML = `${from.innerHTML}`;
  from.innerHTML = ``;
  selected_cell = null;
  position = null;
}

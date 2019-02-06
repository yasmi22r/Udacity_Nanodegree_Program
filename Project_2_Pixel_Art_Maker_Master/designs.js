// Select color input
const colorPicker = document.querySelector('#colorPicker');
// Select size input
const sizeInput = document.querySelector('#sizePicker');

// Select the table
const grid = document.querySelector('#pixelCanvas');

// An instance of a cell
const tdElement = document.createElement("td");

// Select each table cell
const cell = document.querySelector("td");

// Select the input height
const inputHeight = document.querySelector('#inputHeight');

// Select the input width
const inputWidth = document.querySelector('#inputWidth');

// When size is submitted by the user, call makeGrid()
sizeInput.addEventListener("submit", makeGrid, true);
// sizeInput.addEventListener("submit", function createGrid(e) {
//   e.preventDefault();
//   grid.innerHTML = " ";
//   makeGrid();
// });

function makeGrid(evt) {
evt.preventDefault();

// Take height and width inputs from the user
let rowSize = inputWidth.value;
let colSize = inputHeight.value;

// Erase grid every time submit is hit so that the grid is recreated
eraseGrid();

// Create the grid
for(let row = 1; row <= rowSize; row++) {
  const tableRow = document.createElement("tr");
  grid.appendChild(tableRow);
  for(let col = 1; col <= colSize; col++) {
    const tableCol = document.createElement("td");
    tableRow.appendChild(tableCol);
  }
}

}

function eraseGrid() {
  while(grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }
}

// cell.addEventListener('click', paint, true);
//
// function paint(event) {
//   let chosenColor = colorPicker.value;
//   event.target.style.backgroundColor = chosenColor;
// }


/*
 * When a cell (td) is clicked, the background color changes to the
 * chosenColor (i.e value of colorPicker)
 */
grid.addEventListener('click', function paint (evt) {
  let chosenColor = colorPicker.value;
  evt.target.backgroundColor = chosenColor;
});
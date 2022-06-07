window.onload = () => defaultGrid();

let grid = document.getElementsByClassName("grid");
let container = document.getElementById("container");
let basicBtn = document.getElementById("basic");
let randomBtn = document.getElementById("random");
let clearBtn = document.getElementById("clear");

let mode = "basic";

function defaultGrid() {
  //set up & populate the first grid
  setGrid(16);
  useGrid(16);
}

function setGrid(size) {
  //set the column & row sizes for next grids via input
  container.style.gridTemplateColumns = "repeat(" + size + ", 1fr)";
  container.style.gridTemplateRows = "repeat(" + size + ", 1fr)";
}

function useGrid(size) {
  //populate the grid
  for (i = 0; i < size * size; i++) {
    let box = document.createElement("div");
    box.className = "grid"; //source 1 -- sources.md
    box.addEventListener("mouseenter", colorChange);
    container.appendChild(box);
  }
}

function newGrid() {
  //get new grid size via input
  let input = prompt("Enter the number for a new grid between 2-80!");
  let newSize = parseInt(input);

  if (newSize) {
    if (newSize < 1 || newSize === NaN || newSize > 80 || input === "1") {
      newGrid();
      console.log("first");
    } else {
      setGrid(newSize);
      useGrid(newSize);
      console.log("Second");
    }
  } else if (!newSize) {
    defaultGrid();
  }
}

function colorChange(e) {
  if (mode === "random") {
    let bgColor = randomColor();
    e.target.style.backgroundColor = bgColor;
  } else {
    e.target.style.backgroundColor = "white"; //source 2 --sources.md
  }
}

basicBtn.onclick = () => {
  if (mode !== "basic") {
    mode = "basic";
    className = "activeMode";
    basicBtn.classList.add("activeMode");
    randomBtn.classList.remove("activeMode");
    clear();
  }
};

randomBtn.onclick = () => {
  if (mode !== "random") {
    mode = "random";
    className = "activeMode";
    randomBtn.classList.add("activeMode");
    basicBtn.classList.remove("activeMode");
    clear();
  }
};

function clear() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  newGrid();
}

clearBtn.addEventListener("click", clear);

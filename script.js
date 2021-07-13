window.onload = () => defaultGrid();

let grid = document.getElementsByClassName("grid");
let container = document.getElementById("container");

function defaultGrid() {
//set up & populate the first grid
    setGrid(16);
    useGrid(16);
}

function setGrid(size) { //set the column & row sizes for next grids via input
    container.style.gridTemplateColumns = "repeat(" + size + ", 1fr)";
    container.style.gridTemplateRows = "repeat(" + size + ", 1fr)";
}

function useGrid(size) { //populate the grid
    for (i = 0; i < size * size; i++) {
        let box = document.createElement("div");
        box.className = "grid"; //source 1 -- sources.md
        box.addEventListener("mouseenter", colorChange);
        container.appendChild(box);
    }
}

function newGrid() { //get new grid size via input
    let input = prompt("Enter the number for a new grid between 2-80!");
    let newSize = parseInt(input);

    if (newSize !== null) {
        if(newSize < 1 || newSize === NaN || newSize > 80) {
            alert("Enter a number between 2-80.");
            setSize();
        }
        else{
            setGrid(newSize);
            useGrid(newSize);
        }
    }
}

function colorChange(e) {
    e.target.style.backgroundColor = "white"; //source 2 --sources.md
}

document.getElementById("clear").onclick = function clear() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    newGrid();
}
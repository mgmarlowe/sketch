window.onload = () => defaultGrid();

let grid = document.getElementsByClassName("grid");
grid.onmouseenter = function() {colorChange()};

function defaultGrid() {
    //notes in notebook pg 86

    let grid = 16;
    let num = grid * grid;

    for (i = 0; i < num; i++) {
        let box = document.createElement("div");
        let container = document.getElementById("container");
        box.className = "grid"; //source 1 -- sources.md
        container.appendChild(box);
    }
}

function colorChange() {
    grid.style.backgroundColor = "white";
}
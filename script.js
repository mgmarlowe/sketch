window.onload = () => defaultGrid();

let grid = document.getElementsByClassName("grid");

function defaultGrid() {

    let grid = 16;
    let num = grid * grid;

    for (i = 0; i < num; i++) {
        let box = document.createElement("div");
        let container = document.getElementById("container");
        box.className = "grid"; //source 1 -- sources.md
        box.addEventListener("mouseenter", colorChange);
        container.appendChild(box);
    }
}

function colorChange(e) {
    console.log("1");
    e.target.style.backgroundColor = "white"; //source 2 --sources.md
}

console.log(grid);

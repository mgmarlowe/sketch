window.onload = () => defaultGrid();

function defaultGrid() {
    //notes in notebook pg 86

    let grid = 16;
    let num = grid * grid;

    for (i = 0; i < num; i++) {
        /*let box = document.getElementById("blueprint");
        let copy = box.cloneNode(true);
        let container = document.getElementById("container");

        container.appendChild(copy);*/

        let box = document.createElement("div");
        let container = document.getElementById("container");
        container.appendChild(box);
    }
}
const gridSize = 0;
const grid = document.getElementById('grid');
grid.addEventListener("mouseenter", () => grid.style.backgroundColor = 'black');


const resetbtn = document.getElementById("resetbtn");
resetbtn.addEventListener('click', () => createGrid());
function createGrid() {
grid.style.backgroundColor = 'white';
}
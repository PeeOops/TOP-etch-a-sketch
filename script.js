const resizeBtn = document.getElementById("resize");
const canvas = document.getElementById("canvas");

// Random Colors
function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

function createSketch (size){

    // Clear the previous size
    canvas.innerHTML = "";

    // Add Grid Style
    canvas.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    canvas.style.gridTemplateRows = `repeat(${size}, 1fr)`

    // Loop to create the sketch size
    for(let i = 0; i < size * size; i++){
        // Create new element "div"
        const cells = document.createElement("div");
        // Append the new element to canvas
        canvas.appendChild(cells);
        cells.classList.add("cell");

        // Hover change colors
        cells.addEventListener("mouseenter",() => {
            cells.style.backgroundColor = getRandomColor();

        } )
    }
}

// Resize Button
resizeBtn.addEventListener("click", () => {
    let changedSize = parseInt(prompt("Change Grid Size"));
    if(changedSize < 1 || changedSize > 100){
        alert("Invalid, Size range 0 to 100");
        createSketch(16);
    }else{
        createSketch(changedSize);
    }
    
})


// Default sketch
createSketch(16);
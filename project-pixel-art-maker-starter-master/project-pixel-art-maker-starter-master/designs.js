// Select color input
let gridColor = document.getElementById('colorPicker');
// Select size input
let gridHeight = document.getElementById('inputHeight');
let gridWidth = document.getElementById('inputWidth');
const submitButton = document.getElementById("submit-button");
const grid = document.getElementById('pixelCanvas');

// When the submit button is clicked //
	submitButton.addEventListener('click' , function(e){
		//clears previous grid //
		grid.innerHTML = " ";
        // keeps changes //
		e.preventDefault();
		makeGrid();
		
	});
    //function to make grid with rows and colmns //
    function makeGrid(e) {
        for(let x=0 ; x<gridHeight.value ; x++){
            const row = grid.insertRow (0);
            for( let y=0 ; y<gridWidth.value ; y++){
                row.insertCell (0);
            }
        }
    }
    // to give color to each cell when clicked //
    grid.addEventListener('click' , function(e) {
        e.target.style.backgroundColor = gridColor.value; 
    });


	
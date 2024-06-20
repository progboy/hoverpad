let divGrid = [];
//function made to generate random color rgb values
function getRandomNumber(){
    return Math.floor(256*Math.random());
}
//gets called for each cell
function makeDivCell(rowsize,i,j){
    let elem = document.createElement("div");
    elem.style.backgroundColor = "white";
    elem.style.width = 640/rowsize + "px";
    elem.style.height = 640/rowsize + "px";
    elem.style.gridColumnStart = j+1;
    elem.style.gridColumnEnd = j+2;
    elem.style.gridRowStart = i+1;
    elem.style.gridRowEnd = i+2;

    //extra credit code
    //elem.style.opacity = 0;
    //
    // elem.addEventListener("mouseover",(event)=>{
    //     event.target.style.backgroundColor = `rgb(${getRandomNumber()},${getRandomNumber()},${getRandomNumber()})`;
    //     if(event.target.style.opacity<1){
    //         event.target.style.opacity = String(Number(event.target.style.opacity)+0.1);
    //         console.log(event.target.style.opacity);
    //     }
    // });
    elem.addEventListener("mouseover",(event)=>{
        event.target.style.backgroundColor = 'rgb(175,175,175)';
    });
    return elem;
}

//first divGrid is filled then each element in divGrid
//is displayed on html, individual element made with makeDivCell
function makegrid(rowsize){
    divGrid = [];
    for(let i =0;i<rowsize;i++){
        divGrid.push([]);
        for(let j =0;j<rowsize;j++){
            divGrid[i].push(makeDivCell(rowsize,i,j));
        }
    }
    //put a grid of div elements inside main-container div
    let mainContainer = document.querySelector(".mainContainer");

    for(let i =0;i<rowsize;i++){
        for(let j =0;j<rowsize;j++){
            mainContainer.appendChild(divGrid[i][j]);
        }
    }
}
//runs when user wants to reset the hoverpad
function resetCells(){
    document.querySelector(".mainContainer").innerHTML = "";
    makegrid(divGrid.length);
}
//changing the number of rows in grid, size of main container remains same
function newGrid(){
    let rowsize = window.prompt("enter rowsize: ");
    if(rowsize > 100){
        rowsize=100;
    }else if(rowsize<2){
        rowsize=1;
    }else if(isNaN(rowsize)){
        window.alert("Please enter a valid number");
        return;
    }
    document.querySelector(".mainContainer").innerHTML = "";
    makegrid(Math.floor(rowsize));
}
makegrid(16);
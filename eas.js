document.getElementsByTagName('body')[0].setAttribute('id', 'body');
const body = document.querySelector('#body');
const h1 = document.createElement('h1');
h1.style.cssText = 
    'font-size: 45px; margin-top: 25px; color: #000';    
h1.textContent = 'Etch-a-Sketch';
body.appendChild(h1);
const divBtn = document.createElement('div');
const resetBtn = document.createElement('button');
resetBtn.style.cssText = 
    'outline: none; margin-bottom: 25px; margin-top: 50px; padding: 7px; border-radius: 7px';
resetBtn.textContent = 'Reset Canvas';
divBtn.appendChild(resetBtn);
body.appendChild(divBtn);
const container = document.createElement('div');
container.id = 'container';
body.appendChild(container);
const footer = document.createElement('footer');
footer.style.cssText = 
    'fonst-size:45px; display: inline-block; margin: 25px 0px;';
footer.innerHTML = 'created by <a href="https://github.com/zieeco">zieeco</a>';
body.appendChild(footer);


var x = 16; 
var y = 256;
var z = 500 / x;

createResetBtn();

function createResetBtn(){
    x = 16;
    y = 256;
    createGridDiv(y);
    resetBtn.addEventListener('click', ()=>{
        resetGridSize();
        createGridDiv(y);
    });
}


function resetGridSize(){
    x = prompt('Hey! What gird size would you want to use for your canvas, 16? \n or maybe try choosing another number');
    if(x > 500){
        alert('Ops! The grid size cannot exceed 500. Enter a number lesser than 501');
        resetGridSize();
    } else if(x == ''){
        // x = 16;
        y = Math.pow(x, 2);
        console.log(y);
    } else if(x){
        // x = 16;
        y = Math.pow(x, 2);
        console.log(y);
    } else {
        // x = 16;
        y = Math.pow(x, 2);
        console.log(y);
    }
}


function createGridDiv(y){
       for(let i = 0; i < y; i++){
        const div = document.createElement('div');
        div.className = 'squares';        
        container.appendChild(div);
        div.addEventListener('mouseover', () =>{
            div.style.cssText = 'background-color: whitesmoke';
        });
    }
    setGridProperties(z);
}


function setContainerProperties(){
    container.style.display = 'grid';
    container.style.height = '500px';
    container.style.width = '500px';
    container.style.placeItems = 'start';
    container.style.border = '50px solid #A00';
    container.style.borderRadius = '20px'
    container.style.gridTemplateColumns =  `repeat(${x}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${x}, 1fr)`;

}

function setGridProperties(z){
    z = 500 / x;
    setContainerProperties();
    var squares = document.querySelectorAll('.squares');
    squares.forEach((element) =>{
        element.style.minWidth = z +'px';
        element.style.minHeight = z + 'px';
        element.style.maxWidth = '500px';
        element.style.maxHeight = '500px';
        element.style.backgroundColor = '#777';
    });
}
console.log(document);
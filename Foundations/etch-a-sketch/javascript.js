
const container=document.getElementById('container');
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
var inputColor=document.getElementById("head");
var color='#000';
let pixel;

output.textContent = slider.value;


createGrid(32);

mouseDown=false;

// document.body.onmousedown=()=>(mouseDown=true);
// document.body.onmouseup=()=>(mouseDown=false);

function createGrid(gridSize)
{
    clearGrid();
    container.style.gridTemplateColumns=`repeat(${gridSize},1fr)`;
    container.style.gridTemplateRows=`repeat(${gridSize},1fr)`;
    for(let i=0;i<gridSize;i++)
    {
        for(let j=0;j<gridSize;j++)
        {
        const gridElement=document.createElement('div');
        gridElement.setAttribute('id','square');

        container.appendChild(gridElement);
        }
    }
    pixel=document.querySelectorAll('#square');

    pixel.forEach((d)=>{

        d.onmousedown=()=>(mouseDown=true);
        d.onmouseup=()=>(mouseDown=false);

        d.addEventListener('mousedown',()=>{
            d.style.backgroundColor=color;
        }); 
        d.addEventListener('mouseover',()=>{
            if(!mouseDown)return;
            d.style.backgroundColor=color;
        });

    });
    
}
slider.addEventListener('mouseup',()=>{
    createGrid(slider.value);
});

inputColor.addEventListener('input',()=>{
    color=inputColor.value;
});



slider.oninput = function() {
    output.textContent = this.value;
    createGrid(slider.value);
    pixel.forEach((d)=>{
        d.style.backgroundColor='#FFFFFF'
    });
}

function clearGrid(){
    while(container.firstChild){
        container.removeChild(container.lastChild);
    }
}

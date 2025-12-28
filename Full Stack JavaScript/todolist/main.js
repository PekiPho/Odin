import Todo from './js/todo.js';
import Project from './js/projects.js';

let proj = document.querySelector(".new");
let modalproj=document.querySelector(".modal");
let overlay=document.querySelector(".overlay");
let exitProj=document.querySelector(".modal>.exit");
let projSumbit=document.querySelector(".modal>button");

let exitTodo=document.querySelector(".exit1");
let modalTodo=document.querySelector(".modal1");

let bodyProj=document.querySelector(".projbody");

let p= new Array(5);
let i=0;

proj.addEventListener('click',()=>{
    modalproj.classList.add("active");
    overlay.classList.add("active");
});

exitProj.addEventListener('click',()=>{
    modalproj.classList.remove("active");
    overlay.classList.remove("active");
});

exitTodo.addEventListener('click',()=>{
    modalTodo.classList.remove("active");
    overlay.classList.remove("active");
});

projSumbit.addEventListener('click',()=>{
    if(i>4){
        alert("Too many projects");
        return;
    }
    let input=document.querySelector('.title_pr');
    if(input.value==""){
        alert("Enter a value");
        return;
    }
    p[i]=new Project(input.value);
    input.value="";
    i++;
    modalproj.classList.remove("active");
    overlay.classList.remove("active");
});


document.addEventListener( "click", someListener );

function someListener(event){
    var element = event.target;
    if(element.classList.contains("proj")){
        let projtitle=document.querySelector(".left1");
        while(projtitle.firstChild)
            projtitle.removeChild(projtitle.firstChild);
        let title=document.createElement("p");
        title.classList.add("titlebig");
        let value=document.createTextNode(element.textContent);
        title.appendChild(value);
        projtitle.appendChild(title);//all to display name

        let image=document.createElement("img");
        image.src="/assets/plus.svg";
        let newTodo=document.createElement("p");
        value=document.createTextNode("New To Do");
        let newDiv=document.createElement("div");
        newTodo.appendChild(value);

        newDiv.appendChild(image);
        newDiv.appendChild(newTodo);
        newDiv.classList.add("addtodo");

        bodyProj.appendChild(newDiv);

        let j=0;
        while(p[j].getName()!=element.textContent) // to find displayed project
            j++;
        p[j].clear();
        p[j].print();
        }
}

import toDo from "./todo.js";

export default class Projects{
    constructor(name) {
        this.name=name;
        this.data=new Array(10).fill(undefined);//10 To Do's per project
        this.i=0;

        let left=document.querySelector(".left");
        let proj=document.createElement("p");
        proj.classList.add("proj");
        proj.textContent=this.name;
        left.appendChild(proj);

    }

    getName(){
        return this.name;
    }
    
    addTask(task){
        this.data[this.i++]=task;
    }

    remove(index){
        while(this.data[index+1]!=undefined){
            this.data[index]=this.data[index+1];
            index++;
        }
        if(this.data[index+1]==undefined)
            this.data[index]=undefined;
        this.i--;
    }

    print(){

    }
    
    clear(){

    }
}
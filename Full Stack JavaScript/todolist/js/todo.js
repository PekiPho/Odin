export default class Todo{
    constructor(title,desc,dueDate,priority){
        this.title=title;
        this.desc=desc;
        this.dueDate=dueDate;
        this.priority=priority;
    }
    add(){

    }

    remove(){

    }

    edit(desc){
        this.desc=desc;
        this.add();
        this.remove();
    }
}


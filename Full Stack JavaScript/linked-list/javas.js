
class Node{

    constructor(info)
    {
        this.info=info || null;
        this.next=null;
    }
}

class LinkedList{

    constructor(){
        this.head=this.tail=null;
    }

    getHead(){
        return this.head;
    }

    getTail(){
        return this.tail;
    }

    append(value){
        if(this.tail==null)
        {
            this.tail=new Node(value);
            this.head=this.tail;
        }
        else{
            this.tail.next=new Node(value);
            this.tail=this.tail.next;
        }
    }
    prepend(value){
        var temp = new Node(value);
        temp.next=this.head;
        this.head = temp;
        if(this.tail==null)this.tail=this.head;
        
    }

    toString(){
        var tmp= this.head;
        while(tmp!=null){
            console.log(tmp.info + "->");
            tmp=tmp.next;
        }
        console.log("null");
    }

    size(){
        var tmp=this.head;
        var size=1;
        if(tmp==this.tail) return 0;
        while(tmp!=this.tail)
        {
            size++;
            tmp=tmp.next;
        }
        return size;
    }
    pop(){
        var tmp=this.head;
        while(tmp.next!=this.tail)
            tmp=tmp.next;
        this.tail=tmp;
        this.tail.next=null;
    }

    at(index){
        var tmp=this.head;
        var i=0;
        while(i<index && tmp!=null)
        {
            tmp=tmp.next;
            i++;
        }
        if(i==index)
                return tmp;
        else return 0;
    }
    contains(value){
        var tmp=this.head;
        while(tmp!=null){
            if(tmp.info==value)
                return true;
            tmp=tmp.next;
        }
        return false;
    }

    find(value){
        var tmp=this.head;
        var i=0;
        while(tmp!=null && tmp.info!=value)
        {
            i++;
            tmp=tmp.next;
        }
        if(tmp==null)
            return -1;
        else return i;
    }
    insertAt(value,index){
        var tmp=this.at(index);
        
        if(tmp==0){
            this.append(value);
        }
        else{
            var drugi= tmp.next;
            tmp.next=new Node(value);
            tmp=tmp.next;
            tmp.next= drugi;
        }

    }

    deleteAt(index){
        if(this.at(index)==null) return 0;
        else if(index==0)
        {
            this.head=this.head.next;
        }
        else{
            var tmp = this.at(index-1);
            var temp2=this.at(index);
    
            tmp.next=temp2.next;
        }
    }
}

let lista = new LinkedList();

lista.append(7);
lista.prepend(20);
lista.prepend(1);
lista.append(9);
//lista.pop();
//lista.insertAt(5,2);
lista.deleteAt(3);
lista.toString();
//console.log(lista.at(0).info); return 1
//console.log(lista.contains(20)); return true
//console.log(lista.size()); return 4
//console.log(lista.find(9)); //exists return 3
//console.log(lista.find(10)); // does not exist return -1
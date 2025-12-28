
class HashMap{

    constructor(size){
        this.data=new Array(size).fill(undefined);
        const loadFactor=0.75;
    }

    hash(key){

        let hashCode = 0;
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }

        return hashCode;
    }

    secondary(i){
        return i*i;
    }

    set(key,value){
        let h= this.hash(key)%this.data.length;
        let i=1;
        if(this.length()>=0.75*this.data.length)
        {
            this.data.length*=2;
            this.data.fill(undefined,this.data.length/2,this.data.length);
        }
            

        while(this.data[h]!=undefined){
            if(key == this.data[h][0]){
                this.data[h]=[key,value];
                return this.data;
            }
            else{
                h=(h+this.secondary(i++))%this.data.length;
            }
        }
        this.data[h]= [key,value];
        return this.data;
    }

    get(key){
        let h=this.hash(key)%this.data.length;
        let i=1;

        while(this.data[h]!== undefined&& key!=this.data[h][0]){
            h=(h+this.secondary(i++))%this.data.length;
            if(i>=this.data.length)
                return null;
        }
        if(this.data[h]===undefined)
            return null;
        return this.data[h][1];
    }

    has(key){
        var h=this.hash(key)%this.data.length;
        var i=1;


        while(this.data[h]!== undefined&& key!=this.data[h][0] ){
            h=(h+this.secondary(i++))%this.data.length;
            if(i>=this.data.length)
                return false;
        }
        if(this.data[h]===undefined)
            return false;
        return true;
    }

    remove(key){
        var h=this.hash(key)%this.data.length;
        var i=1;


        while(this.data[h]!== undefined&& key!=this.data[h][0]){
            h=(h+this.secondary(i++))%this.data.length;
            if(i>=this.data.length)
                return false;
        }
        if(this.data[h]==undefined)
            return false;
        this.data[h]=undefined;
        return true;
    }

    length(){
        var count = 0;
        for(var i=0;i<this.data.length;i++)
        {
            if(this.data[i]!=undefined)
            {
                count++;
            }
        }
        return count;
    }

    clear(){
        for(var i=0;i<this.data.length;i++){
            if(this.data[i]!=undefined)
                this.data[i]=undefined;
        }
    }

    keys(){
        var keyArr=new Array();
        var i=0;
        for(var j=0;j<this.data.length;j++)
        {
            if(this.data[j]!=undefined)
            {
                keyArr[i++]=this.data[j][0];
            }
        }
        return keyArr;
    }

    values(){
        var keyArr=new Array();
        var i=0;
        for(var j=0;j<this.data.length;j++)
        {
            if(this.data[j]!=undefined)
            {
                keyArr[i++]=this.data[j][1];
            }
        }
        return keyArr;
    }

    entries(){
        var pairArr= new Array();
        var i=0;
        for(var j=0;j<this.data.length;j++)
        {
            if(this.data[j]!=undefined)
            {
                pairArr[i++]=this.data[j];
            }
        }
        return pairArr;
    }
}

let map = new HashMap(8);
map.set("Carlos",3);
map.set("Luke",5);
map.set("Carld",4);
map.set("bb",1);
map.set("Mike",2);
map.set("Jenny",9);
console.log(map.length());
map.set("Michael",10);

console.log(map.length()); // 3
console.log(map.keys()); //[Luke,Carlos,Carla]
console.log(map.has("Carlo"));
console.log(map.get("Carld"));
map.remove("Carld");
map.remove("carl");
console.log(map.has("Carld"));
map.set("Carld",6);
map.set("Carld",9);



console.log(map.entries()); // array of objects
// console.log(map.values()); //[5,3,4]
// console.log(map.has("Carlos")); //true
// console.log(map.has("Carlo")); //false
// console.log(map.get("Carlos")); // 3
// console.log(map.get("Carlo")); // null
// map.clear(); 
// console.log(map.length()); // 0 
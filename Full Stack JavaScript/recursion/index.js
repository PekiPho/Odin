function fibs(n){
    let array=new Array(n);
    array[0]=0;
    array[1]=1;
    for(let i=2;i<n;i++){
        array[i]=array[i-1]+array[i-2];
    }
    return array;
}

const fibsRec = (n,a=[0,1])=>{
    if(a.length>=n)
        return a.slice(0,n);
    else {
        //a.push(a[a.length-1]+a[a.length-2]);
        return fibsRec(n,[...a,a[a.length-1]+a[a.length-2]]);
    }
};

//console.log(fibsRec(15));
function MergeSort(array,first,last){
    if(first<last)
    {
        let mid=Math.floor((first+last)/2);
        MergeSort(array,first,mid);
        MergeSort(array,mid+1,last);
        Merge(array,first,last);
    }
}
function Merge(array,first,last){
    let mid=Math.floor((first+last)/2);
    let temp=new Array();
    let i1=0;
    let i2=first;
    let i3=mid+1;

    while(i2<=mid && i3 <= last)
    {
        if(array[i2]<array[i3])
            temp[i1++]=array[i2++];
        else temp[i1++]=array[i3++];
    }
    while(i2<=mid)
        temp[i1++]=array[i2++];
    while(i3<=last)
        temp[i1++]=array[i3++];
    for(i1=0, i2=first;i2<=last;i1++,i2++)
        array[i2]=temp[i1];
}

//let niz= new Array(3, 2, 1, 13, 8, 5, 0, 1); test case 1
let niz= new Array(105, 79, 100, 110); // test case 2
MergeSort(niz,0,niz.length-1);

console.log(niz);

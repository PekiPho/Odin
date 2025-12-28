let i=0;
let data=document.querySelector(".data");
let rmvbtn;
let allbuttons;
let broj;
const myLibrary=[];

function Book(title,author,pages,read){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
    this.info = function(){
        return this.title + " by " + this.author + ", " + this.pages + " pages, " + this.read;
    }
}

function addBook(){
    let title=document.getElementById("naslov").value;
    let author=document.getElementById("pisac").value;
    let pages=document.getElementById("strana").value;
    let read=document.getElementById("citano").value;
    if(read!=="" && title!=="" && author!=="" && pages!=="")
    {
        myLibrary[i]=new Book(title,author,pages,read);
        i++;
    }
    clearall();
    displayBook(myLibrary,i);
}

function displayBook(library,i){
    for(let j=0;j<i;j++)
    {
        const fulldiv=data.appendChild(document.createElement("div"));
        fulldiv.classList.add("line");
        const paragraph=fulldiv.appendChild(document.createElement("p"));
        paragraph.textContent=library[j].info();
        rmvbtn=fulldiv.appendChild(document.createElement("button"));
        rmvbtn.classList.add("button2");
        rmvbtn.textContent="Remove";
        rmvbtn.setAttribute("id",j);


        readbtn=fulldiv.appendChild(document.createElement("button"));
        readbtn.classList.add("button3");
        readbtn.textContent="Read";
        readbtn.setAttribute("id",j);
    }
}

Book.prototype.changestatus = function(){
    if(this.read=="read")
        this.read="not read";
    else if(this.read=="not read")
        this.read="read";
};

function clearall(){
    while (data.lastElementChild) {
        data.removeChild(data.lastElementChild);
        }
}

document.addEventListener('click',(event)=>{
    if(event.target.classList.contains('button2'))
    {
        const dugme=event.target;
        broj=Number(dugme.id);
        for(broj;broj<i;broj++)
        {
            myLibrary[broj]=myLibrary[broj+1];
        }
        i--;
        clearall();
        displayBook(myLibrary,i);
    }

    if(event.target.classList.contains('button3'))
    {
        myLibrary[event.target.id].changestatus();
        clearall();
        displayBook(myLibrary,i);
    }

    // if(event.target.classList.contains('button3'))
    // {
    //     if(myLibrary[event.target.id].read=="read")
    //         myLibrary[event.target.id].read="not read";
    //     else if(myLibrary[event.target.id].read=="not read")
    //     myLibrary[event.target.id].read="read";

    //     clearall();
    //     displayBook(myLibrary,i);
    // }
});


// allbuttons.forEach((e)=>{
//     e.addEventListener('click',()=>{
//         for(let z=Number(e.id);z<i;z++)
//         {
//             myLibrary[z]=myLibrary[z+1];
//         }
//         i--;
//         clearall();
//         displayBook(myLibrary,i);
        
//     });
// });


/*
let dugme=document.querySelectorAll(".button2");
        dugme.forEach((e)=>{
            e.addEventListener('click',()=>{
                let broj=Number(e.id);
                let z=i-1;
                console.log(z,broj);
                while (z>broj) {
                    data.removeChild(data.lastElementChild);
                    
                }
            });
        });

*/

/*
        const fulldiv=data.appendChild(document.createElement("div"));
        fulldiv.classList.add("line");
        const paragraph=fulldiv.appendChild(document.createElement("p"));
        const rmvbtn=fulldiv.appendChild(document.createElement("button"));
        rmvbtn.classList.add("button2");
        rmvbtn.textContent="Remove";
        rmvbtn.setAttribute("id",i);
*/

/*
        rmvbtn.setAttribute("onclick","removeit()");
*/
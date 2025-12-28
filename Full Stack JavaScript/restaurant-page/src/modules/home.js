import clear from "..";

export default function generateHome(){
    clear();
    let HomeBtn=document.querySelector('.Home');
    HomeBtn.disabled=true;
    let content=document.querySelector('#content');
    let para=new Array(3);
    let container=document.createElement("div");
    container.classList.add('container');
    for(let i=0;i<3;i++)
    {
        para[i]=document.createElement("p");
        para[i].classList.add('homep');
    }
    para[0].textContent='At Orion Bakery, we pride ourselves on using only the finest ingredients, meticulously sourced to ensure every bite is a moment of pure delight. From our freshly baked bread to our decadent pastries and cakes, each creation is a testament to our commitment to quality and craftsmanship.';
    para[1].textContent="Whether you're stopping by for your morning croissant and coffee or planning a special celebration with one of our custom-designed cakes, our dedicated team is here to make your experience unforgettable.";
    para[2].textContent="Come lose yourself in the enchanting world of Orion Bakery, where every bite tells a story of passion, creativity, and above all, flavor. Your journey to pastry perfection starts here.";
    for(let i=0;i<3;i++)
    {
        container.appendChild(para[i]);
        container.appendChild(document.createElement('br'));
    }
    content.appendChild(container);
}
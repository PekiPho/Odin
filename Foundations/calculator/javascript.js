const zero=document.getElementById('zero');
const one=document.getElementById('one');
const two=document.getElementById('two');
const three=document.getElementById('three');
const four=document.getElementById('four');
const five=document.getElementById('five');
const six=document.getElementById('six');
const seven=document.getElementById('seven');
const eight=document.getElementById('eight');
const nine=document.getElementById('nine');

const point=document.getElementById('point');
const equal=document.getElementById('equal');
const clear=document.getElementById('clear');
const back=document.getElementById('back');

const plus=document.getElementById('plus');
const minus=document.getElementById('minus');
const divide=document.getElementById('divide');
const multiply=document.getElementById('multiply');

const display=document.querySelector('.display');

const buttons=document.querySelectorAll('.btn');
const op=document.querySelectorAll('.op');
buttons.forEach((e)=>{
    e.addEventListener('click',()=>{
        display.textContent += e.textContent;
        if(oper === undefined)
            first=display.textContent;
        if(oper !== undefined)
        {
            last=display.textContent.slice(first.length+1,display.textContent.length);
        }
    });
});
back.addEventListener('click',()=>{
    let t=display.textContent.slice(display.textContent.length-1,display.textContent.length);
    display.textContent=display.textContent.slice(0,-1);
    if(t === '*' || t === '/' || t === '-' || t === '+')
    {
        oper=undefined;
        last=undefined;
        isClicked=true;
    }
    if(oper !== undefined && !(t === '*' || t === '/' || t === '-' || t === '+'))
        {
            last=display.textContent.slice(first.length+1,display.textContent.length);
        }
});

clear.addEventListener('click',()=>{
    cl();
});

function cl()
{
    display.textContent="";
    isClicked= true;
    first=undefined;
    last=undefined;
    oper=undefined;
    pointIsClicked=true;
    lastPointIsClicked=true;
}

var first;
var last;
var oper;
var isClicked= true;
var pointIsClicked= true;
var lastPointIsClicked= true;

function operate(a,b,operator)

{
    a=Number(a);
    b=Number(b);
    switch(operator)
    {
        case '+':
            return round(a+b);
        case '-':
            return round(a-b);
        case '*':
            return round(a*b);
        case '/':
            return round(a/b);
    }
}

function round(num)
{
    return Math.round(num*1000)/1000;
}

op.forEach((e)=>{
    
        e.addEventListener('click',()=>{
            if(first === undefined)
            {
                return;
            }
            if(isClicked)
            {
            display.textContent += e.textContent;
            first=display.textContent.slice(0,-1);
            isClicked=!isClicked;
            oper=display.textContent.slice(first.length,first.length+1);
            last=undefined;
            }
            if(last !== undefined)
            {
                if(oper === '/' && last === '0')
                {
                    alert(`Can't divide by zero`);
                    cl();
                }
                else
                {
                    display.textContent=operate(first,last,oper);
                    first=display.textContent;
                    display.textContent += e.textContent;
                    oper=display.textContent.slice(first.length,first.length+1);
                    last=undefined;
                    lastPointIsClicked=true;
                }
            }
        });
});
equal.addEventListener('click',()=>{
    display.textContent=operate(first,last,oper);
    isClicked=!isClicked;
    lastPointIsClicked=true;
    if(oper === '/' && last === '0')
        {
            alert(`Can't divide by zero`);
            cl();
        }
});

point.addEventListener('click',()=>{
    // if(pointIsClicked)
    // {
    //     display.textContent+=point.textContent;
    //     pointIsClicked=!pointIsClicked;
    // }
    // else if(oper !== undefined && lastPointIsClicked)
    // {
    //     display.textContent+=point.textContent;
    //     lastPointIsClicked=!lastPointIsClicked;
    // }
    if(first.includes('.') && last === undefined)
        return;
    else if(oper !== undefined && last.includes('.'))
        return;
    else 
    {
        display.textContent+=point.textContent;
        if(oper === undefined)
            first=display.textContent;
        if(oper !== undefined)
        {
            last=display.textContent.slice(first.length+1,display.textContent.length);
        }
    }

});

//console.log(first,oper,last);
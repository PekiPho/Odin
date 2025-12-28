let row=[]
row[0]=document.querySelector('.r1').children;
row[1]=document.querySelector('.r2').children;
row[2]=document.querySelector('.r3').children;

let z=1;
let matrix = [];
let s;
let noMoves=0;
let playerX=document.querySelector('.px');
let playerO=document.querySelector('.po');
playerX.textContent=0;
playerO.textContent=0;
playerX.style.textShadow="black 5px 0 3px,black 5px 0 25px"

for(var i=0; i<3; i++) {
    matrix[i] = new Array(3).fill(0);
}

let play=document.querySelectorAll('.play');
play.forEach((e)=>{
    e.addEventListener('click',()=>{
        if(z===1){
            e.textContent='X';
            e.style.color='#de1f1f';
        }
        else{
            e.textContent='O';
            e.style.color='rgba(10,72,227,1)';
            e.id=String(-1*e.id);
        } 
        e.classList.add('disabledDiv');
        z=-z;

        if(z===1)
        {
            playerO.style.textShadow="";
            playerX.style.textShadow="black 5px 0 3px,black 5px 0 25px"
        }
        else if(z===-1)
        {
            playerX.style.textShadow="";
            playerO.style.textShadow="black 5px 0 3px,black 5px 0 25px"
        }

        noMoves++;
        if(noMoves===9)
            resetGame();
        checkWin();
    });
});
function getValues(){
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++)
        {
            if(row[i][j].textContent!=='')
                matrix[i][j]=Number(row[i][j].id);
        }
    }
}
function resetGame(){
    for(let i=0;i<3;i++)
    {
        s[i]=0;
        for(let j=0;j<3;j++)
        {
            matrix[i][j]=0;
            row[i][j].textContent='';
            row[i][j].classList.remove('disabledDiv');
            row[i][j].id=Math.abs(row[i][j].id);
        }
    }
    noMoves=0;
}

function checkWin(){
    getValues();
    s=new Array(8).fill(0);
    for(let i=0;i<3;i++){
        s[0]+=matrix[i][i];
        s[1]+=matrix[0][i];
        s[2]+=matrix[1][i];
        s[3]+=matrix[2][i];
        s[4]+=matrix[i][0];
        s[5]+=matrix[i][1];
        s[6]+=matrix[i][2];
        s[7]+=matrix[2-i][i];
    }
    for(let i=0;i<8;i++)
    {
        if(s[i]===15)
        {
            playerX.textContent++;
            resetGame();
        }
        else if(s[i]===-15)
        {
            playerO.textContent++;
            resetGame();
        }
    }
}
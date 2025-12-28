let inputs=document.querySelectorAll('input');
let pass=document.querySelector('#password');
let dpass=document.querySelector('.inputs.password');

let para=document.createElement('p');
para.classList.add('error2');
para.textContent='* Passwords do not match';

const patterns= {
    first_name: /^[a-z]{0,14}$/i,
    last_name: /^[a-z]{0,14}$/i,
    phone:/^\d{10}$/,
    password:/^\w{8,20}$/,
    email:/^([a-z\d\.]{5,15})@([a-z]{2,8})\.([a-z]{2,7})(\.[a-z]{2,7})*$/,
    cpassword:/^\w{8,20}$/

};

inputs.forEach((input)=>{
    input.addEventListener('keyup',(e)=>{
        if(e.target.id!=='cpassword')
            validate(patterns[e.target.id],e.target);
        else{
            if(patterns[e.target.id].test(e.target.value))
            {
                if(e.target.value===pass.value)
                {
                    e.target.classList.add('correct');
                    e.target.classList.remove('error');
                    pass.classList.add('correct');
                    pass.classList.remove('error');
                    dpass.removeChild(para);
                } 
                else 
                {
                    e.target.classList.add('error');
                    e.target.classList.remove('correct');
                    pass.classList.add('error');
                    pass.classList.remove('correct');
                    dpass.appendChild(para);
                }
            }
            else{
                e.target.classList.add('error');
                e.target.classList.remove('correct');
                pass.classList.add('error');
                pass.classList.remove('correct');
                dpass.appendChild(para);
            }
        }
    });
});

function validate(regex,input){
    if(regex.test(input.value))
    {
        input.classList.add('correct');
        input.classList.remove('error');
    }
    else{
        input.classList.add('error');
        input.classList.remove('correct');
    }
}

function btnclick(){
    let i=0;
    inputs.forEach((input)=>{
        if(input.classList.contains('correct'))
            i++;
    });
    if(i===6){
        inputs.forEach((input)=>{
            input.classList.remove('correct');
            input.value="";
        });
    }
}

//e.target.value===pass.value
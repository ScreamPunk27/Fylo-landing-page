const inputFooter = document.getElementById('input-footer');
const inputHeader = document.getElementById('input-header');
const buttonHeader = document.getElementById('btn-header');
const buttonFooter = document.getElementById('btn-footer');

const regEx =/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

buttonHeader.addEventListener('click',(e)=>{
    e.preventDefault();
    if(!regEx.test(inputHeader.value)){
        document.querySelector('.msg-header').style.visibility="visible";
        inputHeader.style.borderColor="red";
    }else{
        document.querySelector('.msg-header').style.visibility="hidden";
        inputHeader.style.borderColor="black";
    }
});

buttonFooter.addEventListener('click',(e)=>{
    e.preventDefault();
    if(!regEx.test(inputFooter.value)){
        document.querySelector('.msg-footer').style.visibility="visible";
        inputFooter.style.borderColor="red";
    }else{
        document.querySelector('.msg-footer').style.visibility="hidden";
        inputFooter.style.borderColor="black";
    }
});
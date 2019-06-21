let inputType=document.querySelector('#inputtype');
let msg=document.querySelector('#msg');
inputType.addEventListener('keyup',function () {
    let textEntered=inputType.value;
    msg.textContent=textEntered;
    let textLength=textEntered.length;
    if(textLength %2===0){
        inputType.style.backgroundColor= '#311548';

        msg.style.color='#fc4f5b';
    }
    else{
        inputType.style.backgroundColor='#cc0b8d';
        msg.style.color='#1acad9';
    }

});
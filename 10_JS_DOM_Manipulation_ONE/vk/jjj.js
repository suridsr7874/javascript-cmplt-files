let inputField=document.querySelector('#input-field');
let checkBox=document.querySelector('#check-box');
checkBox.addEventListener('change',function () {
    let theAttribute=inputField.getAttribute('type');
    if(theAttribute==='password'){
        inputField.setAttribute('type','text');
    }
    else {
        inputField.setAttribute('type','password');
    }
});


let textareaBox=document.querySelector('#text-area');
let countTag=document.querySelector('#count');
let charCount =100;
textareaBox.addEventListener('keyup',function () {
    let textEnteredLength=textareaBox.value.length;
    countTag.textContent=(charCount - textEnteredLength).toString();

});
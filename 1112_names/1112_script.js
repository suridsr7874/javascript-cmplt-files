let input=document.querySelector('#input');
let msr=document.querySelector('#msr');
input.addEventListener('keyup',function () {
    let textEntered=input.value;
    msr.textContent=reverseString(textEntered);

});



let reverseString=(str)=>{
    let tempStr='';
    for(let i=str.length-1;i>=0;i--){
         tempStr+=str.charAt(i);
    }
    return tempStr;
};
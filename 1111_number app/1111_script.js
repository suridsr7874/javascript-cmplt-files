let numbers = [' ZERO ',' ONE ' , ' TWO ' , ' THREE ' , ' FOUR ', ' FIVE ',' SIX ', ' SEVEN ',' EIGHT ' , ' NINE '];
let convertToWordNumber=(str)=>{
    let tempStr='';
    for(let i=0;i<str.length;i++){
        let digit=Number(str.charAt(i));
        tempStr+=numbers[digit];
    }
    return tempStr;
};

let inputType=document.querySelector('#inputtype');
inputType.addEventListener('keyup',function () {
    let textEntered=inputType.value;
    let stringNumber=convertToWordNumber(textEntered);
    document.querySelector('#dsr').textContent = stringNumber;
});



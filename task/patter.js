let theNumber='523';
let numbers=[' one ',' two ',' three ',' four ',' five ',' six ',' seven ',' eight ',' nine ',' zero '];
let displayWordNumbers=(theNumber)=>{
    let tempStr ='';
    for(let i=0; i<=theNumber.length-1;i++){
        let digit =Number(theNumber.charAt(i));
        tempStr += `${numbers[digit]}`;
    }
    return tempStr;
};
console.log(displayWordNumbers(theNumber));

theNumber=5;
output='';
for(let i=1; i<=theNumber; i++) {
    for (let j = 1; j <= i; j++) {
        output += '*';
    }
    output += '\n';
}
console.log(output);


aNumber=5;
output='';
for(let i =1 ; i<=aNumber; i++){
    for(let j = 1; j<=aNumber; j++){
        output += '*';
    }
    output += '\n';
}
console.log(output);



number=5;
output='';
for(let i =1 ; i>=number; i--){
    for(let j = 1; j<=number; j++){
        output += '*';
    }
    output += '\n';
}
console.log(output);




let triangleOne = (str) => {
    let tempStr = '';
    for(let i=1; i<=str.length;i++){
        tempStr += `${str.substr(0,i)} \n`;
    }
    return tempStr;
};




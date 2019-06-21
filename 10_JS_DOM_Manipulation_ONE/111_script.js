let ss=document.querySelector('#ss');
let rs=document.querySelector('#rs');
rs.addEventListener('change',function () {
    let theAttribute=ss.getAttribute('type');
    if(theAttribute==='password') {
        ss.setAttribute('type', 'text');
    }
        else{
            ss.setAttribute('type','password');
        }

});


let textAreaBox = document.querySelector('#text-area');
let countTag = document.querySelector('#count');
let charCount = 100;
textAreaBox.addEventListener('keyup',function() {
    let textEnteredLength = textAreaBox.value.length;
    countTag.textContent = (charCount - textEnteredLength).toString();
});

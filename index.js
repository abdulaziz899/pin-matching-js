

let createPin=document.getElementById('createPin');
createPin.addEventListener('click',function(){
    document.getElementById('pinCreate').value=pinCreate();
})
// click button pin created;
function pinCreate(){
    let random=Math.random()*10000;
    let pin=(random + '').split('.')[0];
    if(pin.length==4){
        return pin
    }
    else{
        return pinCreate();
    }
}
//typedPin show in display
let typedPin=document.getElementById('typedPin');
typedPin.addEventListener('click',function(event){
    let digit=event.target.innerText;
    let pinDisplay=document.getElementById('pinDisplay').value;
    let displayPin=pinDisplay+digit;
    if (isNaN(digit)) {
        if (digit=='C') {
            document.getElementById('pinDisplay').value=' ';
        }
        if (digit=='B') {
            document.getElementById('pinDisplay').value= pinDisplay.slice(0,-1);
        }
    }


    else{
        document.getElementById('pinDisplay').value=displayPin;
    }
})

let matchPin=document.getElementById('matchPin');
matchPin.addEventListener('click',function(){
    let pinDisplay=document.getElementById('pinDisplay').value;
    let pinCreate= document.getElementById('pinCreate').value;

    if(pinCreate==pinDisplay){
        pinMatching('block','none')
    }
    else{
        pinMatching('none','block')
    }
})

function pinMatching(correctStatus,incorrectStatus) {
    let correct=document.getElementById('correct');
    correct.style.display=correctStatus;
    let incorrect=document.getElementById('incorrect');
    incorrect.style.display=incorrectStatus;
}
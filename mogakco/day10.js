let nameBox = document.getElementById("name");
let callBtn = document.getElementById("call");
callBtn.addEventListener('click', setTimeout(call, 2000));


function call() {
    nameBox.innerText = '김지석';
    callBtn.innerText = '010-1234-5678';
}

/*
function call(){
    setTimeout(function(){
        document.getElementsByClassName('call')[0].style.display = 'none';
        document.getElementsByClassName('name')[0].style.display = 'flex';
        document.getElementsByClassName('number')[0].style.display = 'flex';
    },2000);
}
*/
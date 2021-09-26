let nameBox = document.getElementById("name");
let callBtn = document.getElementById("call");
callBtn.addEventListener('click', setTimeout(call, 2000));


function call() {
    nameBox.innerText = '김지석';
    callBtn.innerText = '010-1234-5678';
}
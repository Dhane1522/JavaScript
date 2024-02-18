function clickfunction(){
    var inputelement = document.getElementById('myinput');
    alert(inputelement.value);
}
function loading(){
    var clickelement = document.getElementById('mybutton');
    clickelement.addEventListener('click', clickfunction);
}
document.addEventListener('DOMContentLoaded', loading);
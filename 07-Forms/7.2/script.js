function clickfunction(){
    var element = document.getElementById('myinput');
    var div = document.getElementById('result');
    div.firstChild.nodeValue= element.value;
}
function loadingfunction(){
    var element = document.getElementById('mybutton');
    element.addEventListener('click', clickfunction);
}
document.addEventListener('DOMContentLoaded', loadingfunction);
function clickfunction(){
    var element = document.getElementById('myinput');
    var div = document.getElementById('result');
    div.firstChild.nodeValue = element.value;
}

function loadingfunction(){
    var element = document.getElementById('myinput');
    element.addEventListener('keyup', clickfunction);
}

document.addEventListener('DOMContentLoaded', loadingfunction);
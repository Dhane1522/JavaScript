function clickevent(){
    alert('The button was pressed.');
}

function loadfunction(){
    var element = document.getElementById('circle');
    element.addEventListener('click', clickevent)
}

document.addEventListener('DOMContentLoaded', loadfunction);
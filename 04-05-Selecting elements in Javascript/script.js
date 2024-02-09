//Changing element by using Id and DOMcontentloaded.

function loadfunction() {
    var element = document.getElementById('title');
    element.firstChild.nodeValue = 'New HeAdInG!!!';

    var element1 = document.getElementById('line1');
    element1.firstChild.nodeValue = 'This is a new first line.';

    var element2 = document.getElementById('line2');
    element2.firstChild.nodeValue = 'This is a new second line.';

    var element3 = document.getElementById('line3');
    element3.firstChild.nodeValue = 'This a new third line.';
    
    var element4 =document.getElementById('line4');
    element4.firstChild.nodeValue = 'This is a new fourth line';

}
document.addEventListener('DOMContentLoaded', loadfunction);

//Changing element by using Id and click.
function clickfunction(){
    var element = document.getElementById('title');
    element.firstChild.nodeValue ='Updated Heading!!!';

    var element1 = document.getElementById('line1');
    element1.firstChild.nodeValue = 'This is the updated line 1 after the click.';

    var element2 = document.getElementById('line2');
    element2.firstChild.nodeValue = 'This is the updated line 2 after the click.';
    
    var element3 = document.getElementById('line3');
    element3.firstChild.nodeValue = 'This is the updated line 3 after the click.';

    var element4 = document.getElementById('line4');
    element4.firstChild.nodeValue = 'This is the updated line 4 after the click.';
}
document.addEventListener('click', clickfunction);

//mouseover
function mouseoverfunction(){
    var element =document.getElementById('title');
    element.firstChild.nodeValue = 'Booooom!!!'
}
document.addEventListener('mouseleave', mouseoverfunction);
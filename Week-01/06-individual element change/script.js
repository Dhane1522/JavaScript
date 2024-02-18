//H1 element gets updated when clicking element H1.
function H1(){
    var element = document.getElementById('title');
    element.firstChild.nodeValue = 'Gitlab';
}
//paragraph element grts updated
function paragraph(){
    var element = document.getElementById('paragraph');
    element.firstChild.nodeValue = 'GitLab Inc. is an open-core company that operates GitLab, a DevOps software package that can develop, secure, and operate software. The open source software project was created by Ukrainian developer Dmytro Zaporozhets and Dutch developer Sytse Sijbrandij. In 2018, GitLab Inc. was considered to be the first partly-Ukrainian unicorn.';
}

function runclick(){
    var element = document.getElementById('title');
    element.addEventListener('click',H1);

    var element = document.getElementById('paragraph');
    element.addEventListener('mouseenter', paragraph);
}

document.addEventListener('DOMContentLoaded', runclick);

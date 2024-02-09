//H1 element gets updated when clicking element H1.
function clickH1(){
    var element = document.getElementById('title');
    element.firstChild.nodeValue = 'Gitlab';
}
document.addEventListener('click',clickH1);

//paragraph gets updated when clicking element p.
function clickp(){
    var element = document.getElementById('paragraph');
    element.firstChild.nodeValue = 'GitLab Inc. is an open-core company that operates GitLab, a DevOps software package that can develop, secure, and operate software.[9] The open source software project was created by Ukrainian developer Dmytro Zaporozhets and Dutch developer Sytse Sijbrandij.[10] In 2018, GitLab Inc. was considered to be the first partly-Ukrainian unicorn.';
}
document.addEventListener('click', clickp);

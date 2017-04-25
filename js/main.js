/**
 * Created by Administrator on 2017/4/25.
 */
var myHeading=document.querySelector("h1");
myHeading.innerHTML="你懂得";

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'img/pic01.png') {
        myImage.setAttribute ('src','img/pic02.png');
    } else {
        myImage.setAttribute ('src','img/pic01.png');
    }
};
var myButton = document.querySelector('button');
function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool, ' + myName;
}
if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}
myButton.onclick = function() {
    setUserName();
};

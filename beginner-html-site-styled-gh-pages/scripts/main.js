let myImage = document.querySelector('img');

myImage.onclick= function () {
        let myImageSrc = myImage.getAttribute('src');
        if (myImageSrc === "images/firefox-icon.png") {
            myImage.setAttribute("src","images/firefox2.png");
        }
        else {
            myImage.setAttribute("src","images/firefox-icon.png");
        }
}
    
let myButton = document.querySelector("button");
let h1 = document.querySelector("h1");
function setUserName() {

    let myName = prompt("Enter Your Name");
    if (!myName) {
        setUserName();
    }
    localStorage.setItem("name", myName);

    h1.textContent = "Hey " + myName;
}
if (!localStorage.getItem('name')) {
    setUserName();
}
else {
    let name=localStorage.getItem("name");
    h1.textContent = "Hey " + name;
}
myButton.onclick = function () {
    setUserName();
}
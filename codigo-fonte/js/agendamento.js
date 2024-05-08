function strokeAnimation() {
    const button = document.getElementById("circleAddVideo");
    const stroke = document.getElementById("strokeUp");
    if(button.checked) {
        stroke.style.transform = "rotate(0deg)";
    } else {
        stroke.style.transform = "rotate(90deg)";
    }
}

function openVideoMenu() {
    const button = document.getElementById("circleAddVideo");
    const logoMenu = document.getElementById("menuLogo");
    const iconMenu = document.getElementById("menuIcon");
    const menuButton = document.getElementById("menuButton");
    if(button.checked) {
        menuButton.style.visibility= "visible";
    } else {
        menuButton.style.visibility = "hidden";
    }
}

function teste() {
    strokeAnimation();
    openVideoMenu()
}

function openMenu() {}
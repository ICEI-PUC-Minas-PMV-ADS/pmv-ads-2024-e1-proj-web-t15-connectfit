
// BOTAO ADICIONAR VIDEO
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

// SIDEBAR

function closeMenu() {
    const menu = document.getElementById("side_items");
     menu.style.right = "-100%";
}

function openMenu() {
    const menu = document.getElementById("side_items");
     menu.style.right = "0.1rem";
}

// UPLOAD VIDEO

function closeUpload () {
    const upload = document.getElementById("uploadVideo");

    upload.style.display="none";
     
}

function openUpload() {
    const upload = document.getElementById("uploadVideo");

    upload.style.display="block";
}

// INICIAR TRANSMISSÃO

function closeLive() {
    const live = document.getElementById("startLive");

    live.style.display="none";
}

function openLive() {
    const live = document.getElementById("startLive");

    live.style.display="block";
}

// ANIMAÇÃO INPUT - ADD VIDEOS

function focusInput() {
    const titulos = document.querySelectorAll('.question h3');
    const inputs = document.querySelectorAll('.question input');

    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            titulos.forEach(titulo => {
                titulo.style.fontSize = "1rem";
                titulo.style.transform = "translateY(0)";
            });
            console.log('O input está em foco!');
        });

        input.addEventListener('blur', () => {
            titulos.forEach(titulo => {
                titulo.style.fontSize = "1.3rem"; // Retorna ao estado original
                titulo.style.transform = "translateY(80%)"; // Retorna ao estado original
            });
            console.log('O input perdeu o foco!');
        });
    });
}

// MAINS

function switchMain1() {
    const main1 = document.getElementById('main1');
    const main2 = document.getElementById('main2');
    const firstH3 = document.querySelector('.controlbarContainer h3:first-child');
    const lastH3 = document.querySelector('.controlbarContainer h3:last-child');
    const underline = document.getElementsByClassName('underline');

    main1.style.display = "none"
    main2.style.display = "block";
    firstH3.style.color = "var(--black)";
    lastH3.style.color = "var(--darkOrange)";
    underline.style.transform = "translateX(60vw)";
}

function switchMain2() {
    main1 = document.getElementById('main1');
    main2 = document.getElementById('main2');
    firstH3 = document.querySelector('.controlbarContainer h3:first-child');
    lastH3 = document.querySelector('.controlbarContainer h3:last-child');

    main1.style.display = "block";
    main2.style.display = "none";
    firstH3.style.color = "var(--darkOrange)";
    lastH3.style.color = "var(--black)";
    underline.style.transform = "translateX(17vw)";
}

// CRUD - VIDEOS


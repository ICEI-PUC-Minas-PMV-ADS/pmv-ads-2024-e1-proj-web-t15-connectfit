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

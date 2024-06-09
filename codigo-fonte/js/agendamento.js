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

// CARREGAR VIDEOS 

document.addEventListener('DOMContentLoaded', function () {
    function loadVideosForYou() {
        // Obtém todos os vídeos armazenados no localStorage
        const videos = JSON.parse(localStorage.getItem("myVideos")) || [];
        const forYouContainer = document.getElementById("foryou");

        // Verifica se algum vídeo foi recuperado
        console.log("Vídeos recuperados:", videos);

        // Verifica se o elemento forYouContainer foi encontrado
        if (!forYouContainer) {
            console.error('Elemento #foryou não encontrado no DOM.');
            return;
        }

        // Limpa o conteúdo atual da div #foryou
        forYouContainer.innerHTML = "";

        // Itera sobre cada vídeo e cria elementos HTML para exibi-los
        videos.forEach(video => {
            const vid = document.createElement("div");
            vid.className = "videoFY";
            vid.innerHTML = `
                <a href="${video.link}">
                    <div class="videoFYBanner" style="background-image: url('${video.thumbnail}'); background-size: cover; background-position: center;"></div>
                    <div class="infoFY">
                        <div>
                            <h3>${video.titulo}</h3>
                        </div>
                    </div>
                </a>`;
            forYouContainer.appendChild(vid);
        });
    }

    loadVideosForYou();
});
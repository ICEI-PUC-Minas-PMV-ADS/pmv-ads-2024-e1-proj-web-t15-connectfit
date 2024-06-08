// BOTAO ADICIONAR VIDEO
function strokeAnimation() {
    const button = document.getElementById("circleAddVideo");
    const stroke = document.getElementById("strokeUp");
    if (button.checked) {
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
    if (button.checked) {
        menuButton.style.visibility = "visible";
    } else {
        menuButton.style.visibility = "hidden";
    }
}

function teste() {
    strokeAnimation();
    openVideoMenu()
}

// UPLOAD VIDEO

function closeUpload() {
    const upload = document.getElementById("uploadVideo");

    upload.style.display = "none";

}

function openUpload() {
    const upload = document.getElementById("uploadVideo");

    upload.style.display = "block";
}

// INICIAR TRANSMISSÃO

function closeLive() {
    const live = document.getElementById("startLive");

    live.style.display = "none";
}

function openLive() {
    const live = document.getElementById("startLive");

    live.style.display = "block";
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

// ANIMAÇÃO INPUT - ADD VIDEOS

function focusInput() {
    const titulos = document.querySelectorAll('.question h3');
    const inputs = document.querySelectorAll('.question input');

    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            titulos.forEach(titulo => {

                titulo.style.transform = "translateY(0)";
                titulo.style.fontSize = "1rem";
            });
        });

        input.addEventListener('blur', () => {
            titulos.forEach(titulo => {
                titulo.style.transform = "translateY(80%)"; // Retorna ao estado original
                titulo.style.fontSize = "1.3rem"; // Retorna ao estado original
            });
        });
    });
}

// CRUD - VIDEOS

var myVideos = []
let i = 0;
const containerVideos = document.getElementById("myVideosContainer");
const titulo = document.getElementById("titulo");
const link = document.getElementById("link");
const thumbnail = document.getElementById("thumbnail");
const myBanner = document.getElementsByClassName("myBanner")

function newVideo(id, tipo, titulo, link, duracao) {
    this.id = id;
    this.tipo = tipo;
    this.titulo = titulo;
    this.link = link;
    this.duracao = duracao;
}

// NOVO VIDEO - CARREGAR VIDEO

if (localStorage.getItem('profileImg') !== null &&
    localStorage.getItem('nome-que-quero-ser-chamado') !== null &&
    localStorage.getItem('nome') !== null &&
    localStorage.getItem('idade') !== null &&
    localStorage.getItem('academias') !== null &&
    localStorage.getItem('localizacao') !== null &&
    localStorage.getItem('about') !== null) {

    // Carrega os valores do localStorage
    var profileImg = localStorage.getItem('profileImg');
    var nomeQueQueroSerChamado = localStorage.getItem('nome-que-quero-ser-chamado');
    var nome = localStorage.getItem('nome');
    var idade = localStorage.getItem('idade');
    var academias = localStorage.getItem('academias');
    var localizacao = localStorage.getItem('localizacao');
    var about = localStorage.getItem('about');

}

function addNewVideo() {

    if (thumbnail.value === "" || titulo.value === "" || link.value === "") {
        alert("Você precisa preencher todos os campos!")
        console.log(titulo.value, link.value)
    } else {
        console.log("tudo certo")

        let vid = document.createElement("div.myVideo")
        vid.innerHTML = `          <div class="myVideo">
        <div class="myBanner" style="background-image: url('${thumbnail.value}'); background-size: cover; background-position: center;">
        </div>
        <div class="myFirstCol">
          <h4> TÍTULO:</h4>
          <p>${titulo.value}</p>
          <h4> LINK:</h4>
          <p>${link.value}</p>
        </div>
        <div class="mySecondCol">
          <a href="#" class="delete">
            <i class="fa-solid fa-trash"></i>
            Excluir
          </a>
        </div>
      </div>
      
      <div class="straight-line></div>"`

        containerVideos.append(vid)
    }
    titulo.value = "";
    link.value = "";
    thumbnail.value = "";
    saveData()
}

containerVideos.addEventListener("click", function (e) {
    if (e.target.classList.contains("delete")) {
        e.target.parentElement.parentElement.remove()
        saveData()
    }
}, false)

function saveData() {
    localStorage.setItem("videos", containerVideos.innerHTML)
}

function showVideos() {
    containerVideos.innerHTML = localStorage.getItem("videos")
}

showVideos()
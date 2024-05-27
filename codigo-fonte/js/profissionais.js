function escondeProfissionais(){
    document.getElementById("fisioterapeutas").style.display = "none";
    document.getElementById("personais").style.display = "none";
}

function exibirProfissionais(tipoProfissonal) {
    escondeProfissionais();
    var divListaFisioterapeutas = document.getElementById(tipoProfissonal);
    divListaFisioterapeutas.style.display = "flex";
}


const botoesSeguir = document.querySelectorAll(".seguir");

for (const botao of botoesSeguir) {
    botao.addEventListener('click', function(e) {
        const botaoSeguir = e.target;
        botaoSeguir.innerHTML = botaoSeguir.innerHTML === "Seguir" ? "Seguindo" : "Seguir";
    });
}
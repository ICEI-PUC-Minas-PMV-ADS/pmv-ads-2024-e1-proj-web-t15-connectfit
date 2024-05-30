function escondeProfissionais(){
    document.getElementById("fisioterapeutas").style.display = "none";
    document.getElementById("personais").style.display = "none";
    document.getElementById("medicos").style.display = "none";
    document.getElementById("nutricionistas").style.display = "none";
}

function exibirProfissionais(tipoProfissonal) {
    escondeProfissionais();
    var divListaProfissionais = document.getElementById(tipoProfissonal);
    divListaProfissionais.style.display = "flex";
    aplicaListenerBotoesSeguirPorProfissionais(tipoProfissonal);
}

function aplicaListenerBotoesSeguirPorProfissionais(tipoProfissonal){
    const divTipoProfissional = document.getElementById(tipoProfissonal);
    const botoesSeguir = divTipoProfissional.querySelectorAll(".seguir");
    for (const botao of botoesSeguir) {
        if (botao && !botao.hasAttribute('listenerOnClick')){
            botao.addEventListener('click', function(e) {
                const botaoSeguir = e.target;
                botaoSeguir.innerHTML = botaoSeguir.innerHTML === "Seguir" ? "Seguindo" : "Seguir";
                botao.setAttribute('listenerOnClick', 'true');
            });
        }
    }
}
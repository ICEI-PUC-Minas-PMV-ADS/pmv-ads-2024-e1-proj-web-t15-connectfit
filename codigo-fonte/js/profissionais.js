const botoesSeguir = document.querySelectorAll(".seguir");

for (const botao of botoesSeguir) {
    botao.addEventListener('click', function(e) {
        const botaoSeguir = e.target;
        botaoSeguir.innerHTML = botaoSeguir.innerHTML === "Seguir" ? "Seguindo" : "Seguir";
    });
}

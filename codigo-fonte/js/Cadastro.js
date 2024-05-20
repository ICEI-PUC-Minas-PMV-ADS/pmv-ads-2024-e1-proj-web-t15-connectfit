function registerUser(event) {
    event.preventDefault(); // Evita o envio do formulário

    const nome = document.forms['register']['nome'].value;
    const nomeExibicao = document.forms['register']['nomeExibicao'].value;
    const email = document.forms['register']['email'].value;
    const senha = document.forms['register']['senha'].value;

    // Cria um objeto com os dados do usuário
    const user = {
        nome: nome,
        nomeExibicao: nomeExibicao,
        email: email,
        senha: senha
    };

    // Converte o objeto para uma string JSON e armazena no localStorage
    localStorage.setItem('user', JSON.stringify(user));

    // Redireciona para a página "meuperfil.html"
    window.location.href = "meuperfil.html";
}

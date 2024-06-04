function registerUser(event) {
    event.preventDefault(); // Evita o envio do formulário

    const nome = document.forms['register']['nome'].value;
    const nomeExibicao = document.forms['register']['nomeExibicao'].value;
    const email = document.forms['register']['email'].value;
    const senha = document.forms['register']['senha'].value;
    const idade = parseInt(document.forms['register']['idade'].value);

    // Verifica se a idade é menor que 18
    if (idade < 18) {
        alert("Você deve ter pelo menos 18 anos para se registrar.");
        return; // Interrompe a execução da função
    }

    // Cria um objeto com os dados do usuário
    const user = {
        nome: nome,
        nomeExibicao: nomeExibicao,
        email: email,
        senha: senha,
        idade: idade
    };

    // Converte o objeto para uma string JSON e armazena no localStorage
    localStorage.setItem('user', JSON.stringify(user));

    // Redireciona para a página "meuperfil.html"
    window.location.href = "meuperfil.html";
}

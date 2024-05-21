document.getElementById('reset-password-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const newPassword = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Valida se as senhas coincidem
    if (newPassword !== confirmPassword) {
        alert('As senhas não coincidem.');
        return;
    }

    // Opcional: Validação adicional da senha (ex: comprimento mínimo, caracteres especiais, etc.)
    if (newPassword.length < 6) {
        alert('A senha deve ter pelo menos 6 caracteres.');
        return;
    }

    // Obtém os usuários do LocalStorage
    let users = JSON.parse(localStorage.getItem('users')) || {};

    // Verifica se o usuário existe
    if (!users[username]) {
        alert('Usuário não encontrado.');
        return;
    }

    // Atualiza a senha do usuário
    users[username] = newPassword;

    // Salva os usuários atualizados no LocalStorage
    localStorage.setItem('users', JSON.stringify(users));

    alert('Senha redefinida com sucesso!');
});

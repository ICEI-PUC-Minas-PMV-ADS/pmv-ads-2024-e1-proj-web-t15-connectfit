document.addEventListener('DOMContentLoaded', function() {
    // Carregar dados do localStorage
    loadProfileData();

    document.getElementById('profile-form').addEventListener('submit', function(event) {
        event.preventDefault();
        saveProfileData();
        alert('Perfil salvo com sucesso!');
    });

    document.getElementById('alterar-senha').addEventListener('click', function() {
        document.getElementById('modal-alterar-senha').style.display = 'block';
    });

    document.querySelector('.close-button').addEventListener('click', function() {
        document.getElementById('modal-alterar-senha').style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == document.getElementById('modal-alterar-senha')) {
            document.getElementById('modal-alterar-senha').style.display = 'none';
        }
    });

    document.getElementById('upload-photo').addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                document.getElementById('profile-img').src = e.target.result;
                localStorage.setItem('profileImg', e.target.result);
            };
            reader.readAsDataURL(file);
        }
    });

    document.getElementById('form-alterar-senha').addEventListener('submit', function(event) {
        event.preventDefault();
        const novaSenha = document.getElementById('nova-senha').value;
        const confirmarSenha = document.getElementById('confirmar-senha').value;

        if (novaSenha === confirmarSenha) {
            alert('Senha alterada com sucesso!');
            document.getElementById('modal-alterar-senha').style.display = 'none';
            localStorage.setItem('password', novaSenha); // Salvando a senha no localStorage (para fins de exemplo)
        } else {
            alert('As senhas não coincidem. Por favor, tente novamente.');
        }
    });
});

function saveProfileData() {
    const login = document.getElementById('login').value;
    const nome = document.getElementById('nome').value;
    const birthdate = document.getElementById('birthdate').value;
    const telefone = document.getElementById('telefone').value;
    const celular = document.getElementById('celular').value;
    const prestador = document.getElementById('prestador').value;

    localStorage.setItem('login', login);
    localStorage.setItem('nome', nome);
    localStorage.setItem('birthdate', birthdate);
    localStorage.setItem('telefone', telefone);
    localStorage.setItem('celular', celular);
    localStorage.setItem('prestador', prestador);
}

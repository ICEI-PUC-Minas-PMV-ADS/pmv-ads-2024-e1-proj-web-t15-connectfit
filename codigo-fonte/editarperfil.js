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

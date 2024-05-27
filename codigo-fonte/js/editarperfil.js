// function toggleMenu() {
//     var menu = document.getElementById("menu");
//     menu.classList.toggle("active")
// }

document.addEventListener('DOMContentLoaded', function() {
    // Carregar dados do localStorage
    loadProfileData();

    document.getElementById('profile-form').addEventListener('submit', function(event) {
        event.preventDefault();
        saveProfileData();
        alert('Perfil salvo com sucesso!');
        window.location.href = "meuperfil.html";
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
            localStorage.setItem('password', novaSenha);
        } else {
            alert('As senhas não coincidem!');
        }
    });
});

function saveProfileData() {
    const login = document.getElementById('login').value;
    const nome = document.getElementById('nome').value;
    const birthdate = document.getElementById('birthdate').value;
    const idade = document.getElementById('idade').value;
    const telefone = document.getElementById('telefone').value;
    const celular = document.getElementById('celular').value;
    const prestador = document.getElementById('prestador').value;
    const academias = document.getElementById('academias').value;
    const localizacao = document.getElementById('localizacao').value;
    const nomeQueQueroSerChamado = document.getElementById('nome-que-quero-ser-chamado').value;
    const about = document.getElementById('about').value;

    localStorage.setItem('login', login);
    localStorage.setItem('nome', nome);
    localStorage.setItem('birthdate', birthdate);
    localStorage.setItem('idade', idade);
    localStorage.setItem('telefone', telefone);
    localStorage.setItem('celular', celular);
    localStorage.setItem('prestador', prestador);
    localStorage.setItem('academias', academias);
    localStorage.setItem('localizacao', localizacao);
    localStorage.setItem('nome-que-quero-ser-chamado', nomeQueQueroSerChamado);
    localStorage.setItem('about', about);

    const profileImg = document.getElementById('profile-img').src;
    if (profileImg) {
        localStorage.setItem('profileImg', profileImg);
    }

    // Redireciona para a página "meuperfil.html"
    window.location.href = "meuperfil.html";
}

function loadProfileData() {
    const login = localStorage.getItem('login');
    const nome = localStorage.getItem('nome');
    const birthdate = localStorage.getItem('birthdate');
    const idade = localStorage.getItem('idade');
    const telefone = localStorage.getItem('telefone');
    const celular = localStorage.getItem('celular');
    const prestador = localStorage.getItem('prestador');
    const academias = localStorage.getItem('academias');
    const localizacao = localStorage.getItem('localizacao');
    const about = localStorage.getItem('about');
    const nomeQueQueroSerChamado = localStorage.getItem('nome-que-quero-ser-chamado');
    const profileImg = localStorage.getItem('profileImg');

    if (login) {
        document.getElementById('login').value = login;
    }
    if (nome) {
        document.getElementById('nome').value = nome;
    }
    if (birthdate) {
        document.getElementById('birthdate').value = birthdate;
    }
    if (idade) {
        document.getElementById('idade').value = idade;
    }
    if (telefone) {
        document.getElementById('telefone').value = telefone;
    }
    if (celular) {
        document.getElementById('celular').value = celular;
    }
    if (prestador) {
        document.getElementById('prestador').value = prestador;
    }
    if (academias) {
        document.getElementById('academias').value = academias;
    }
    if (localizacao) {
        document.getElementById('localizacao').value = localizacao;
    }
    if (about) {
        document.getElementById('about').value = about;
    }
    if (nomeQueQueroSerChamado) {
        document.getElementById('nome-que-quero-ser-chamado').value = nomeQueQueroSerChamado;
    }    
    if (profileImg) {
        document.getElementById('profile-img').src = profileImg;
    }
}

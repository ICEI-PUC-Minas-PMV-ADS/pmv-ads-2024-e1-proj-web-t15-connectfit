function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("active")
}

document.addEventListener("DOMContentLoaded", function() {
    // Verifica se há dados armazenados no localStorage
    if(localStorage.getItem('profileImg') !== null &&
       localStorage.getItem('login') !== null &&
       localStorage.getItem('nome') !== null &&
       localStorage.getItem('idade') !== null &&
       localStorage.getItem('academias') !== null &&
       localStorage.getItem('localizacao') !== null) {
        
        // Carrega os valores do localStorage
        var profileImg = localStorage.getItem('profileImg');
        var login = localStorage.getItem('login');
        var nome = localStorage.getItem('nome');
        var idade = localStorage.getItem('idade');
        var academias = localStorage.getItem('academias');
        var localizacao = localStorage.getItem('localizacao');
        
        // Atribui os valores aos elementos HTML
        document.getElementById('user-Photo').src = profileImg;
        document.getElementById('user-Name').textContent = login;
        document.getElementById('user-Full-Name').textContent = nome;
        document.getElementById('user-Age').textContent = idade;
        document.getElementById('user-Gyms').textContent = academias;
        document.getElementById('user-Location').textContent = localizacao;
    } else {
        // Caso não haja dados no localStorage, exibe uma mensagem de erro ou realiza outra ação apropriada
        console.log('Dados não encontrados no localStorage.');
    }
});


// document.addEventListener('DOMContentLoaded', function() {

//     //Simulando dados do usuário

//     var userData = {
//         photo: 'img/foto_menu-meuperfil.png',
//         name: 'Sophia',
//         fullName: 'Sophia Ferreira Nunes',
//         age: '25 anos',
//         description: 'Eu sou apaixonada por esportes e academia! Adoro me manter ativa e praticar diferentes atividades, como musculação, corrida, natação e futebol.',
//         gyms: 'Academia Corpo em Forma',
//         location: 'Aimorés - MG'
//     };

//     //Inserindo os dados do usuário na página
    
//     document.getElementById('user-Photo').src = userData.photo;
//     document.getElementById('user-Name').textContent = userData.name;
//     document.getElementById('user-Full-Name').textContent = userData.fullName;
//     document.getElementById('user-Age').textContent = userData.age;
//     document.getElementById('user-Description').textContent = userData.description;
//     document.getElementById('user-Gyms').textContent = userData.gyms;
//     document.getElementById('user-Location').textContent = userData.location;
// });

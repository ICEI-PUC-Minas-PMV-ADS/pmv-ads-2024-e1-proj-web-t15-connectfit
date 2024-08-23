function previaImagem() {
  var preview = document.getElementById("previaImagem");
  preview.style.display = "flex";
  const file = document.getElementById("upload").files[0];
  const reader = new FileReader();

  reader.addEventListener(
    "load",
    () => {
      preview.src = reader.result;
    },
    false
  );

  if (file) {
    reader.readAsDataURL(file);
  }
}

function publicarPostagem() {
  var textoASerPublicado = document.getElementById("textoPulicacao").value;
  var previaImagem = document.getElementById("previaImagem");
  var upload = document.getElementById("upload").files[0];

  if (!textoASerPublicado) {
      alert("Por favor preencha a mensagem a ser publicada!");
  } else {
      // Obter dados do usuário do localStorage
      var profileImg = localStorage.getItem('profileImg');
      var nomeQueQueroSerChamado = localStorage.getItem('nome-que-quero-ser-chamado');
      var login = localStorage.getItem('login');
      var conteudoHTMLImg = "";
      if (upload){
        conteudoHTMLImg = "<img src='" + previaImagem.src + "' alt='Foto Postada'></img>";  
      }
      // Criar o elemento de postagem
      var novaDivCriada = document.createElement("div");
      novaDivCriada.classList.add("post");

      // Construir a postagem com os dados do usuário
      novaDivCriada.innerHTML = "<div class='icone-perfil'><img src='" + profileImg + "' alt='" + nomeQueQueroSerChamado + "'>" + nomeQueQueroSerChamado +
                                "</div><p class='texto-post'>" + textoASerPublicado + "</p>"+conteudoHTMLImg+
                                "<div class='comentarios'><span class='comentarios-titulo'>Comentários</span><p>Ainda não há comentarios nesse post. Seja o primeiro a comentar</p>"+
                                "<div class='novo-comentario'><input id='novo-comentario-texto' type='text'><button class='novo-comentario-salvar' type='button' onclick='comentar(event)'>Comentar</button></div></div>"+
                                "<div class='curtir'><i class='fa fa-thumbs-o-up' onclick='curtir(event)'></i>"+
                                "<i class='fa fa-trash' id=remove-post-"+login+" onclick='removerPostagem(event)' aria-hidden='true'></i></div>";

      // Inserir a postagem no início do contêiner de postagens
      var postsContainer = document.getElementById("posts");
      postsContainer.insertBefore(novaDivCriada, postsContainer.firstChild);

      // Limpar campos e redefinir a prévia da imagem
      document.getElementById("textoPulicacao").value = "";
      previaImagem.src = "";
      previaImagem.style.display = "none";
      document.getElementById("upload").value = "";
  }
}


function abrirCaixaPublicarEvento(idDivDiaCalendarioClicado) {
  var divDiaCalendarioClicado = document.getElementById(idDivDiaCalendarioClicado);
  var divCaixaPublicarEvento = document.getElementById('publicaEvento');
  divCaixaPublicarEvento.style.display = "block";
  var divGuardarIdCalendario = document.getElementById('idGuardaiDDIvCalendario');
  divGuardarIdCalendario.innerHTML = idDivDiaCalendarioClicado;
  divGuardarIdCalendario.style.display = "none";
  document.getElementById('dataEvento').innerHTML = idDivDiaCalendarioClicado;
  document.getElementById('textoPublicacaoEvento').value = divDiaCalendarioClicado.innerHTML;
}

function salvarEventoCalendario() {
  var idDivDiaCalendaASalvar = document.getElementById('idGuardaiDDIvCalendario').innerHTML;
  var divCalendarioCalendaASalvar = document.getElementById(idDivDiaCalendaASalvar);
  textoPublicacaoEvento = document.getElementById('textoPublicacaoEvento').value;
  divCalendarioCalendaASalvar.innerHTML = textoPublicacaoEvento;
  divCalendarioCalendaASalvar.classList.add('event');
  document.getElementById('publicaEvento').style.display = "none";
}

function comentar(e) {
  var post = e.target.closest('.post');
  var novoComentario = post.querySelector('#novo-comentario-texto');
  var textoComentario = novoComentario.value;
  novoComentario.value = '';
  if (textoComentario.trim() === '') {
    return;
  }

  var nenhumComentario = post.querySelector('.comentarios > p');

  if (nenhumComentario) {
    nenhumComentario.remove();
  }

  var comentarios = post.querySelector('.comentarios ul');
  if (!comentarios) {
    comentarios = document.createElement('ul');
    divPublicacaoTextoComentario = post.querySelector('.novo-comentario');
    post.querySelector('.comentarios').insertBefore(comentarios, divPublicacaoTextoComentario);
  }

  // Busca os dados do usuário no localStorage
  var profileImg = localStorage.getItem('profileImg');
  var nomeQueQueroSerChamado = localStorage.getItem('nome-que-quero-ser-chamado');

  // Cria o novo comentário usando os dados do localStorage

  var comentario = document.createElement('li');
  comentario.classList.add('comentario');
  comentario.innerHTML = '<img class="comentario-avatar" src="' + profileImg + '"><span class="comentario-autor">' + nomeQueQueroSerChamado + '</span><p class="comentario-texto">' + textoComentario + '</p>';
  comentarios.appendChild(comentario);
}
  
  function adicionarComentario(textoComentario) {
    var comentario = document.createElement('li');
    comentario.classList.add('comentario');
    comentario.innerHTML = `<img class="comentario-avatar" src="${profileImg}"><span class="comentario-autor">Sophia</span><p class="comentario-texto">${textoComentario}</p>`;
    document.getElementById('comentarios').appendChild(comentario);
}


function curtir(e) {
  var curtido = e.target.classList.contains('fa-thumbs-up');
  if (curtido) {
    e.target.classList.remove('fa-thumbs-up');
    e.target.classList.add('fa-thumbs-o-up');
  } else {
    e.target.classList.remove('fa-thumbs-o-up');
    e.target.classList.add('fa-thumbs-up');
  }
}

function aplicaListenerBotoesSeguirPorProfissionais(tipoProfissonal) {
  const divTipoProfissional = document.getElementById(tipoProfissonal);
  const botoesSeguir = divTipoProfissional.querySelectorAll(".seguir");
  botoesSeguir.forEach(botao => {
    botao.addEventListener('click', function (e) {
      const botaoSeguir = e.target;
      botaoSeguir.innerHTML = botaoSeguir.innerHTML === "Seguir" ? "Seguindo" : "Seguir";
    });
  });
}

document.addEventListener("DOMContentLoaded", function() {
  aplicaListenerBotoesSeguirPorProfissionais('posts');
});

function seguir(e) {
  var botaoSeguir = e.target;
  var post = botaoSeguir.closest('.post');
  var nomeUsuario = post.querySelector('.icone-perfil').textContent.trim();
  var imgSrc = post.querySelector('.icone-perfil img').src;

  if (botaoSeguir.innerHTML === "Seguir") {
    botaoSeguir.innerHTML = "Seguindo";

    var seguindoContainer = document.getElementById("seguindo");
    var novoSeguindo = document.createElement("a");
    novoSeguindo.classList.add("icone-perfil");
    novoSeguindo.href = "#";
    novoSeguindo.innerHTML = `<img src="${imgSrc}" alt="${nomeUsuario}"> ${nomeUsuario}`;
    seguindoContainer.appendChild(novoSeguindo);
  } else {
    botaoSeguir.innerHTML = "Seguir";

    var seguindoContainer = document.getElementById("seguindo");
    var seguindoPerfis = seguindoContainer.querySelectorAll(".icone-perfil");
    seguindoPerfis.forEach(perfil => {
      if (perfil.textContent.trim() === nomeUsuario) {
        seguindoContainer.removeChild(perfil);
      }
    });
  }
}

function tratarBotoesRemoverPost() {
  var login = "";
  if (localStorage.getItem('login') != null){
    login = localStorage.getItem('login');
  }
  const botoesRemoverPost = document.querySelectorAll(".fa-trash");
  for (const botao of botoesRemoverPost) {
    if (botao.id == 'remove-post-'+login){
      botao.style.display = 'flex';
    }else{
      botao.style.display = 'none';
    }
  }
}

function removerPostagem(e) {
  if (confirm("Você deseja realmente excluir a postagem?")) {
    var botaoRemoverPost = e.target;
    var post = botaoRemoverPost.closest('.post');
    post.remove();
  }
}

document.addEventListener("DOMContentLoaded", function() {
  aplicaListenerBotoesSeguirPorProfissionais('posts');

  tratarBotoesRemoverPost();

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
      var nomeQueQueroSerChamado = localStorage.getItem('nome-que-quero-ser-chamado');
      
      // Atribui os valores aos elementos HTML
      document.getElementById('user-Photo').src = profileImg;
      document.getElementById('user-Name').textContent = login;
      document.getElementById('user-Full-Name').textContent = nome;
      document.getElementById('user-Age').textContent = idade;
      document.getElementById('user-Gyms').textContent = academias;
      document.getElementById('user-Location').textContent = localizacao;
      document.getElementById('user-Alias').textContent = nomeQueQueroSerChamado;
      
  } else {

      // Caso não haja dados no localStorage, exibe uma mensagem de erro ou realiza outra ação apropriada
      console.log('Dados não encontrados no localStorage.');
  }
});


  

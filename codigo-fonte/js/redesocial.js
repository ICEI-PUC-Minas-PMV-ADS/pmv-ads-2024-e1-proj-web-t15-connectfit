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
  if (!textoASerPublicado || !previaImagem.src) {
    alert("Por favor preencha todos os campos antes e publicar a mensagem (inclusive upload da imagem a ser publicada)!");
  } else {
    var novaDivCriada = document.createElement("div");
    novaDivCriada.classList.add("post");
    var srcPreviaImagem = previaImagem.src;
    novaDivCriada.innerHTML = "<div class='icone-perfil'><img src='img/foto_menu.png' alt='Sofia'>Sofia</div><p class='texto-post'>" + textoASerPublicado + "</p><img src='" + srcPreviaImagem + "' alt='Foto Postada'>";
    var primeiraDivPost = document.querySelectorAll(".post")[0];
    primeiraDivPost.parentElement.insertBefore(novaDivCriada, primeiraDivPost);
    document.getElementById("textoPulicacao").value = "";
    previaImagem.src = "";
    previaImagem.style.display = "none";
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
    post.querySelector('.comentarios').appendChild(comentarios);
  }

  var comentario = document.createElement('li');
  comentario.classList.add('comentario');
  comentario.innerHTML = '<img class="comentario-avatar" src="img/foto_menu.png"><span class=comentario-autor>Sophia</span><p class="comentario-texto">' + textoComentario + '</p>';
  comentarios.appendChild(comentario);
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

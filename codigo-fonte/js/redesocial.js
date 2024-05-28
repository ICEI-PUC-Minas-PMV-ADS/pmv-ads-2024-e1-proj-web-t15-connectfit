function previaImagem() {
    const preview = document.getElementById("previaImagem");
    const file = document.getElementById("upload").files[0];
    const reader = new FileReader();
  
    reader.addEventListener(
      "load",
      () => {
        // convert image file to base64 string
        preview.src = reader.result;
      },
      false,
    );
  
    if (file) {
      reader.readAsDataURL(file);
    }
  }

function publicarPostagem(){
    var textoASerPublicado = document.getElementById("textoPulicacao").value;
    var previaImagem = document.getElementById("previaImagem");
    if (!textoASerPublicado || !previaImagem){
        alert("Por favor preencha todos os campos antes e publicar a mensagem (inclusive upload da imagem a ser publicada)!");    
    }else{
        var novaDivCriada = document.createElement("div");
        novaDivCriada.classList.add("post");
        var srcPreviaImagem = document.getElementById("previaImagem").src;
        novaDivCriada.innerHTML = "<div class='icone-perfil'><img src='img/foto_menu.png' alt='Sofia'>Sofia</div><p class='texto-post'>"+textoASerPublicado+"</p><img src='"+srcPreviaImagem+"' alt='Foto Sofia'>";
        var primeiraDivPost = document.querySelectorAll(".post")[0];
        primeiraDivPost.parentElement.insertBefore(novaDivCriada, primeiraDivPost);
        textoASerPublicado = document.getElementById("textoPulicacao").value = "";
        previaImagem.src = "";
    }
}

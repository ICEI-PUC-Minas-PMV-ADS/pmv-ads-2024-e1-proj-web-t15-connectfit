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
    alert(srcTemporarioCriado);
    var textoASerPublicado = document.getElementById("textoPulicacao").value;

    if (!textoASerPublicado || inputImagemOrigem.files.length == 0){
        alert("Por favor preencha todos os campos antes e publicar a mensagem (inclusive upload da imagem a ser publicada)!");    
    }else{
        var novaDivCriada = document.createElement("div");
        novaDivCriada.classList.add("post");
        novaDivCriada.innerHTML = "<div class='icone-perfil'><img src='img/foto_menu.png' alt='Sofia'>Sofia</div><p class='texto-post'>"+textoASerPublicado+"</p><img src='' alt='Foto Sofia'>";
        var primeiraDivPost = document.querySelectorAll(".post")[0];
        primeiraDivPost.parentElement.insertBefore(novaDivCriada, primeiraDivPost);
        textoASerPublicado = document.getElementById("textoPulicacao").value = "";
    }
}

const leitorDeArquivos = new FileReader();
var srcTemporarioCriado;

 //pega o arquivo de imagem carregado e guarda nesta variavel
var inputImagemOrigem = document.getElementById("upload");
//pega o arquivo carregado e guarda nesta variavel
let imagemCarregada = inputImagemOrigem.files[0];

//Usa a função do objeto leitor de arquivos, que lê o arquivo, e consegue reaproveita-lo para usar o arquivo como uma URL
//leitorDeArquivos.readAsDataURL(imagemCarregada);

//Após leitura da imagem (evento load), a função de callback define o valor do src da imagem de prévia com o valor do resultado da leitura do leitor de arquivos
leitorDeArquivos.addEventListener('loadend', function(load){
    //define o caminho da imagem com o caminho criado pelo leitor de arquivos
    srcTemporarioCriado = load.target.result
});

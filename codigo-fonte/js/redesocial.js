function publicarPostagem(){
    var textoASerPublicado = document.getElementById("textoPulicacao").value;
    if (!textoASerPublicado){
        alert("Por favor digite o texto da Publicação!");    
    }else{
        var novaDivCriada = document.createElement("div");
        novaDivCriada.classList.add("post");
        novaDivCriada.innerHTML = "<div class='icone-perfil'><img src='img/foto_menu.png' alt='Sofia'>Sofia</div><p class='texto-post'>"+textoASerPublicado+"</p><img src='img/img1.png' alt='Foto Sofia'>";
        var primeiraDivPost = document.querySelectorAll(".post")[0]
        primeiraDivPost.parentElement.insertBefore(novaDivCriada, primeiraDivPost);
        textoASerPublicado = document.getElementById("textoPulicacao").value = "";
    }
}
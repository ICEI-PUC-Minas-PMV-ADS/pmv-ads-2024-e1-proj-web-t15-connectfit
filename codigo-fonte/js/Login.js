const exampleModal = document.getElementById('exampleModal')
exampleModal.addEventListener('show.bs.modal', event => {
  // Button that triggered the modal
  const button = event.relatedTarget
  // Extract info from data-bs-* attributes
  const recipient = button.getAttribute('data-bs-whatever')
  // If necessary, you could initiate an AJAX request here
  // and then do the updating in a callback.
  //
  // Update the modal's content.
  const modalTitle = exampleModal.querySelector('.modal-title')
  const modalBodyInput = exampleModal.querySelector('.modal-body input')

  modalTitle.textContent = `New message to ${recipient}`
  modalBodyInput.value = recipient
});

// Captura o modal
const exampleModal = document.getElementById('exampleModal');

// Adiciona um ouvinte de evento ao modal para o evento 'show.bs.modal'
exampleModal.addEventListener('show.bs.modal', event => {
  // Botão que acionou o modal
  const button = event.relatedTarget;
  // Extrai informações dos atributos data-bs-*
  const recipient = button.getAttribute('data-bs-whatever');
  // Se necessário, você pode iniciar uma solicitação AJAX aqui
  // e então atualizar no retorno de chamada.

  // Atualiza o título do modal
  const modalTitle = exampleModal.querySelector('.modal-title');
  modalTitle.textContent = `Nova mensagem para ${recipient}`;

  // Atualiza o valor do input no corpo do modal
  const modalBodyInput = exampleModal.querySelector('.modal-body input');
  modalBodyInput.value = recipient;
});

// Seleciona o botão com a classe .btn-primary
const btnPrimary = document.querySelector('.btn-primary');

// Adiciona um ouvinte de evento para o clique no botão
btnPrimary.addEventListener('click', function () {
  // Verifica se o botão tem a classe 'active'
  if (this.classList.contains('active')) {
    // Remove a classe 'active' para restaurar a cor inicial
    this.classList.remove('active');
  } else {
    // Adiciona a classe 'active' para definir a cor desejada
    this.classList.add('active');
  }
});


# Plano de Testes de Software

Os requisitos para realização dos testes de software são:
<ul><li>Site publicado na internet;</li>
<li>Navegador da internet: Chrome, Firefox ou Edge.</li>
</ul>

Os testes funcionais a serem realizados na aplicação são descritos a seguir.

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-01: O site deve permitir ao usuário cadastrar uma conta.</td>
  <td>
   <ul>
    <li>RF-001:	A aplicação deve permitir que os usuários se cadastrem.</li>
   </ul>
  </td>
  <td>Verificar se o cadastro está sendo feito corretamente.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li> Clicar em "Cadastre-se", no Menu.</li>
    <li>Preencher o formulário e clicar em “Cadastrar”.</li>
   </ol>
   </td>
  <td>Deve ocorrer uma validação das informações fornecidas pelo usuário, e ao clicar em "Cadastrar", deve aparecer a mensagem "Usuário cadastrado com sucesso".</td>
  <td>Melissa</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-02:O site deve permitir ao usuário fazer o login da sua conta. .</td>
  <td>
   <ul>
   <li>RF-002: A aplicação deve permitir ao usuário fazer o login da sua conta</li>
   </ul>
  </td>
  <td>Verificar se o login está sendo feito corretamente. </td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página de login.</li>
    <li>Clicar em “Entrar”, no menu.</li>
    <li>Preencher seus dados e clicar em “Entrar”.</li>
   </ol>
   </td>
  <td>Após o login, o usuário deverá ser redirecionado para a sua página de perfil.</td>
  <td>Jonathan</td>
 </tr>
 </table>

 <table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
  <tr>
  <td>CT-03: O site deve permitir verificar a página de perfil do usuário ou profissional cadastrado</td>
  <td>
   <ul>
   <li>RF-06 A aplicação deve permitir o envio de notificações aos membros sobre eventos e outros avisos relevantes.</li>
   </ul>
  </td>
  <td>Verificar se a página Perfil está apresentando as informações cadastradas pelo usuário corretamente. </td>
  <td>Verificar se os botões da página estão direcionando corretamente para as páginas descritas. </td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Visualizar a página Login.</li>
    <li>Preencher seus dados e clicar em “Entrar”.</li>
    <li>Visualizar a página Perfil.</li>
    <li>Clicar em editar perfil e conseguir visualizar o que editou.</li>
    <li>Clicar no botão minhas aulas direcionar para a página de aulas.</li>
    <li>Clicar no botão profissionais e direcionar para a página dos profissionais.</li>
    <li>Clicar no botão rede social e direcionar para a página de rede social.</li>
   </ol>
   </td>
  <td>As informações registradas pelo usuário no momento do cadastro devem estar disponibilizadas na página Perfil e acesso as demais páginas do site.</td>
  <td>Nasson</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-04: Funcionalidade da pagina do perfil do profissional</td>
  <td>
   <ul>
     <li>RF-05 A aplicação deve permitir ao usuário fácil conexão (acesso aos dados para contato) com profissionais.</li>
   </ul>
  </td>
  <td>Verificar se os profissionais aparecem conforme categoria profissional selecionada</td>
  <td>Possibilitar que os usuários possam ter acesso aos dados dos profissionais (dados das redes sociais e números para contato)</td>
   <td>Possibilitar que os usuários possam seguir e deixar de seguir os profissionais</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Fazer o login</li>
    <li>Acessar a página de perfi.</li>
    <li>Clicar no botão de profissionais.</li>
    <li>Selecionar a categoria profissional desejada.</li>
    <li>Clicar no botão de seguir e deixar de seguir.</li>
   </ol>
   </td>
  <td>Os usuários poderão ter facilidade em acessar as informações para ter contato com os profissionais desejados.</td>
  <td>Evellyn</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>  
 </tr>
 <tr>
  <td>CT-05: Verificar as postagens e agendamentos dos usuários e profissionais nas redes sociais</td>
  <td>
   <ul>
    <li>RF-03 A aplicação deve permitir o compartilhamento de posts.
    <li>RF-07 A aplicação deve permitir aos usuários acesso ao que outros usuários estão compartilhando.</li>
    <li>RF-08 A aplicação deve disponibilizar uma agenda com horários de eventos e compromissos.</li>
    <li>RF-10 A aplicação deve permitir comentários e curtidas em posts.
   </ul>
  </td>
  <td>Verificar se todas as funcionalidade de postagem e agenda estão conforme planejado</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página perfil.</li>
    <li>Clicar na página Redes sociais.</li>
    <li>Visualizar as informações referentes as postagens dos usuários ou profissionais.</li>
    <li>Publicar o que está pensando sobre os treinos e anexas fotos referente aos encontros e exercícios.</li>
    <li>Ao passar o mouse sobre a data na agenda, ler o evento agendado.</li>
    <li>Clicar na data futura para agendar o encontros e treinos.</li>
   </ol>
   </td>
  <td>Ter acesso as informações de quem está seguindo, incluir postagem de texto e imagens dos alunos e profissinais que estão disponíveis na página e agenda interativa.</td>
  <td>Evellyn</td>
 </tr>
</table>

 <table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
  <tr>
  <td>CT-06: Funcionalidade da página de aulas</td>
  <td>
   <ul>
   <li> RF-09 A aplicação deve permitir que o profissional agende aulas.</li>
   </ul>
  </td>
  <td>Verificar se o perfil de categorias profissioanis está sendo feito corretamente. </td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar em “Entrar”, no menu.</li>
    <li>Preencher seus dados e clicar em “Entrar”.</li>
    <li>Visualizar a página meu perfil.</li>
    <li>Clicar no botão de profissionais.</li>
    <li>Visualizar as categorias: Fisioterapeuta, médico, personal e nutricionista.</li>
    <li>Clicar na categoria e seguir o profissional escolhido</li>
   </ol>
   </td>
  <td>Deve ocorrer uma seleção das informações fornecidas pelo profissional, e ao clicar na categoria escolhida, deverá abrir uma nova janela com os dados dos profissionais cadastrados na categoria selecionada.</td>
  <td>Evellyn</td>
 </tr>
</table>

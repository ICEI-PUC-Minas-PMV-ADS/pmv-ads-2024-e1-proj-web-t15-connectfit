# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>

Apresente os cenários de testes utilizados na realização dos testes da sua aplicação. Escolha cenários de testes que demonstrem os requisitos sendo satisfeitos.

Enumere quais cenários de testes foram selecionados para teste. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.
 
## Ferramentas de Testes (Opcional)

Comente sobre as ferramentas de testes utilizadas.
 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)

<span style="color:red">Pré-requisitos: <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/ads-e1-exemplo-vida-de-estudante/tree/main/documentos/02-Especificação%20do%20Projeto.md"> Especificação do Projeto</a></span>, <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/ads-e1-exemplo-vida-de-estudante/tree/main/documentos/04-Projeto%20de%20Interface.md"> Projeto de Interface</a>

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
  <td>CT-03: O site deve permitir verificar a página de perfil do usuário cadastrado</td>
  <td>
   <ul>
   <li>RF-05 A aplicação deve permitir ao usuário fácil conexão com profissionais.</li>
   <li>RF-06 A aplicação deve permitir o envio de notificações aos membros sobre eventos e outros avisos relevantes.</li>
   <li>RF-08 A aplicação deve disponibilizar uma agenda com horários de eventos e compromissos.</li>
   </ul>
  </td>
  <td>Verificar se a página Perfil está apresentando as informações cadastradas pelo usuário corretamente. </td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar em "Cadastre-se", no Menu.</li>
    <li>Preencher o formulário e clicar em “Cadastrar”.</li>
    <li>Visualizar a página Login.</li>
    <li>Preencher seus dados e clicar em “Entrar”.</li>
    <li>Visualizar a página Perfil.</li>
   </ol>
   </td>
  <td>As informações registradas pelo usuário no momento do cadastro devem estar disponibilizadas na página Perfil.</td>
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
    <li>RF-09:	A aplicação deve permitir que o profissional agende aulas.</li>
   </ul>
  </td>
  <td>Verificar se a aulas estão sendo carregadas</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página de aulas.</li>
    <li>Clicar na página Aulas.</li>
    <li>Digitar no filtro de pesquisa algum dado presente na página Aulas e verificar se o resultado é exibido na página.</li>
   </ol>
   </td>
  <td>Os videos inseridos na página devem ser mostrar e carregados ao ser selecionado.</td>
  <td>Ana</td>
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
  <td>CT-05: Verificar as postagens dos usuários e profissionais nas redes sociais</td>
  <td>
   <ul>
    <li>RF-07 A aplicação deve permitir aos usuários acesso ao que outros usuários estão compartilhando.</li>
   </ul>
  </td>
  <td>Verificar se todas as informações referentes aos livros estão disponíveis na página Livros</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página perfil.</li>
    <li>Clicar na página Redes sociais.</li>
    <li>Visualizar as informações referentes as postagens dos usuários.</li>
   </ol>
   </td>
  <td>Todas as informações, incluindo imagens, postagens dos alunos e profissinais que estão disponíveis na página.</td>
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
  <td>CT-06: Funcionalidade da página dos profissionais cadastrados</td>
  <td>
   <ul>
   <li>RF-004	.</li>
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
    <li>Visualizar a página Perfil.</li>
    <li>Clicar em profissionais.</li>
    <li>Visualizar as categorias: Fisioterapeuta, médico, personal e nutricionista.</li>
    <li>Clicar na categoria e seguir o profissional escolhido</li>
    
   </ol>
   </td>
  <td>Deve ocorrer uma seleção das informações fornecidas pelo profissional, e ao clicar na categoria escolhida, deverá abrir uma nova janela com os dados dos profissionais cadastrados na categoria selecionada.</td>
  <td>Evellyn</td>
 </tr>
</table>

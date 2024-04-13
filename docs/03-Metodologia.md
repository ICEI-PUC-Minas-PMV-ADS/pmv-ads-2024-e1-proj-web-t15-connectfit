# Metodologia

<!-- LINK NÃO FUNCIONA, NECESSÁRIO ADICIONAR O LINK DO FIGMA
<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Documentação de Especificação</a></span> 
-->

## Gerenciamento de projeto

A metodologia ágil usada neste projeto foi o SCRUM, pois o mesmo adota uma abordagem empírica e se concentra em aumentar a habilidade em responder de forma ágil aos desafios emergentes. Segundo Sutherland, o Scrum:

“Cria um alicerce para o aprendizado, permitindo que as equipes avaliem o que já criaram, o que é igualmente importante. A estrutura do Scrum procura aproveitar a maneira como as equipes de fato trabalham, fornecendo ferramentas para se auto-organizarem e otimizarem, em pouco tempo, a rapidez e a qualidade do trabalho”.

### Divisão de Papéis

Nossa divisão de papéis foi organizada da seguinte forma:

- Scrum Master: Ana Clara Santos de Paula;
- Product Owner: Danielle Gomes dos Santos;
- Equipe de Desenvolvimento e de Design: Ana Clara Santos de Paula, Danielle Gomes dos Santos, Evellyn Quintela Carvalho, Jonathan Nogueira Lyra Pedrosa, Melyssa Semprini e Nasson Freitas de Paula.


### Processo

A fim de obter um processo mais organizado, optamos por utilizar o Github para atribuir tarefas aos membros do grupo, cada uma delas setorizadas em uma das colunas abaixo:

- Backlog do produto: Representa todas as tarefas que precisam ser realizadas ao decorrer do projeto.
- Pendente: Tarefas que foram filtradas do backlog do produto e iram ser desenvolvidas ao decorrer da sprint.
- Em desenvolvimento: Tarefas da coluna "pendente" que já foram iniciadas.
- Teste:  Tarefas finalizadas, mas que ainda não foram revisadas.
- Pronto: Tarefas que já foram finalizadas e revisadas.

O quadro Kanban desenvolvido pelo grupo pode ser acessado clicando [aqui](https://github.com/orgs/ICEI-PUC-Minas-PMV-ADS/projects/1016/views/2). Abaixo, é possível ver uma representação dele.

![Imagem-quadro-kanbam](/docs/img/backlog%20do%20produto.png)
Figura 1 - Quadro Kanbam gerenciado pelo grupo.

## Labels

Cada tarefa possui uma categoria, podendo ser filtrada por meio de labels (etiquetas) personalizadas. Sendo assim, cada tarefa pode ser categorizada em:

- Bug (Erros encontrados na operação);
- Documentation (Criação e melhoria da documentação);
- Enhancement (Nova feature a ser desenvolvida para o projeto);
- Design (Criação de um modelo preliminar antes do desenvolvimento);
- Help wanted (Sinalização de um problema que exige maior atenção por parte dos membros do grupo.)
- Question (Requisição de mais informações para que a tarefa possa ser concluida);
- Wontfix (Problema cuja solução não será desenvolvida naquele momento).

![Etiquetas](/docs/img/labels.png)
FIgura 2 - Labels adotadas para o projeto.

## Relação de Ambientes de Trabalho

As ferramentas utilizadas ao longo do projeto são:

- Editor de código;
- Ferramentas de comunicação;
- Ferramentas de design;
- Ferramentas de diagramação.

A escolha de utilizar o editor de código veio por ter impacto no controle de versionamento do projeto. O uso de ferramentas de comunicação, que engloba tanto a ferramenta utilizada para troca de mensagens instantâneas quanto a escolhida para reuniões diárias, se tornou essencial ao projeto para a integração de todos os membros do grupo. As ferramentas de design foram utilizadas para a prototipação inicial da nossa solução, possibilitando que um ou mais membros editassem simultaneamente. Por fim, escolhemos uma ferramenta de diagramação para mapear as necessidades do produto que está sendo desenvolvido

<!-- Adicionar o link do figma aqui -->

| AMBIENTE | PLATAFORMA | LINK DE ACESSO |
|------------|---------------| ----------- |
|Projeto de interface e wireframes| Figma | https://www.figma.com/file/g0zt6v2Uj9INeIchTBmcfH/HOME-CONNECTFIT?type=design&node-id=0%3A1&mode=design&t=gpdW13rJavzSZ2xv-1|
|Repositório do código-fonte | Github | https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-e1-proj-web-t15-connectfit |
|Gerenciamento do projeto| Github | https://github.com/orgs/ICEI-PUC-Minas-PMV-ADS/projects/1016 |
| Projeto de diagramação | Miro | https://miro.com/app/board/uXjVKVJZmr4=/?share_link_id=351164626953|


### Codificação e organização

Os artefatos gerados durante sprints voltadas para a criação e codificação do produto foram armazenados na pasta [codigo-fonte](/codigo-fonte/)

<!-- ## Controle de Versão

Nosso controle de versão foi realizado através do Git

--

A ferramenta de controle de versão adotada no projeto foi o
[Git](https://git-scm.com/), sendo que o [Github](https://github.com)
foi utilizado para hospedagem do repositório.

O projeto segue a seguinte convenção para o nome de branches:

- `main`: versão estável já testada do software
- `unstable`: versão já testada do software, porém instável
- `testing`: versão em testes do software
- `dev`: versão de desenvolvimento do software

Quanto à gerência de issues, o projeto adota a seguinte convenção para
etiquetas:

- `documentation`: melhorias ou acréscimos à documentação
- `bug`: uma funcionalidade encontra-se com problemas
- `enhancement`: uma funcionalidade precisa ser melhorada
- `feature`: uma nova funcionalidade precisa ser introduzida

Discuta como a configuração do projeto foi feita na ferramenta de versionamento escolhida. Exponha como a gerência de tags, merges, commits e branchs é realizada. Discuta como a gerência de issues foi realizada.

G

> **Links Úteis**:
> - [Microfundamento: Gerência de Configuração](https://pucminas.instructure.com/courses/87878/)
> - [Tutorial GitHub](https://guides.github.com/activities/hello-world/)
> - [Git e Github](https://www.youtube.com/playlist?list=PLHz_AreHm4dm7ZULPAmadvNhH6vk9oNZA)
>  - [Comparando fluxos de trabalho](https://www.atlassian.com/br/git/tutorials/comparing-workflows)
> - [Understanding the GitHub flow](https://guides.github.com/introduction/flow/)
> - [The gitflow workflow - in less than 5 mins](https://www.youtube.com/watch?v=1SXpE08hvGs)

## Gerenciamento de Projeto


> **Links Úteis**:
> - [11 Passos Essenciais para Implantar Scrum no seu Projeto](https://mindmaster.com.br/scrum-11-passos/)
> - [Scrum em 9 minutos](https://www.youtube.com/watch?v=XfvQWnRgxG0)
> - [Os papéis do Scrum e a verdade sobre cargos nessa técnica](https://www.atlassian.com/br/agile/scrum/roles)

### Processo

Coloque  informações sobre detalhes da implementação do Scrum seguido pelo grupo. O grupo deverá fazer uso do recurso de gerenciamento de projeto oferecido pelo GitHub, que permite acompanhar o andamento do projeto, a execução das tarefas e o status de desenvolvimento da solução.
 
> **Links Úteis**:
> - [Planejamento e Gestáo Ágil de Projetos](https://pucminas.instructure.com/courses/87878/pages/unidade-2-tema-2-utilizacao-de-ferramentas-para-controle-de-versoes-de-software)
> - [Sobre quadros de projeto](https://docs.github.com/pt/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards)
> - [Project management, made simple](https://github.com/features/project-management/)
> - [Sobre quadros de projeto](https://docs.github.com/pt/github/managing-your-work-on-github/about-project-boards)
> - [Como criar Backlogs no Github](https://www.youtube.com/watch?v=RXEy6CFu9Hk)
> - [Tutorial Slack](https://slack.com/intl/en-br/)

### Ferramentas

### IDE:
 - Visual Studio Code

- `HTML`: É utilizado para estruturar uma página web e apresentar conteúdo na web. 
- `CSS`: Utilizado para deixar o site visualmente mais atraente possibilitando a estilzação dos elementos inclusos na página web.
- `JavaScript`: Utilizamos o JS juntamente com o HTML e CSS, para validação de formulários e dados, conteúdo dinâmico entre outras possibilidades, juntamente as 3 linguagens são as principais a compor a WWW (World Wide Web). 

### Ferramentas de comunicação
- `Discord`: Utilizado para comunicação por meio de chmadas em grupo, mensagens canais para tarefas específicas e compatilhamento de tela em tempo real.
- `Whatsapp`: Utilizado para troca de mensagens e  agendamento de reuniões entre a equipe.

### Ferramentas de Modelagem:
- `Figma`= Utilizado para prototipar o projeto, fornece muitas ferramentas diversificadas.
- `Canva`= Utilizado em gráficos da documentaçãpo de contexto e em alguns desings, foi utilizado pela facilidade de utilização.
- `Illustrator`= Utilizado para criar nossa logo e alguns aspectos de desing, é bem parecido com o Photoshop por isso foi escolhido. 
- `Github`= Utilizado como meio de postagem e repositório de nosso trabalho, pela facilidade e possibilidade de armazenar em nuvem. 
-->

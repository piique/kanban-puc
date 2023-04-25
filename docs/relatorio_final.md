# Pomoban


**Bernardo Cavanellas Biondini, bernardo.biondini@sga.pucminas.br**

**Richbert Stephano de Faria Oliveira, richbert.faria@sga.pucminas.br**

**Sara Lourenço Iglesias, sara.iglesias@sga.pucminas.br**

**Walter Roberto Rodrigues Louback, walter.louback@sga.pucminas.br**

---

Professores:

**Hugo Bastos de Paula**

**Eveline Alonso Veloso**

**Thiago Augusto Nicolini Silva**


---

_Curso de Engenharia de Software, Unidade Praça da Liberdade_

_Instituto de Informática e Ciências Exatas – Pontifícia Universidade de Minas Gerais (PUC MINAS), Belo Horizonte – MG – Brasil_

---

_**Resumo**. A aplicação consiste no gerenciamento de tarefas, associação das mesmas à membros da equipe e gerenciamento do tempo gasto para realizá-las com a possibilidade de um saldo de tempo que pode ser usado pelo membro da equipe como bem entender desde que as tarefas sejam fechadas até a data limite da sprint. É um software baseado no kanban e os blocos de tempo usados para a divisão da tarefa são chamados de pomodoros, que são intervalos de 25 minutos, sendo que a quantidade de pomodoros estimada para a finalização de uma task é definida pelo próprio membro da equipe._

---


## 1. Introdução

A introdução deve apresentar de dois ou quatro parágrafos de contextualização do trabalho. 

    1.1 Contextualização

No ambiente de desenvolvimento ágil, pode-se dizer que o Kanban é a principal ferramenta de gerenciamento de tarefas, histórias de usuário e cerimônias Scrum ao
mesmo tempo que a temática de gerenciamento de tempo é constantemente abordada anto no meio acadêmico quanto no mercado de trabalho. Nisso, surge a ideia do
Pomoban, um software baseado no Kanban que integra também a técnica Pomodoro, que foi criada por Francesco Cirillo na década de 80. Esse método consiste em dividir o
trabalho em blocos de 25 minutos para a realização de tarefas com breves intervalos entre um e outo. Como os membros da aquipe terão a autonomia de definir os
pomodoros estimados para determinada tarefa e registrar quantos pomodoros foram completados, há também a vantagem de saldo de tempo, ou seja, se a diferença entre
a quantidade de pomodoros estimados e realizados for positiva, o membro do time poderá usar esse tempo como bem entender e se ele ultrapassar determinada
quantidade, o PO ou Scrum Master poderá adiantar tarefas que seriam para a próxima sprint para que o membro não fique ocioso.

    1.2 Problema

De acordo com o artigo publicado pela jornalista Kharen Stecca pelo portal da Universidade Federal de Goiás, houve uma grande necessidade de reorganização de tempo devido ao trabalho remoto adotado durante a pandemia, visto que várias atividades se tornaram simultâneas como o trabalho propriamente dito, cuidados com a casa e com a família. Tal situação é preocupante pois evidencia que a realidade do "multitarefas" não é nem de longe algo para ser romantizado e é responsável por uma grande estafa mental. Com a volta do trabalho presencial e a necessidade de troca com os colegas de trabalho, essa deficiência do gerenciamento de tempo acabou se estandendo para os tempos pós isolamento, o que torna imprescindível a adoção de um sistema de gerenciamento e otimização de tempo.

A aplicação Pomoban visa combinar dois métodos comprovadamente eficazes: Pomodoro e Kanban.

O Pomodoro, quando combinado com outras técnicas, ajuda a reduzir a procrastinação e melhora a eficiência nos estudos e no trabalho, de acordo com o Journal of Environmental Research e o Journal of Industrial Ergonomics. Já o Kanban, segundo estudos da Universidade de Ciência e Tecnologia de Hong Kong, auxilia na melhoria da qualidade do produto final, reduz o tempo de espera do cliente e aumento de 40% da produtividade dos times.


    1.3 Objetivo geral

    A proposta do Pomoban é desenvolver uma plataforma digital que combine as metodologias Pomodoro e Kanban, oferecendo uma solução completa e eficiente para gerenciamento de tempo e tarefas. O objetivo é proporcionar aos usuários uma ferramenta integrada, que aumente a produtividade e a organização pessoal e profissional, possibilitando, através dessa solução, um melhor aproveitamento do tempo e uma maior efetividade na realização de tarefas. 
    
        1.3.1 Objetivos específicos

- Incentivar os usuários a fragmentar suas tarefas o máximo que conseguirem e quantificar o tempo na unidade Pomodoro, o que configura imersão no sistema.
- Ter como prioridade do time a otimização do gerenciamento de tempo por meio da autonomia de cada membro conhecer seus padrões e estabelecerem a quantidade de pomodoros com base nisso. Se a tarefa for finalizada antes do tempo estipulado, o tempo restante de pomodoros vai para o banco de horas, incentivando também a agilidade na realização de tarefas para usar o tempo de saldo como bem entender.


    1.4 Justificativas

É indubitável que a pandemia causou muitas distorções de tempo principalmente para as pessoas que não estavam habituadas ao home office, o que ajudou a tornar evidente a dificuldade das pessoas em gerenciar seu próprio tempo para realização de suas tarefas. Sendo assim, é plausível que por meio do Pomoban, possa-se explorar a possibilidade de estipular um tempo para a realização das tarefas estabelecidas e agir de acordo com esse tempo. Essa metodologia não só exercita a autonomia, mas dá a liberdade do membro do time conhecer seu próprio tempo, além de incentivar que o usuário busque ter tempo livre, visto que se ele gastar menos tempo realizando a tarefa, ele pode usar o saldo de tempo para fazer outras coisas.


## 2. Participantes do processo

Gerente de projeto - um indivíduo responsável por gerenciar o fluxo de trabalho e definir prioridades. Seus objetivos podem incluir maximizar a eficiência do processo, garantir que as tarefas sejam concluídas dentro do prazo e monitorar o progresso do projeto.

Membro do time - um indivíduo responsável por executar as tarefas e concluir o trabalho atribuído. Seus objetivos podem incluir concluir as tarefas dentro do prazo, garantir que o trabalho atenda às especificações e minimizar o retrabalho.

## 3. Modelagem do processo de negócio

## 3.1. Análise da situação atual

Atualmente, o gerenciamento de tarefas para uma grande maioria de projetos é feita manualmente, sem um controle de banco de horas ou o tempo gasto para cada tarefa realizada pelo time. Como descrito na seção 1.2 deste documento, a falta de utilização de um meio de gerenciamento de tempo causa perda de produtividade, principalmente depois dos efeitos causados pela pandemia.
Quando o gerenciamento de tarefas é feito pelo kanban, o gestor consegue ter uma visão geral do projeto. Contudo, não é possível definir o tempo gasto para cada tarefa, o que dificulta o controle de tempo e horas que cada membro da equipe tem.
Além disso, o gerenciamento de tempo de cada membro pode ser diferente de um dos outros, o que torna o gerenciamento de tempo e especulação de datas previstas para entregas mais complicado de ser realizado pelo gerente do projeto.
Tendo isso em vista, o pomoban propõe uma resolução para este problema de forma que o gerente de um projeto tenha maior visibilidade e controle sobre os membros de sua equipe e seu desempenho, uma vez que o gerenciamento de tempo seria padronizado entre todos os participantes.

## 3.2. Descrição Geral da proposta

Atualmente, os sistemas de gerenciamento de tarefas costumam ser específicos para uso de empresas que desenvolvem o próprio software ou compram um serviço que atenda as necessidades da mesma.
Nosso software propõe uma resolução do problema de gerencimanto de tarefas através da utilização do kanbam e o pomodoro, possibilitando ao gestor do produto uma visão de como está o andamento do projeto, o andamento de cada tarefa e o estado atual de cada membro da equipe. Já para o membro da equipe, nosso software disponibiliza uma maneira de cronometrar o tempo gasto de cada tarefa. Desta maneira, o membro da equipe pode saber se a sua tarefa está atrasda ou adiantada.
Além disso, cada tarefa realizada altera o seu banco de horas no sistema. Caso a tarefa seja realizada em menos tempo do que o estimado - o tempo estimado é definido na criação da tarefa pelo gestor e o mesmo é definido por quantidade de pomodoros de 25 minutos - o saldo restante é colocado positivamente em seu banco de horas. Caso a tarefa seja entregue com o tempo superior ao estimado, o saldo a mais realizado para concluir a tarefa desconta de seu banco.
Toda tarefa se dá como realizada após a aprovação do gestor sobre a mesma. Após a aprovação da tarefa todo o saldo é calculado e pode ser conferido pelo gestor na tela de visualização dos membros.

1. Realização de cadastro de membros do time pelo gerente e os relaciona à um projeto criado

Na etapa inicial, o gerente do projeto cadastra a si mesmo e os membros do time para a atribuição de papeis no projeto além de sua descrição geral. Nisso, será possível definir os cargos de cada um, como Scrum Master, Desenvolvedor Back-End, Desenvolvedor Front-End e etc.

2. O gerente realiza a abertura de um card com o tempo estimado para a realização da mesma e a associa a um membro do projeto

Etapa ideal para ser feita na primeira planning, onde os cards serão vinculados aos desenvolvedores  e fica a critério do desenvolvedor estimar uma quantidade de horas que serão utilizadas para a conclusão do card, sendo que esse tempo será dividido em pomodoros. Tendo dito isso, o desenvolvedor posteriormente terá a liberdade de decidir quantos pomodoros ele precisará para concluir cada tarefa. Se ele por exemplo tiver um mau aproveitamento de um dos pomodoros, haverá menos deles disponíveis para que ele use, causando a sensação de urgência. O pomodoro dever ser encarado pelo desenvolvedor como um recurso limitado que deve ser bem aproveitado.

3. O membro da equipe inicia a tarefa relacionada e o próprio sistema começa a fazer a contagem de pomodoros

Após a quantidade de horas estimadas ser convertida em pomodoros, a cada vez que ele iniciar um pomodoro, haverá um cronômetro que conta a quantidade de tempo utilizada para a realização das tarefas. Quando a contagem do pomodoro acabar, o sistema dispara um modal que pergunta se o desenvolvedor já deseja iniciar um novo pomodoro ou não.

4. O membro abre uma avaliação da tarefa para o gerente do produto.

Nessa etapa, o membro da equipe já terminou as tarefas do card e deseja entregá-lo. O sistema ao finalizar o card, deixa registrado a diferença entre pomodoros estimados e pomodoros gastos.

5. Caso a avaliação tenha resultado positivo, a diferença de tempo gasto, sendo superior ou inferior, modifica o saldo de banco de horas do membro. 

Nessa etapa podem ser feitas reuniões do time para revisão do card entregue, caso seja um card técnico e dependa de outros “pedaços” que estejam sendo desenvolvidos por outros membros. É feito esse alinhamento e os membros poderão opinar se o card precisa ser refeito ou se precisa de correções. Se a avaliação geral do time for positiva, o card é finalizado e se for concluído antes do tempo estimado, o membro pode gozar desse saldo positivo fazendo o que bem entender. Se o saldo for negativo, o gerente imediatamente vincula um novo card do backlog para o desenvolvedor para que ele possa estimar a quantidade de pomodoros e positivar seu saldo..

6. Em caso negativo da avaliação, a tarefa é retornada para o membro da equipe que a realizou para que sejam feitas as correções necessárias.

O gerente e o desenvolvedor decidem uma nova quantidade de pomodoros para realizar as correções necessárias e essa também pode ser uma oportunidade para positivar o banco de horas caso ele ainda esteja negativo.

## 3.3. Modelagem dos Processos

### 3.3.1 Processo 1 – Cadastro na Plataforma

![image](https://user-images.githubusercontent.com/83314995/231240712-b69e153b-de99-47eb-82bc-e789e30939bb.png)

### 3.3.1 Processo 2 – Login na Plataforma

![image](https://user-images.githubusercontent.com/83314995/233787163-d83b75cf-4f3c-466b-8654-d500c1170792.png)


### 3.3.2 Processo 3 – Criação de Tarefas

![image](https://user-images.githubusercontent.com/83314995/231241699-cfde3f5d-b91f-4bde-bace-8d5746008ccb.png)

### 3.3.3 Processo 4 – Realização da Tarefa

![image](https://user-images.githubusercontent.com/83314995/231240917-043c04a0-259f-4c7a-8daa-cd010291f72d.png)

### 3.3.4 Processo 5 – Análise da realização da tarefa

![image](https://user-images.githubusercontent.com/83314995/233169675-e3612e69-193f-43bd-82c9-8071f746b942.png)

## 4. Projeto da Solução

### 4.1. Detalhamento das atividades

Descrever aqui cada uma das propriedades das atividades de cada um dos processos. Devem estar relacionadas com o modelo de processo apresentado anteriormente.

#### Processo 1 – Cadastro na Plataforma

**Criação do projeto**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| nome | Caixa de Texto | máximo de 100 caracteres |  |
| gerente | Seleção única | usuário existente |   |

**Cadastro de membros da equipe**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| nome | Caixa de Texto | máximo de 100 caracteres |  |
| senha | Caixa de Texto | mínimo de 8 caracteres |

**Definições de papeis**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| usuario | Múltipla escolha | usuário existente |  |
| papel | Seleção única | membro, gerente | |

#### Processo 2 – Criação de Tarefas

**Criação do card**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| nome | Caixa de Texto |  |  |

**Definição de tempo estimado**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| card | Seleção única | card existente |  |
| pomodorosEstimados | Número | números inteiros |   |

**Atribuição de membro**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| card | Seleção única | card existente |  |
| usuario | Seleção única | usuário existente |   |

<**Nome da atividade 3**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| [Nome do campo] | [Área de texto, Caixa de texto, Número, Data, Imagem, Seleção única, Múltipla escolha, Arquivo, Link, Tabela] |  |  |
|    |    |     |>

### 4.2. Tecnologias
Para desenvolver o pomoban usaremos as seguintes tecnologias:

Front-end: React.js

Back-end: PHP

Banco de dados: MySQL

Autenticação: JSON Web Tokens (JWT)

API: RESTful

Gerenciamento de pacotes: npm (para o front-end) e Composer (para o back-end)

Controle de versão: Git

Ambiente de desenvolvimento: VS Code
       
## 5. Modelo de dados

![image](https://user-images.githubusercontent.com/83314995/233787243-ea05987c-a98c-425a-8592-5375c0d58433.png)

## 6. Indicadores de desempenho

Apresente aqui os principais indicadores de desempenho e algumas metas para o processo. Atenção: as informações necessárias para gerar os indicadores devem estar contempladas no diagrama de classe. Colocar no mínimo 5 indicadores.

Usar o seguinte modelo:

| **Indicador** | **Objetivos** | **Descrição** | **Cálculo** | **Fonte dados** | **Perspectiva** |
| --- | --- | --- | --- | --- | --- |
| Percentual reclamações | Avaliar quantitativamente as reclamações | Percentual de reclamações em relação ao total atendimento |   | Tabela reclamações | Aprendizado e Crescimento |
| Taxa de Requisições abertas | Melhorar a prestação de serviços medindo a porcentagem de requisições | Mede % de requisições atendidas na semana | ![\frac{\sum{atendidas}}{\sum{requisicoes}}100](https://latex.codecogs.com/svg.latex?\frac{\sum{atendidas}}{\sum{requisicoes}}100) | Tabela solicitações | Processos internos |
| Taxa de entrega de material | Manter controle sobre os materiais que estão sendo entregues | Mede % de material entregue dentro do mês |   | Tabela Pedidos | Clientes |

Obs.: todas as informações para gerar os indicadores devem estar no diagrama de classe **a ser proposto**

## 7.Sistema desenvolvido

Faça aqui uma breve descrição do software e coloque as principais telas com uma explicação de como usar cada uma.

## 8. Conclusão

Apresente aqui a conclusão do seu trabalho. Discussão dos resultados obtidos no trabalho, onde se verifica as observações pessoais de cada aluno. Poderá também apresentar sugestões de novas linhas de estudo.

# REFERÊNCIAS

Como um projeto de software não requer revisão bibliográfica, a inclusão das referências não é obrigatória. No entanto, caso você deseje incluir referências relacionadas às tecnologias, padrões, ou metodologias que serão usadas no seu trabalho, relacione-as de acordo com a ABNT.

Verifique no link abaixo como devem ser as referências no padrão ABNT:

http://www.pucminas.br/imagedb/documento/DOC\_DSC\_NOME\_ARQUI20160217102425.pdf


**[1.1]** - _ELMASRI, Ramez; NAVATHE, Sham. **Sistemas de banco de dados**. 7. ed. São Paulo: Pearson, c2019. E-book. ISBN 9788543025001._

**[1.2]** - _COPPIN, Ben. **Inteligência artificial**. Rio de Janeiro, RJ: LTC, c2010. E-book. ISBN 978-85-216-2936-8._

**[1.3]** - _CORMEN, Thomas H. et al. **Algoritmos: teoria e prática**. Rio de Janeiro, RJ: Elsevier, Campus, c2012. xvi, 926 p. ISBN 9788535236996._

**[1.4]** - _SUTHERLAND, Jeffrey Victor. **Scrum: a arte de fazer o dobro do trabalho na metade do tempo**. 2. ed. rev. São Paulo, SP: Leya, 2016. 236, [4] p. ISBN 9788544104514._

**[1.5]** - _RUSSELL, Stuart J.; NORVIG, Peter. **Inteligência artificial**. Rio de Janeiro: Elsevier, c2013. xxi, 988 p. ISBN 9788535237016._



# APÊNDICES

**Colocar link:**

Do código (armazenado no repositório);

Dos artefatos (armazenado do repositório);

Da apresentação final (armazenado no repositório);

Do vídeo de apresentação (armazenado no repositório).





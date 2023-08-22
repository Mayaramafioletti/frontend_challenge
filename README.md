# FrontendChallenge

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.0.

<h2>Projeto</h2>
Projeto proposto pela picpay para o processo seletivo, com o objetivo de desenvolver uma aplicação com um login, e um dashboard com um CRUD com paginação, filtro e ordenaçao de colunas (ASC/DESC).


<h2>Imagens</h2>
<img alt="Tabelas" src="https://github.com/Mayaramafioletti/frontend_challenge/assets/72114647/f12c0813-1fcd-44f4-9258-ad9493e04bc3"/>
<img alt="Tabelas" src="https://github.com/Mayaramafioletti/frontend_challenge/assets/72114647/82addf2e-3d2f-4bbe-8204-d24506a0d2a2"/>
<img alt="Tabelas" src="https://github.com/Mayaramafioletti/frontend_challenge/assets/72114647/59d22164-195b-4c1b-bde5-569bed821963"/>
<img alt="Tabelas" src="https://github.com/Mayaramafioletti/frontend_challenge/assets/72114647/392831ce-51f3-4b10-a9a8-cf00b4faafb9"/>

<h2>Funcionalidades da aplicação</h2>

- [x] Login do usuário
- [x] Cadastro de uma task nova
- [x] Deletar uma task
- [x] Editar uma task
- [x] Paginação na tabela 
- [x] Pesquisa de task pelo usuario ou nome
- [x] Ordenar a tabela 

<h2>Rodando o projeto</h2>
<h4>1° passo</h4>
Tenha instalado as versões do Angular, Node, typescript
Angular CLI: 16.2.0
Node: 18.17.1
Package Manager: npm 9.6.7
typescript: 5.1.6
<h4>2° passo</h4>
Faça um git clone em uma pasta 

```
git clone https://github.com/Mayaramafioletti/frontend_challenge.git
```

Abra o código e rode no terminal

```
npm install
```

<h4>3° passo</h4>
Abra uma nova guia no terminal e instale a API mock

```
npm install -g json-server 
```

depois rode ela

```
json-server --watch db.json --port 3030
```

Depois irá reparar que foi criado um db.js na raiz do projeto copie a que está aqui no repositório e cole lá 
<h4>4° passo</h4>
Abra o localhost:4200 para acessar o login use as informações abaixo, se for diferente vai dar erro  
Usuario: usuario@gmail.com
Senha: usuario

<h4>Informações para usuários</h4>
Na tabela é possível ordenar pelo usuário e titulo em ordem alfabetica, na data por recente ou mais antigo, pelo valor ou se está pago ou não .
Também é possível deletar alguma linha ou editar o usuário, titulo e valor
A pesquisa é feita pelo usuário ou titulo, podendo clicar enter no teclado 
É possível adicionar alguma outra linha no botão adicionar 
O máximo de linhas da tabela antes de criar uma nova ágina é 10

<h2>Testes</h2>
Os testes foram feitos em jest, para rodar é só usar o comando 

```
npm test
```

<img alt="Tabelas" src="https://github.com/Mayaramafioletti/frontend_challenge/assets/72114647/8f2eb544-61e9-45dc-af6b-2dca87c25691"/>

<h2>Tecnologias utilizadas</h2>
<img alt="TypeScript" src="https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white"/>
<img alt="TypeScript" src="https://img.shields.io/badge/typescript%20-%23007ACC.svg?&style=for-the-badge&logo=typescript&logoColor=white"/>
<img alt="TypeScript" src="https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white"/>
<img alt="TypeScript" src="https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white"/>
<img alt="Figma" src="https://img.shields.io/badge/figma%20-%23F24E1E.svg?&style=for-the-badge&logo=figma&logoColor=white"/>


### Social:
- [Mayara C. Mafioletti - github](https://github.com/Mayaramafioletti/)
- [Mayara C. Mafioletti - linkedin](https://www.linkedin.com/in/mayara-mafioletti/)




# FrontendChallenge

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.0.

<h2>Projeto</h2>
Projeto proposto pela Picpay para o processo seletivo, com o objetivo de desenvolver uma aplicação com um login, e um dashboard com um CRUD com paginação, filtro e ordenaçao de colunas (ASC/DESC).

<h2>Funcionalidades da aplicação</h2>

- [x] Login do usuário
- [x] Cadastro de uma task nova
- [x] Deletar uma task
- [x] Editar uma task
- [x] Paginação na tabela 
- [x] Pesquisa de task pelo usuário ou nome
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
Abra uma nova guia no terminal e para rodar (deixar aberto em uma outra aba do terminal, para que ele fique escutando suas ações de CRUD!), digite o seguinte comando na RAÍZ do projeto

```
json-server --watch db.json --port 3030
```

<h4>4° passo</h4>
Abra o localhost:4200 para acessar o login use as informações abaixo, se for diferente vai dar erro  

Usuario: usuario@gmail.com
Senha: usuario

<h4>Informações para usuários</h4>
Na tabela é possível ordenar 

- Pelo usuário e titulo em ordem alfabética
  
- Na data por recente ou mais antigo

- Pelo valor
  
- Se está pago ou não
  
Também é possível deletar alguma linha

Editar o usuário, titulo e valor

A pesquisa é feita pelo usuário ou titulo, podendo clicar enter no teclado 

É possível adicionar alguma outra linha no botão adicionar 

O máximo de linhas da tabela antes de criar uma nova página é 10

<h2>Testes</h2>
Os testes foram feitos em jest, para rodar é só usar o comando 

```
npm test
```

<img alt="Imagem dos testes" src="https://github.com/Mayaramafioletti/frontend_challenge/assets/72114647/4bb9e3a3-e403-4b57-b3f4-bc156b9e969d"/>

<h2>Tecnologias utilizadas</h2>
<img alt="TypeScript" src="https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white"/>
<img alt="TypeScript" src="https://img.shields.io/badge/typescript%20-%23007ACC.svg?&style=for-the-badge&logo=typescript&logoColor=white"/>
<img alt="TypeScript" src="https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white"/>
<img alt="TypeScript" src="https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white"/>


### Social:
- [Mayara C. Mafioletti - github](https://github.com/Mayaramafioletti/)
- [Mayara C. Mafioletti - linkedin](https://www.linkedin.com/in/mayara-mafioletti/)




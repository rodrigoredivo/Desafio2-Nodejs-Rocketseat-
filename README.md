# Desafio2-Nodejs-Rocketseat-
Desafio 2 do segundo modulo de Nodejs pelo bootcamp - Rocketseat , criando API REST com Nodejs com um fluxo de autenticação com JWT

<h1 align="center">
  <img alt="Gympoint" title="Gympoint" src="https://raw.githubusercontent.com/Rocketseat/bootcamp-gostack-desafio-02/master/.github/logo.png" width="200px" />
</h1>

<h3 align="center">
  Desafio 2: Gympoint, o início
</h3>

<blockquote align="center">“Não espere para plantar, apenas tenha paciência para colher”!</blockquote>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/rocketseat/bootcamp-gostack-desafio-02?color=%2304D361">

  <a href="https://rocketseat.com.br">
    <img alt="Made by Rocketseat" src="https://img.shields.io/badge/made%20by-Rocketseat-%2304D361">
  </a>

  <a href="https://github.com/Rocketseat/bootcamp-gostack-desafio-02/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/rocketseat/bootcamp-gostack-desafio-02?style=social">
  </a>
</p>

<p align="center">
  <a href="#rocket-sobre-o-desafio">Sobre o desafio</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#ferramentas">Ferramentas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

## :rocket: Sobre o desafio

A aplicação que iremos dar início ao desenvolvimento a partir de agora é um app gerenciador de academia, o **Gympoint**.

Nesse primeiro desafio vamos criar algumas funcionalidades básicas que aprendemos ao longo das aulas até aqui. Esse projeto será desenvolvido aos poucos até o fim da sua jornada onde você terá uma aplicação completa envolvendo back-end, front-end e mobile, que será utilizada para a **certificação do bootcamp**, então, bora pro código!

### :ferramentas : Um pouco sobre as ferramentas

Você deverá criar a aplicação do zero utilizando o [Express](https://expressjs.com/), além de precisar configurar as seguintes ferramentas:

- Sucrase + Nodemon;
- ESLint + Prettier + EditorConfig;
- Sequelize (Utilize PostgreSQL ou MySQL);

### Funcionalidades

Abaixo estão descritas as funcionalidades que você deve adicionar em sua aplicação.

#### 1. Autenticação

Permita que um usuário se autentique em sua aplicação utilizando e-mail e senha.

A autenticação deve ser feita utilizando JWT.
Realize a validação dos dados de entrada;

#### 2. Cadastro e atualização de usuários e alunos.

Permita que novos usuários se cadastrem em sua aplicação utilizando nome, e-mail e senha.

Para atualizar a senha, o usuário deve também enviar um campo de confirmação com a mesma senha.

Criptografe a senha do usuário para segurança.

Permita que alunos sejam mantidos (cadastrados/atualizados) na aplicação utilizando nome, email, idade, peso e altura.

O cadastro de alunos só pode ser feito por administradores autenticados na aplicação.

O aluno não pode se autenticar no sistema, ou seja, não possui senha.

Realize a validação dos dados de entrada tantos dos usuários e de alunos ;


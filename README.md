# Teste Ciapetro

Este repositório foi feito para fazer integração com a API [Currencylayer](https://currencylayer.com/)

---

Requisitos:

- NodeJs
- Docker
- Docker-Compose
- npm ou yarn
- Insomnia
- React Router DOM

---

Como iniciar o Back-end:

1 - Com `Docker` instalado na maquinha executar o seguinte comando para subir o container do banco:

`cd back-end`

`npm install`

`docker-compose up -d`

2 - Executar as Migrations do banco para criação das tabelas

`npm run knex:up`

3 - Para executar a API, de o comando:

`npm run start`

- Obeservações:<br/>

O back-end será exposto na URL http://localhost:3333

O SGDB será exposto na URL http://localhost:5050

---

Como iniciar o Front-end:

`cd front-end`

`npm install`

`npm run start`

- Obeservações:<br/>

Instalar o React Router DOM com o comando: `npm install react-router-dom`

O front-end será exposto na URL http://localhost:3000

---

Como cadastrar as rotas da API no Insomnia

1 - Acessar o Insomnia

2 - Clicar em "Import/Export"

3 - Import Data

4 - From File

5 - selecionar o arquivo que esta dentro da pasta back-end

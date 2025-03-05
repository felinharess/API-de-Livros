# Biblioteca API

Uma API simples para gerenciamento de livros por gênero usando Node.js e Express.

## 🚀 Funcionalidades

- Listar todos os livros cadastrados.
- Listar livros por categoria.
- Adicionar novos livros a uma categoria.

## 🛠 Tecnologias

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)

## 📦 Instalação

1. Clone o repositório:
   ```sh
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   cd nome-do-repositorio
   ```

2. Instale as dependências:
   ```sh
   npm install
   ```

3. Inicie o servidor:
   ```sh
   node app.js
   ```
   O servidor será iniciado em `http://localhost:3000`.

## 📌 Rotas da API

### 🔹 Listar todos os livros
- **GET** `/livros`

### 🔹 Listar livros por categoria
- **GET** `/livros/:categoria`
  - Categorias disponíveis: `aventura`, `suspense`, `romance`, `ficcao`

### 🔹 Adicionar um livro a uma categoria
- **POST** `/livros/:genero`
  - Corpo da requisição (JSON):
    ```json
    {
      "id": 3,
      "nome": "Nome do Livro"
    }
    ```

## 📄 Licença

Este projeto está sob a licença MIT.

---

Desenvolvido por [Felipe Linhares Domingues](https://github.com/felinharess)


# 🚀 Trabalho 02 - Cadastro de Funcionários (React)

Este projeto é a implementação do "Trabalho 02 - React" da disciplina de Desenvolvimento Web. O objetivo foi criar uma aplicação ReactJS para o cadastro e listagem de informações, consumindo uma API REST.

O sistema permite ao usuário Adicionar (Create), Ler (Read), Atualizar (Update) e Excluir (Delete) registros de funcionários.

## ✏️ Integrantes da Equipe

* Nome do Integrante 1
* Nome do Integrante 2
* Nome do Integrante 3

## ⚙️ Tecnologias Utilizadas

* **Frontend:** ReactJS
* **Comunicação API:** Axios
* **Estilização:** CSS Modules
* **Backend (Simulado):** Mockoon

---

## 📄 Descrição da API (Mockoon)

Para que o frontend funcione, é necessário um backend rodando simultaneamente. Este projeto utiliza uma API simulada (Mock) criada com o **Mockoon**.

### Configuração do Backend

1.  **Baixe e instale** o [Mockoon (clique aqui)](https://mockoon.com/).
2.  A API deve rodar na seguinte URL base: `http://localhost:3001`
3.  Configure os seguintes endpoints (rotas) no Mockoon:

| Método | URL | Ação | Status HTTP |
| :--- | :--- | :--- | :--- |
| `GET` | `/funcionarios` | Lista todos os funcionários. | `200 OK` |
| `POST` | `/funcionarios` | Cadastra um novo funcionário. | `201 Created` |
| `PUT` | `/funcionarios/:id` | Atualiza um funcionário existente. | `200 OK` |
| `DELETE` | `/funcionarios/:id` | Deleta um funcionário. | `204 No Content`|

---

## 🏃 Como Executar o Projeto

**Pré-requisitos:** Você precisa ter o [Node.js](https://nodejs.org/) e o [Mockoon](https://mockoon.com/) instalados.

**1. Rodando o Backend (API):**
* Abra o **Mockoon**.
* Configure os endpoints conforme a tabela acima.
* Inicie o servidor do Mockoon na porta `3001`.

**2. Rodando o Frontend (React):**
* Clone este repositório: `git clone https://github.com/SEU-NOME-DE-USUARIO/SEU-REPOSITORIO.git`
* Entre na pasta do projeto: `cd SEU-REPOSITORIO`
* Instale as dependências:
    ```bash
    npm install
    ```
* Inicie o aplicativo React:
    ```bash
    npm start
    ```
* Abra `http://localhost:3000` no seu navegador.

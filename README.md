# API de Livraria - Express.js/MongoDB 😁

Este projeto é uma base para aprendizado para o desenvolvimento de APIs utilizando Javascript com o framework Express.JS e banco de dados MongoDB. O projeto foi desenvolvido no curso "Node.js: API Rest com Express e MongoDB" da Alura.

## 👨🏻‍💻 Sobre o Projeto

O objetivo deste projeto é fornecer uma estrutura inicial para o desenvolvimento de uma API REST em Javascript. Os seguintes aprendizado com esse projeto foram:
- Operações básicas de uma CRUD.
- Criação de rotas.
- Arquitetura MVC.
- Relacionamento entre coleções no mongoDB.

## 📦 Estrutura do Projeto

```
├── server.js                   # Arquivo de inicialização do servidor
├── package.json                # Arquivo com as dependências gerenciadas pelo NPM
├── .gitignore                  # Arquivo utilizado para descrever ao Git quais arquivos/pastas a serem ignoradas
├── .env                        # Arquivo com as váriaveis do ambiente
└── src                         # Diretório contendo os arquivos principais
    ├── config                  # Diretório contendo os arquivos de configurações
        ├── dbConnect.js        # Arquivo responsável pela conexão com o banco mongoDB
    ├── controllers             # Diretório contendo os controladores da aplicação
    ├── models                  # Diretório contendo arquivos de definição dos modelos de dados
    ├── routes                  # Diretório contendo arquivos de definição das rotas da API
        ├── index.js            # Arquivo com os direcionamentos de todas as outras rotas da aplicação
    ├── app.js                  # Arquivo principal onde conecta a biblioteca do Express e conexão com a aplicação
```

## ⬇️ Instalação

Antes de começar, certifique-se de ter o NodeJS v16.17.1 e o MongoDB v4.4.22

1. Clone este repositório para o seu ambiente local.
2. Acesse a pasta do projeto em um terminal.
3. Execute o seguinte comando para instalar as dependências:
```
npm install
```

4. Execute o seguinte comando para iniciar a aplicação:
```
npm run dev
```

## ⚙️ Configurações

As configurações do projeto podem ser encontradas no arquivo `.env`. Nele, você poderá definir as credenciais de acesso ao banco de dados e outras variáveis de ambiente relevantes.

Segue a explicação de cada váriavel:
- **SERVER_URL**: URL principal onde será acessada a API
- **APPLICATION_PORT**: Porta da aplicação - Padrão 3001
- **MONGODB_URI**: URI contendo a conexão com o seu banco do MongoDB


## 🙏  Contribuição

Se você quiser contribuir para este projeto, fique à vontade para abrir uma issue ou enviar um pull request.

## 📄 Licença

Este projeto está licenciado sob a licença [MIT](LICENSE).

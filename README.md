
# NLW-ESPORTS

Projeto de uma aplicação completa, web client, mobile e backend, com o intuito de criar uma plataforma de integração social dos usuários para jogar em Hub em uma sala do discord previamente escolhida.

O projeto foi realizado durante o bootcamp da Rocketseat




## Techs Utilizadas

Várias tecnologias foram utilizadas neste projeto, entre elas:

- Web: React, Tailwind CSS, radix ui, axios, phosphor react icons, vite
- Mobile: React Native, Expo, Vector icons, phosphor icons
- Server: Node, express, prisma, ts-node-dev, tsyringe, reflect-metadata]

O `Sqlite` foi a database escolhida para o projeto

O projeto foi completamente construído em `Typescript`

No caso do server, foi utilizado o `Eslint` para ajudar na correção de sintaxe, código, lógicas, além de importação de dependências e outros fatores
## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar a seguintes variável de ambiente no seu .env, basta copiar o arquivo .env.example dentro do `server` e renomear para .env

`DATABASE_SQLITE`

Este é o caminho de criação do arquivo, no exemplo eu deixo o local que utilizei para criação da database, mas não é mandatório
## Rodando Localmente

Clone o projeto da forma que for mais conveniente (http/ssh/gihub cli)

Atualize as dependências com npm

```bash
  cd nlw-esports/web
  npm install

  cd nlw-esports/mobile
  npm install
```

Ou com yarn

```bash
  cd nlw-esports/web
  yarn

  cd nlw-esports/mobile
  yarn
```

Ao chegar na pasta server, é importante criar o banco de dados com as migrações necessárias

```bash
  cd server
  yarn
  # Ou npm install

  npx prisma migrate dev

  # Ou

  yarn prisma migrate dev
```

Após isto, basta entrar em cada pasta e inicializar as aplicações

```bash
  cd server
  npm run dev
  # Ou
  yarn dev

  cd ../web
  npm run dev
  # Ou
  yarn dev

  cd ../mobile
  npm run start
  # Ou
  yarn start
```

É recomendável a ordem acima, para que o servidor possa estar disnponível antes do front e mobile possam fazer uma requisição

O mobile por último é interessante, para deixar a conexão com o Expo Go no celular para o final
## Autor

- [@subarusakaguchi](https://github.com/subarusakaguchi)


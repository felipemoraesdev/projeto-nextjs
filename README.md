This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Primeiramente, será necessário realizar algumas etapas antes de instalar o projeto:
 - Você precisa criar um projeto no [Google Firebase](https://console.firebase.google.com/) e habilitar o Firestore Database, pois será o banco de dados do projeto.
 - Você precisa também criar um projeto na [Google Cloud](https://console.cloud.google.com/) e gerar suas credenciais oAuth2.

Com suas credenciais criadas, remonei o arquivo `.env.local.example` para `.env.local` e adicione as credenciais nos locais indiciados:

```env
# Google oAuth
OAUTH_GOOGLE_CLIENT_ID=YOUR_CLIENT_ID
OAUTH_GOOGLE_SECRET_KEY=YOUR_SECRET_KEY

NEXTAUTH_SECRET=YOUR_SECRET
```

A variável de ambiente `NEXTAUTH_SECRET` é uma string aleatória utilizada para hash tokens, assinar/criptografar cookies e gerar chaves criptográficas.
Se você estiver utilizando um ambiente Linux, rode o comando abaixo para gerar um hash aleatório:

```bash
openssl rand -base64 32
```

Faça o download do arquivo `client_secret.json` que foi gerado ao gerar as credencias oAuth2 na [Google Cloud](https://console.cloud.google.com/).
Renomeie o arquivo para `serviceAccountKey.json` e coloque na raiz do projeto.

Agora estamos prontos para rodar o projeto.

## Running Project

Primeiro, instale as dependencias do projeto:

```bash
npm install
```

Agora, rode o comando abaixo e acesse a url gerada: [http://localhost:3000](http://localhost:3000)

```bash
npm run dev
```

## Versions

 - Node.JS: 18.15.0
 - NextJS: 13
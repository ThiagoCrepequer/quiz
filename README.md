# Quiz
O quiz foi criado usando o framework de aplicação web Express do Node.js como base para o servidor de aplicação. O banco de dados MongoDB foi usado para armazenar as perguntas e respostas do quiz. O front-end foi desenvolvido usando HTML, CSS e JavaScript para criar a interface do usuário e gerenciar a lógica de negócios do quiz.

O aplicativo foi projetado para permitir que os usuários respondam a uma série de perguntas de múltipla escolha com um limite de 3 erros. As perguntas e respostas são carregadas do banco de dados MongoDB e exibidas na interface do usuário através de elementos HTML. O JavaScript é usado para enviar as respostas do usuário para o backend e atualizar a pontuação conforme necessário.

O design da interface do usuário foi criado usando CSS para estilizar os elementos HTML e tornar o aplicativo atraente e fácil de usar. O quiz também possui uma funcionalidade de responsividade, permitindo que ele seja acessado e usado em dispositivos móveis e de desktop.

Em resumo, o quiz é uma aplicação web que foi desenvolvida usando o framework Express do Node.js, o banco de dados MongoDB e as tecnologias de front-end HTML, CSS e JavaScript.

## Demonstração

As regras do quiz são bastante simples. Quando o usuário responde uma pergunta corretamente, a próxima pergunta é exibida. Se o usuário erra a resposta, o erro é contabilizado e pode somar até 3 falhas. Quando o usuário atingir 3 falhas, o quiz é encerrado e a pontuação final é exibida.

![GIF 24-12-2022 15-13-02](https://user-images.githubusercontent.com/45575737/209447212-03f060ec-3dcd-4cdf-9b1c-578b579a50de.gif)
## Features em desenvolvimento
- Adicionar sistema de classificação.
- Melhorar aparência do jogo.
- Incluir perguntas de diferentes áreas de conhecimento.
- Criar página para adicionar novas perguntas e respostas ao banco de dados.
## API

Para gerenciar de forma eficiente as perguntas do quiz, o framework Express é usado para fornecer as perguntas ao cliente, receber as respostas do cliente e processá-las para verificar se estão corretas. O resultado dessa verificação é então devolvido ao cliente. Isso permite que o aplicativo gerencie as perguntas e respostas de forma rápida e precisa, garantindo a qualidade do quiz.
#### Get

```
  /pergunta
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
|  | `json` | Retorna uma pergunta |


#### Post
```
    /reposta
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| alternativa | `json` | Processa e retorna se a pergunta está correta |

## Instalação

Para testar ou modificar o código deste projeto, basta clonar o repositório para o seu computador, criar um banco de dados MongoDB Atlas, instalar as dependências necessárias usando o gerenciador de pacotes npm ou yarn e iniciar o aplicativo. Isso permitirá que você execute o código e faça alterações conforme necessário. É importante lembrar de atualizar o link de conexão com o banco de dados no arquivo .env de acordo com as configurações do seu banco de dados.
```bash
  git clone https://github.com/ThiagoCrepequer/quiz.git
  npm install
  npm start
```
    
## Environment Variables

Este repositório contém um único arquivo .env, que armazena uma variável com o link de conexão com o banco de dados MongoDB Atlas. Esse link é usado pelo aplicativo para se conectar ao banco de dados e acessar as perguntas e respostas do quiz.

`URL_MONGO`



## Feedback

Se você tiver algum comentário ou crítica sobre o quiz, não hesite em entrar em contato enviando um email para thiago.crepequer@hotmail.com. Sua opinião é importante para mim e estou sempre procurando maneiras de melhorar o aplicativo. Obrigado por usar o quiz!
## Autor

- [@thiagocrepequer](https://www.github.com/thiagocrepequer)


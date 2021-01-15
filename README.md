# Api desenvolvida para consumir dados da API do Github

O objetivo deste projeto é desenvolver uma API para consultar os dados da API do Github.

Trata-se de um serviço que fornece autenticação utilizando o OAuth do Github, sistemas de gerenciamento de rotas e 4 rotas cada uma com sua funcionalidade específica. 

## Como configurar a aplicação

Faça o clone via github do branch dev ou main, instale as dependências utilizando yarn preferencialmente. Crie uma autenticação do OAuth no Github e salve essas informações dentro de um arquivo .env, pode utilizar o .env.sample para criar o seu.

## Como executar a aplicação de forma local

Após a configuração, execute o comando yarn dev para inicializar a API.

## Visualização

A Api foi disponibilizado online via Heroku e pode ser visualizado em:

https://github-api-backend-challenge.herokuapp.com/

Está ligado com o branch production, com proteção de chamadas externas via cors e com limite de chamadas
de até 100 requisições por IP.

## Melhorias
- Faltou implementar testes.
- Faltou implementar outras chamadas de api do github.

Todo feedback é bem-vindo. 
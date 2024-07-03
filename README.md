# Iniciando o Projeto

Para inciar o projeto devemos utilizar o comando "tsup src --out-dir build" para criar a pasta build com os arquivos JavaSript devidamente necessários. Após a criação da build podemos atualizar as variaveis de ambiente no arquivo .env.example (alterando o nome para somente .env) com os dados como a porta onde desejamos rodar o projeto, o NODE_ENV que é o estado que o projeto será rodado sendo ele "development", "production" ou "test". Depois de preencher todos os dados exigidos no .env podemos rodar o projeto em um banco PostgreSQL sendo ele Dockerizado ou não.

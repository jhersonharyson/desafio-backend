# desafio-backend

# Instalação
* execute o comando `npm install` no diretorio do projeto
* execute o comando para desenvolvimento `nodemon ./bin/server.js` ou `node ./bin/server.js` para produção


# Rotas
* rota de verificação da api             : `GET HTTP http://localhost:3000/api/v1` 
* rota de listagem de games              : `GET HTTP http://localhost:3000/api/v1/servico/listar/games` 
* rota de listagem de videogames         : `GET HTTP http://localhost:3000/api/v1/servico/listar/videogames` 
* rota de lsitagem de game por videogame : `GET HTTP http://localhost:3000/api/v1/servico/listar/game-videogame` 
* rota de cadastro de game               : `POST HTTP http://localhost:3000/api/v1/servico//cadastro/game` 
* rota de cadastro de videogame          : `POST HTTP http://localhost:3000/api/v1/servico/cadastro/videogame` 


# Dados de Requisição
* A rota `POST` do cadastro de videogame recebe como parametro `name` e `company`
* A rota `POST` do cadastro de game recebe como parametro `name`, `console_id` e `console_name`


# Banco de Dados
* foi utilizado o mLab como plataforma de banco de dados em nuvem. Foi criado um instância com o node de `node-backebd` e as credenciais de usuário para acesso são `user => node123`, `password => node123` 

* string de conexão mongoDB `'mongodb://node123:node123@ds041992.mlab.com:41992/node-backend'` 


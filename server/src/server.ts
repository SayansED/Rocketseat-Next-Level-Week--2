import express, { request } from 'express';
import routes from './routes';
import cors from 'cors';

const app = express();

app.use(express.json());

// GET: Buscar ou listar uma informação "ex: buscar um usuário"
// POST: Criar alguma nova informação
// PUT: Atualizar uma informação existente
// DELETE: Deletar uma informação existente

// Corpo (Request Body): Dados para criação ou atualização de um registro
// Route Params: Identificar qual recurso eu quero atualizar ou deletar
// Query Params: Paginação 'listando todos os usuarios, mas tem como especicar quais', filtros

// rota
// http://localhost:3333/users

// recurso
// /users

//obter informações, resposta para devolução
/*
app.get('/users', (request, response) => {

    const users = [
        { name: 'Eduardo', age: 21},
        { name: 'Albert', age: 33},
    ];
    return response.json(users);
})*/

/*
app.post('/users', (request, response) => { // criar usuários 'post'
    
    console.log(request.body);

    const users = [
        { name: 'Eduardo', age: 21},
        { name: 'Albert', age: 33},
    ];
    return response.json(users);
})
*/

/*
app.delete('/users/:id', (request, response) => {
    console.log(request.params);

    const users = [
        { name: 'Eduardo', age: 21},
        { name: 'Albert', age: 33},
    ];
    return response.json(users);
})*/

/*
app.get('/users', (request, response) => {
    console.log(request.query );

    const users = [
        { name: 'Eduardo', age: 21},
        { name: 'Albert', age: 33},
    ];
    return response.json(users);
})*/

/*
app.get('/', (request, response) => {
    return response.json({ message: 'Hello World'});
});*/

app.use(routes);
app.use(cors());

app.listen(3333); // ouvir uma requisão http


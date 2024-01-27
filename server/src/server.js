//Importando o express para utiliza-lo
import express from 'express';
//Criando a variável de utilizaçao
const app = express();
//Criando a rota
//Primeiro parametro passa o nome da rota
//Segundo parametro request para fazer uma requisiçao de dados,
//response para enviar uma resposta.
app.get('/ads', (request, response) => {
    return response.json([
        { id: 1, name: 'Anúncio 1' },
        { id: 2, name: 'Anúncio 2' },
        { id: 3, name: 'Anúncio 3' },
    ]);
});
app.listen(3333);

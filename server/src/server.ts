//Importando o express para utiliza-lo
import express, { request } from 'express';

//Criando a variável de utilizaçao
const app = express();

//Criando a rota
//Primeiro parametro passa o nome da rota
//Segundo parametro request para fazer uma requisiçao de dados,
//response para enviar uma resposta.

app.get('/games',(request, response) => {
  return response.json([]);
})

app.post('/ads',(request, response) => {
  return response.status(201).json([]);
})

app.get('/games/:id/ads', (request, response) => {
  return response.json([
    { id: 1, name: 'Anúncio 1' },
    { id: 2, name: 'Anúncio 2' },
    { id: 3, name: 'Anúncio 3' },
    { id: 4, name: 'Anúncio 4' },
  ])
})

app.get('/ads/:id/discord', (request, response) => {
  return response.json([])
})

app.listen(3333);
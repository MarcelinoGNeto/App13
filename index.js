const express = require('express');
const api = express();

api.use(express.json());

api.get('/', (req, res) =>{
    res.send('Olá, este é um GET');
});


api.listen(3000, () => {
    console.log('API iniciou a execução...')
})
const express = require('express');
const app = express();
const bodyParser = require('body-parser'); // o body-parser vai fazer um parser no corpo da requisiçao/request, pegar esses dados e jogar dentro do request.body, ent qd acessar request.body vou ter acesso a todos os dados que submeti

app.use(bodyParser.urlencoded({extended: true})) // se nao tiver, nao vai fazer um parse no body, não le o corpo da requisiçao e nao transforma os dados para serem interpretados

// agora vou ter que atender às URLs
app.post('/usuarios', (req, resp) => { // fazer requisiçao 'post' em cima da url '/usuarios', ja que la no formulario to acessando /usuarios. 'req' e 'resp' é uma funçao middleware que é requisiçao e resposta [no caso não usaremos next()]
    console.log(req.body) // request.body para saber o que de fato chegou no corpo da requisição, imprimindo no servidor.
    console.log(req.query); // aqui são as querys que foram de fato usadas no formulário
    resp.send('<h1>Parabéns. Usuário Incluído.</h1>') // mandando como resposta a string 'parabens, vai renderizar no browser
})

app.post('/usuarios/:id', (req, resp) => {
    console.log(req.params.id); // quero que mostre o id do parametro tbm
    console.log(req.body) 
    resp.send('<h1>Parabéns. Usuário alterado. </h1>')
})

app.listen(3003); // a porta que coloquei para ouvir no formulario
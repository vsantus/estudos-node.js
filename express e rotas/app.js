var express = require('express'); // require importando as informações do express

const app = express(); //  app armazenando as informações de express, aconselhavel criar ela em constante
let porta = 3000

// como criar rotas?

app.get("/", function(req, res){
    res.send('Olá Mundo!');
}) // rota criada para inserir dados na propria pagina


app.get("/sobre", function(req, res){
    res.send('Aba sobre');
}) // rota criada para outro tipos de resultados, no caso outra pagina


app.listen(porta, function(){
console.log(`Servidor ON, rodando em http://localhost:${porta}/`)
}); // função listen é importada do express, nela só é necessario passar o numero que vai ser atrelado na porta, mais simples do que criar um servidor de forma convencional
// essa função dispara um evento, ela fica escutando algo acontecer na porta inserida


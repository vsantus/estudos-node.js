var http = require('http');

http.createServer(function(req, res){ // createServer, comando para criar um servidor em cima do http, essa função tambem é uma função de callback
 res.end('Seja Bem Vindo'); // res é resposta ao cliente, manda para o front o que estiver atrelado
}
).listen(3000); //listen serve para voce utilizar uma portar para "entraR" no seu servidor

console.log("Servidor ON");

// um servidor local só funciona se houver uma porta, um http e uma mensagem direcionada ao front, caso contrário ele fica carregando infinito
// necessario de forma manual sempre derrubar o servidor para atualizar alterações 
var express = require('express'); // require importando as informações do express

const app = express(); //  app armazenando as informações de express, aconselhavel criar ela em constante
let porta = 3000

// como criar rotas?

app.get("/", function (req, res) {
    res.send('Olá Mundo!')// rota criada para inserir dados na propria pagina
})


app.get("/sobre", function (req, res) {
    res.send('<h1> Aba sobre </h1>');
}) // rota criada para outro tipos de resultados, no caso outra pagina




//CRIAÇÃO DE PARAMETROS, ao colocar 2 pontos em um item apos o seu endereço, ele vira um parametro:
app.get("/sobre/:nome/:sobrenome/:idade", function (req, res) { //esse so ira funcionar se for passado algo apos o teste/, é possivel passar parametros HTML mais para frente
    res.send("<h1> Seja bem vindo </h1>" + req.params.nome + req.params.sobrenome + "<br>" + "<h2> Sua idade é </h2>" + req.params.idade); //atraves do req é possivel obter dados da requisao, afinal esse é o significado dela, como se fosse uma tabela JSON
     
    var teste = req.params
    console.table(teste)
})



// funcionando o servidor >>
app.listen(porta, function () {
    console.log(`Servidor ON, rodando em http://localhost:${porta}/`)
}); // função listen é importada do express, nela só é necessario passar o numero que vai ser atrelado na porta, mais simples do que criar um servidor de forma convencional
// essa função dispara um evento, ela fica escutando algo acontecer na porta inserida


var express = require('express') ; 
const app = express();
const handlebars = require('express-handlebars') ;


// template
app.engine('handlebars', handlebars.engine({defaultLayout:'main'})); // forma certa de rodar o handlebars
app.set('view engine', 'handlebars');

//antigo bodyparser foi descontinuado, express faz a mesma função
app.use(express.urlencoded({extended:false}))
app.use(express.json())

//rotas
app.get("/", function(req,res){
    res.render('formulario'); // importando arquivo da pasta view e exibindo
}) //apenas rotas do tipo get podem ser acessadas pela url

app.post("/cadastro", function(req,res){ 
    req.body.conteudo
    res.send('Texto: '  +req.body.titulo +"Conteudo: "+ req.body.conteudo) // com o bodyparser configurado é possivel pegar informações do handlebars e inserir direto em uma das rotas aula22
}) //post é um metodo de rota 

app.listen(8081, function () {
    console.log(`Servidor ON, rodando em http://localhost:8081/`);
});
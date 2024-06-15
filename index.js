var express = require('express') ; 
const app = express();
const handlebars = require('express-handlebars') ;
const Sequelize = require('sequelize');

// template
app.engine('handlebars', handlebars.engine({defaultLayout:'main'})); // forma certa de rodar o handlebars
app.set('view engine', 'handlebars');

// conexão mysql
const sequelize = new Sequelize('teste', 'root', 'password', { 
    host: "localhost",
    dialect: 'mysql'
})

//rotas
app.get("/", function(req,res){
    res.render('formulario'); // importando arquivo da pasta view e exibindo
})

app.post("/cadastro", function(req,res){
    res.send('teste')
})

app.listen(8081, function () {
    console.log(`Servidor ON, rodando em http://localhost:8081/`);
});
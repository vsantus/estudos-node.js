var express = require('express') ; 
const app = express();
const handlebars = require('express-handlebars') ;
const Sequelize = require('sequelize');

// template
app.engine('handlebars', handlebars.engine({defaultLayout:'main'})); // forma certa de rodar o handlebars
app.set('view engine', 'handlebars');

// conexão mysql
const sequelize = new Sequelize('teste', 'root', 'passwordSQL', { 
    host: "localhost",
    dialect: 'mysql'
})

//rotas
app.get("/cad", function(req,res){
    res.render('formulario'); // importando arquivo de layout e exibindo
}) 

app.listen(8081, function () {
    console.log(`Servidor ON, rodando em http://localhost:8081/`);
});
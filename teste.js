const Sequelize = require('sequelize');
const sequelize = new Sequelize('teste', 'root', 'v$4N70$', { // banco de dados, usuario e senha para se conectaR
    host: "localhost",
    dialect: 'mysql'
})

// ver se está funcionando 

// sequelize.authenticate().then(function(){ // .autenticate, função que me mostra se eu me conectei com o BD
//     console.log("Conectado com Sucesso!!!");
// }).catch(function(erro){
//     console.log("Falha na conecção...")
// }) 


//criando models, criar uma tabela pelo sequelize 

// const postagem = sequelize.define('postagens', {
//     titulo: {
//         type: Sequelize.STRING 
//     },
//     conteudo: {
//         type: Sequelize.STRING
//     },
// })

//como rodar model no sql

// postagem.sync({force:true}) // .sync sincroniza o codigo com o sql, e o force me deixa seguro que a tabela foi criada

const usuario = sequelize.define('usuarios', {
    nome:{
        type: Sequelize.STRING
    },
    sobrenome:{
        type: Sequelize. STRING
    },
    idade: {
        type: Sequelize.INTEGER //INT
    },
    email: {
        type: Sequelize.STRING
    }
})

usuarios.create({
    nome: "Vsantos",
    sobrenome: "DeFato",
    idade: 20,
    email: "teste@gmail.com"
})

usuario.sync({force:true}) 


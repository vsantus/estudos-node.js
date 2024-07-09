// arquivo de conexão com bancodedados, para ficar mais organizado



const Sequelize = require('sequelize');

// conexão mysql
const sequelize = new Sequelize('postapp', 'root', 'v$4N70$', { 
    host: "localhost",
    dialect: 'mysql'
})

module.exports = { 
    sequelize: sequelize,
    Sequelize : Sequelize
}
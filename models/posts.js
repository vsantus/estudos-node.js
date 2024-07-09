const db = require('./db')

const Post = db.sequelize.define('publicacoes', {
    titulo:{
            type: db.Sequelize.STRING
    },
    conteudo:{
        type: db.Sequelize.TEXT
    }
})


module.exports = Post;


// mysql> show databases;
// +--------------------+
// | Database           |
// +--------------------+
// | information_schema |
// | mysql              |
// | performance_schema |
// | postapp            |
// | sistemabd          |
// | sistemadebd        |
// | sys                |
// | teste              |
// +--------------------+
// 8 rows in set (0.00 sec)

// mysql> use postapp;
// Database changed
// mysql> show tables;
// +-------------------+
// | Tables_in_postapp |
// +-------------------+
// | publicacoes       |
// +-------------------+
// 1 row in set (0.00 sec)

// mysql> describe publicacoes;
// +-----------+--------------+------+-----+---------+----------------+
// | Field     | Type         | Null | Key | Default | Extra          |
// +-----------+--------------+------+-----+---------+----------------+
// | id        | int          | NO   | PRI | NULL    | auto_increment |
// | titulo    | varchar(255) | YES  |     | NULL    |                |
// | conteudo  | text         | YES  |     | NULL    |                |
// | createdAt | datetime     | NO   |     | NULL    |                |
// | updatedAt | datetime     | NO   |     | NULL    |                |
// +-----------+--------------+------+-----+---------+----------------+
// 5 rows in set (0.00 sec)
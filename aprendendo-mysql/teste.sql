CREATE TABLE usuarios(
    nome VARCHAR(50),
    email VARCHAR(100),
    idade INT
);

INSERT INTO usuarios(nome, email, idade) VALUES(
    "vsantos de fato", 
    "teste@gmail.com", 
    20
);


INSERT INTO usuarios(nome, email, idade) VALUES(
    "rbzz", 
    "teste2@gmail.com", 
    21
);

INSERT INTO usuarios(nome, email, idade) VALUES(
    "muguiwaranoluffy", 
    "xaperdepalia@gmail.com", 
    7
);

INSERT INTO usuarios(nome, email, idade) VALUES(
    "robintcha", 
    "milmoes@gmail.com", 
    7
);

SELECT * FROM usuarios WHERE idade = 7; 
SELECT * FROM usuarios WHERE nome = "rbzz"; 


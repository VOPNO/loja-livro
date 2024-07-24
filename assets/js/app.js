const sqlite3 = require('sqlite3').verbose();

// Abrir uma conexão com o banco de dados
let db = new sqlite3.Database('./assets/src/db/users.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Conectado ao banco de dados SQLite.');
});

// Criar uma tabela
db.run(`CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  email TEXT
)`);

// Inserir dados
db.run(`INSERT INTO users(name, email) VALUES(?, ?)`, ['John Doe', 'john.doe@example.com'], function(err) {
  if (err) {
    return console.log(err.message);
  }
  console.log(`Uma linha inserida com o ID ${this.lastID}`);
});

// Selecionar dados
db.all(`SELECT id, name, email FROM users`, [], (err, rows) => {
  if (err) {
    throw err;
  }
  rows.forEach((row) => {
    console.log(`${row.id}: ${row.name} - ${row.email}`);
  });
});

// Fechar a conexão
db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Conexão com o banco de dados encerrada.');
});

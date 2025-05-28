const mysql = require('mysql2');

// connection variable
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db-blog'
});

// execute connection
connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL!');
});

// export connection
module.exports = connection;
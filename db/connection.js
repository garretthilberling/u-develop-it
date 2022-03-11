const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'qcB$s^d(j*95,:L+Q!@ffZc',
        database: 'election'
    },
    console.log('Connected to the election database')
);

module.exports = db;
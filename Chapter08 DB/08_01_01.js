const mysql         = require('mysql');
const connection    = mysql.createConnection({
    host    :   'localhost',
    user    :   'study',
    password:   '1111',
    database:   'studydb'
});

connection.connect( (err) => {
    if (err) {
        console.log('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

connection.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
    if (err) throw err;
    console.log('The solution is : ', rows[0].solution);
});

connection.end();
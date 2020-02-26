var mysql = require("mysql");

if (process.env.JAWSDB_URL) {
    db = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    db = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "123456",
        database: "burgers_db"
    });
}

db.connect(function(err) {
    if (err) {
        console.error("Error connecting: " + err.stack);
        return;
    }
    console.log("Connected as id " + db.threadId);
});

module.exports = db;
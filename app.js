const express = require("express");
const mysql = require("mysql");

const app = express();
var db = mysql.createConnection({
  host: "77.72.0.150",
  user: "tanielogo_sqll",
  password: "!Loleq123",
  database: "tanielogo_sqll",
});
app.get("/createtable", (req, res) => {
  let sql = `INSERT INTO users VALUES (DEFAULT, 'lol',  'ttt')`;

  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Created");
  });
});
db.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
});
app.listen("3400", () => {
  console.log("Hosted on port 3400");
});

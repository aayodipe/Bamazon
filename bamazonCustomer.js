//Require  dependencies
const http = require('http');
const mysql = require('mysql')
const dotenv = require('dotenv').config()
//Local host port
const PORT = process.env.PORT||3000;

 //Initialize  the Server   
const server = http.createServer((req, res)=>{

     res.setHeader('Content-Type', 'text/plain')
     res.end('I am here');
     
})

//Set Data Base
var connection = mysql.createConnection({
     host     :process.env.DB_HOST,
     user     : process.env.DB_USER,
     password : process.env.DB_PASS,
     database : 'Bamazon'
   });

//Get the database connection ID
connection.connect(function(err) {
          if (err) throw err;
          console.log('connected as id ' + connection.threadId);
     });

// connection.end();
server.listen(PORT,()=>{
console.log(`Listen to port ${PORT}`)
})
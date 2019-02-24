//Require  dependencies
const http = require('http');
const mysql = require('mysql');
const dotenv = require('dotenv').config();
const inquirer = require('inquirer');
const fs = require('fs')
//Local host port
const PORT = process.env.PORT || 3000;

//Initialize  the Server   
const server = http.createServer((req, res) => {

     res.setHeader('Content-Type', 'text/plain')
     res.end('I am here');

})

//Connect to Data Base
const connection = mysql.createConnection({
     host: process.env.DB_HOST,
     user: process.env.DB_USER,
     password: process.env.DB_PASS,
     database: 'Bamazon'
});

connection.connect(function (err) {
     if (err) throw err;

     //Get the database connection ID
     console.log('connected as id ' + connection.threadId);

//Select all the item in the data base
     connection.query('SELECT * FROM products', (err, data) => {
          if (err) throw err;
          
         console.log('These are all the Item that are for sale')
         //Loop to print out the Product Items
               for(let i = 0; i < data.length; i++) {

                    console.log(`
                    Item Id :${data[i].item_id}
                    Product Name :${data[i].product_name}
                    Department Name :${data[i].department_name}
                    Price :${data[i].price}
                    Stock Quantity:${data[i].stock_quantity}
               
                    \n......................................\n
                    `)
               }
          connection.end()
     })
});


//Listen to the server
server.listen(PORT, () => {
     console.log(`Listen to port ${PORT}`)
})
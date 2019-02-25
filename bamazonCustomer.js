//Require  dependencies
const http = require('http');
const mysql = require('mysql');
const dotenv = require('dotenv').config();
const inquirer = require('inquirer');
const fs = require('fs')
//Local host port
const PORT = process.env.PORT || 3000;

//Set state Variable
let isAppRunning = false;

//Initialize  the Server   
const server = http.createServer((req, res) => {

     res.setHeader('Content-Type', 'text/plain')
     res.end('I am here');

})

//Connect to Data Base
const connection = mysql.createConnection({
     host: process.env.DB_HOST,
     port: 3306,
     user: process.env.DB_USER,
     password: process.env.DB_PASS,
     database: 'Bamazon'
});

connection.connect( err =>{
     let Products_ID = []
     if (err) throw err;

     //Get the database connection ID
     console.log('connected as id ' + connection.threadId);

     //Select all the item in the data base
     connection.query('SELECT * FROM products', (err, data) => {
          if (err) throw err;

          console.log('These are all the Item that are for sale')

          //Loop to print out the Product Items
          for (let i = 0; i < data.length; i++) {
               Products_ID.push(data[i].item_id)

               console.log(`
                    Item Id :${data[i].item_id}
                    Product Name :${data[i].product_name}
                    Department Name :${data[i].department_name}
                    Price :${data[i].price}
                    Stock Quantity:${data[i].stock_quantity}
               
                    \n......................................\n
                    `)
          }
          console.log('These are the order Number of the Available Products')
          console.log(Products_ID)

          // This line is to check the sync of Node
          if (Products_ID.length > 1) {

               // the ID of the product they would like to buy
               inquirer.prompt([

                    {
                         type: "input",
                         name: "order_ID",
                         message: "What is the ID of the product you would like to buy?"
                    },

                    {
                         type: "input",
                         name: "quantity",
                         message: "How many units of the product would you like to buy?"
                    }


               ]).then(result=> {

                    console.log(result)
                    let order_ID = parseInt(result.order_ID);
                    let qty_order = parseInt(result.quantity);

                    //Validate User input
                    if (Products_ID.includes(order_ID)) {

                  //Get the order product and quantity from the database  using product ID supplied by the customer
                         connection.query('SELECT * FROM products WHERE item_id = '+ order_ID, (err, data) => {
                         
                              if (err) throw err;
                              if(qty_order > parseInt(data[0].stock_quantity)){
                                   
                                   console.log('Sorry! Insufficient quantity!' )
                              }
                              else{
                                
                               let total = parseInt(data[0].price * qty_order).toFixed(2)
                               console.log(`Your total order is $${total}. Please proceed to Checkout`)
                              }
                         })
                         //Validate if order is available
                    } else {
                         
                         console.log('Sorry! This Item is not Available')
                    }

                    connection.end()
               })
          }

     })




});


// //Listen to the server
server.listen(PORT, () => {
     console.log(`Listen to port ${PORT}`)
})
//Require  dependencies
const http = require('http');
const mysql = require('mysql');
const dotenv = require('dotenv').config();
const inquirer = require('inquirer');
const fs = require('fs')
//Local host port
const PORT = process.env.PORT || 3000;

//Connect to Data Base
const connection = mysql.createConnection({
     host: process.env.DB_HOST,
     port: 3306,
     user: process.env.DB_USER,
     password: process.env.DB_PASS,
     database: 'Bamazon'
});

connection.connect(err => {
     let Products_ID = []
     if (err) throw err;

     //Get the database connection ID
     console.log('connected as id ' + connection.threadId)

     inquirer.prompt([

          {
               type: "list",
               name: "option",
               message: "What would you like to Check?",
               choices: ['View Products for Sale', 'View Low Inventory', 'Add to Inventory', 'Add New Product']

          }
     ]).then(result => {

          switch (result.option) {

               case 'View Products for Sale':
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

                         console.log('These are IDs of the Available Products')
                         console.log(Products_ID)
                    })
                   break
                    //To get inventories less than FIVE(5)

               case 'View Low Inventory':

                    connection.query('SELECT * FROM products WHERE stock_quantity < 5', (err, data) => {
                         if (err) throw err;

                         console.log('These are all the items that their Stock is less than 5')
                         //Loop to print out the Product Items
                         for (let i = 0; i < data.length; i++) {
                          

                              console.log(`
                                Item Id :${data[i].item_id}
                                Product Name :${data[i].product_name}
                                Department Name :${data[i].department_name}
                                Price :${data[i].price}
                                Stock Quantity:${data[i].stock_quantity}
                           
                                \n......................................\n
                                `)
                         }



                    })
                    break

                    //Select all Item 
                   case 'Add to Inventory':
                   inquirer.prompt([
                     
                    {
                         type: "list",
                         name: "item_id",
                         choices: ['104', '105', '106', '107', '108', '109', '1201', '1202', '6403', '6404', '6405','last'],
                         message: "What is the item Id?"
                    },
                    {
                         type: "input",
                         name: "product_name",
                         message: "What is the product name?"
                    },
                    {
                         type: "list",
                         name: "department_name",
                         choices:['Wear','Computer','Electronic', 'Grocery','Jewelry'],
                         message: "What is the Product department?"
                    },
                    {
                         type: "input",
                         name: "price",
                         message: "How must is this item?"
                    },
                    {
                         type: "input",
                         name: "stock_quantity",
                         message: "How many quantity do you want to add?"
                    }
                   ]).then(resp => {
                        console.log(resp.item_id)
                        console.log(resp.price)
                        console.log(resp.stock_quantity)
                   
                        connection.query(
                         'UPDATE products SET stock_quantity = ?, price = ? Where item_id = ?',
                         [resp.stock_quantity, resp.price, resp.item_id],
                         (err, result) => {
                           if (err) throw err;
                       
                           console.log(`Changed ${result.changedRows} row(s)`);
                         }
                       );
                       
                       
                        
                   
                   })
                   break
          // Add a product

          case 'Add New Product':
          inquirer.prompt([
                     
               {
                    type: "input",
                    name: "item_id",
                    message: "What is the item Id?"
               },
               {
                    type: "input",
                    name: "product_name",
                    message: "What is the product name?"
               },
               {
                    type: "input",
                    name: "department_name",
                    message: "What is the Product department?"
               },
               {
                    type: "input",
                    name: "price",
                    message: "How must is this item?"
               },
               {
                    type: "input",
                    name: "stock_quantity",
                    message: "How many quantity do you want to add?"
               }
              ]).then(result => {

               
               connection.query('INSERT INTO products SET ?', result, function (err, res) {
                    if (err) throw err;
                    console.log(`Item inserted`);
                  });
              })
              break

          }

     })
})
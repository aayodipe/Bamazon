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
                         }
                    })
               })
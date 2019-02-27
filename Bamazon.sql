
-- Create a database 
create DATABASE Bamazon;
--Use the database
use Bamazon;
-- Create Table
CREATE TABLE products (
    item_id INT(7),
    product_name VARCHAR(255),
    productsdepartment_name VARCHAR(255),
    price INT,
    stock_quantity INT,
    PRIMARY KEY (item_id)
    -- Select from Table
) SELECT * FROM    products;
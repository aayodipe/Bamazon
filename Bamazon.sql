
-- Create a database 
create DATABASE Bamazon;
--Use the database
use Bamazon;
-- Create Table
CREATE TABLE `products` (
  `item_id` int(7) NOT NULL,
  `product_name` varchar(255) DEFAULT NULL,
  `department_name` varchar(255) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `stock_quantity` int(11) DEFAULT NULL,
  `product_sales` int(11) DEFAULT NULL,
  PRIMARY KEY (`item_id`)
)

INSERT INTO `products` VALUES (104,'Printer','Computer',120,20,NULL),(105,'Lamp','Electronic',2,40,NULL),(106,'Milk','Grocery',4,50,NULL),(107,'Battery','Electronic',2,30,NULL),(108,'Ring','Jewelry',1200,3,NULL),(109,'Jean','Wear',50,20,NULL),(1101,'Sport_Items','Sport',210,20,NULL),(1201,'Laptop','Computer',800,20,NULL),(1202,'Printer','Computer',300,10,NULL),(1203,'Scanner','Computer',200,4,NULL),(3042,'Payroll Software','Human Resources',2000,1,NULL),(6403,'Shoe','Wear',51,20,NULL),(6404,'Nike','Wear',76,20,NULL),(6405,'Jodans','Wear',130,2,NULL);
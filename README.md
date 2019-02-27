# Bamazon

Bamazon is a mini Amazon. This App can be use buy customers to order a item, by the manager to check and update item or product and the supervisor to add view, update and add products    

## Getting Started 
This  app uses HTML, CSS and Javascript for its front end and Node and MySQL database for its backend.

### **For you to run this app you need to run :**

```
npm init
```   
```
npm install
```  
This two code will initialize node module on your local system and also install all the dependencies.

Then copy the code in the Database.sql into mySql workbench to have the data That I used Then connect to your database using mysql packages


### **Usage**
The app has three section. The Customer section, The Manager section and The Supervisor section each section with different file. 

*  bamazonCustomer.js 
*  bamazonManager.js 
* bamazonSupervisor.js


### THE CUSTOMER SECTION

To run the customer section, 

type the following code to your terminal/ bash

```
node bamazonCustomer.js
```
![Imgur](https://i.imgur.com/xFHGcQZ.png)

Initial running of this application will display all the items available for sale. Include the ids, names, and prices of products for sale. The asked the cusomer what Is the ID of the item he wanto to buy?

This is demostrate by the image below.
![Imgur](https://i.imgur.com/K3WvbYU.png).

At the end of this result, the app then prompt users with two messages.
   * The first question asked them the ID of the product they would like to buy.   
   * Then the second message ask how many units of the product they would like to buy.

   

After answering these questions,  if the item id is correct and the quantities is less than what is in the stock, the app then returns the total cost of the items and asked the customers to proceed to checkout.

![Correct information and enough stock](https://i.imgur.com/Mo1gELB.png)

Else, if the quantities of the item that the customer want is greater than what is in the stock, the app returns INSUFFICIENT QUANTITY!
![Not enough Stock](https://i.imgur.com/4axtxfm.png)
   
Lastly, If the item is not available the user get a response that the item is not availble

![Wrong Item information](https://i.imgur.com/6lt0kex.png)
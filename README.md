# Bamazon

Bamazon is a mini Amazon. This App is create  for and can be use by customers to order an item, by the manager to check and update items or products and the supervisor to view, update and add products    

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

   

After answering these questions,  if the item id is correct and the quantities is less than what is in the stock, the app then returns the total cost of the items and asked a customer to proceed to checkout.

![Correct information and enough stock](https://i.imgur.com/Mo1gELB.png)

Else, if the quantities of the item that the customer want is greater than what is in the stock, the app returns INSUFFICIENT QUANTITY!
![Not enough Stock](https://i.imgur.com/4axtxfm.png)
   
Lastly, If the item is not available the user get a response that the item is not availble

![Wrong Item information](https://i.imgur.com/6lt0kex.png)

### THE MANAGER SECTION

For the manager, type the following code to your terminal/ bash

```
node bamazonManager.js
```

Running the above code returns a set of menu options to pick from:

    * View Products for Sale
    
    * View Low Inventory
    
    * Add to Inventory
    
    * Add New Product

![Run BamazonManager](https://i.imgur.com/WeLhMuK.png)

* If a manager selects `View Products for Sale`, the app will list every available item: the item IDs, names, prices, and quantities.

![View All Products](https://i.imgur.com/z2gkUh9.png)


  * If a manager selects `View Low Inventory`, this app will list all items with an inventory count lower than five.

  [View Low Inventories](https://i.imgur.com/55n0Dii.png)

  * If a manager selects `Add to Inventory`, this app will display a prompt that will let the manager "add more" of any item currently in the store.
  

### Provide update information
![Imgur](https://i.imgur.com/Q4QmIVA.png)

### Initial Position before update
  ![Initial Position of database](https://i.imgur.com/Ub5Hw6T.png)

###  Position after update
![Position after Updated](https://i.imgur.com/ZFsp0vP.png)

  * If a manager selects `Add New Product`, it allow the manager to add a completely new product to the store. 

### Provide Product detail

![Provide Product detail](https://i.imgur.com/9ydhWNJ.png)

### Position After Product Added
![Position After Product Added](https://i.imgur.com/ggVmVSE.png)


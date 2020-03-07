# Week-14. burger 

## Over View

Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat.
Whenever a user submits a burger's name, this app will display the burger on the left side of the page -- waiting to be devoured.
Each burger in the waiting area also has a Devour it! button. When the user clicks it, the burger will move to the right side of the page.
This app will store every burger in a database, whether devoured or not.
    

**Run Application**

[Click Here to Burger Web!](https://burger-new-app.herokuapp.com/)

## Technologies used in the development of this app include
This burger logger was created with MySQL, Node, Express, Handlebars and a custom ORM. The MVC design pattern was followed to ensure the use of Node and MySQL to query and route data in this app, and Handlebars to generate the HTML.

## Notice
Note that the connection information in connection.js is a false information. In order to deploy this app yourself, replace this with your databases' information, and also make sure to change the db name in the sql schemas. 
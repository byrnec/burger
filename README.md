# Burger Shop
## A shop for those who want the best food, the fastest

### Created By Christie Byrne
![alt text](xx.png)

### Try it out at https://pacific-castle-73600.herokuapp.com/!

# Purpose of the App
A full stack, MVC (Model-View-Controller) application that allows you to create burgers (POST), view a list of burgers available to eat (GET), devour burgers (PUT), and throw them away after devoured (DELETE).

Burger logger with MySQL, Node, Express, Handlebars and a homemade ORM. Being sure to follow the MVC design pattern; use Node and MySQL to query and route data in the app, and use Handlebars to generate your HTML.

## Getting Started
The following section will take you through the steps of setting up this application and getting it running locally on your computer.

If you don't want to set up this project locally and just want to see the deployed application, go to dfklsdfs.herokuapp.com/.

To set up this application locally on your computer, perform the following steps:

### Clone the repository
    The first step is to clone the project repository to a local directory on your computer. To clone the repository, run the following commands:

    git clone git@github.com:byrnec/burger.git
    cd burger
    After you clone the repository, navigate to the project root directory (burger). T
### Install Node.js
    you can install the latest version here: https://nodejs.org/en/.
### Install the dependencies
    The following npm packages are dependencies to the project.

    After you clone the repository to a local directory, change directory to the project root directory and run the following command to install the required npm packages:

    npm install
    express - a Node.js web application framework (https://www.npmjs.com/package/express).
    body-parser - used to parse incoming request bodies in a middleware. (https://www.npmjs.com/package/body-parser)
    dotenv - used to retrieve the MySQL password from a .env file (https://www.npmjs.com/package/dotenv).
    mysql - used to create a connection to the MySQL database via the command line.(https://www.npmjs.com/package/mysql)
    express-handlebars - allows you to use handlebars to create templates to build the HTML.
    (https://www.npmjs.com/package/express-handlebars)
    Version information for each of these packages is available in the package.json file in the project root directory.


### Install MySQL Workbench
    you can install the latest version here: https://www.mysql.com/products/workbench/
### Set up a development database
    To set up a development database that you can use with this application, perform the following steps:

Open the db/schema.sql file and paste the contents of this file into MySQL Workbench.

Execute the following statements:

                CREATE DATABASE burger_db;
                USE burger_db;
  
Running these statements creates a database called burger_db and sets it as the current database being used.

Execute the following statement to create a table called burgers.

                CREATE TABLE burgers
                (
                    id int NOT NULL AUTO_INCREMENT,
                    burger_name varchar(255) NOT NULL,
                    devoured boolean NOT NULL,
                    PRIMARY KEY (id)
                );
  
This table includes columns for id (which is the primary key), burger name, and devoured (boolean value).

To populate the burgers table with some starting burger data, open up the db/seeds.sql file and paste the contents into MySQL Workbench. Execute the code in seeds.sql from MySQL Workbench:

                                INSERT INTO burgers (burger_name, devoured) VALUES ("Awesome Burger", true);
                                INSERT INTO burgers (burger_name, devoured) VALUES ("Good Burger", false);
                                INSERT INTO burgers (burger_name, devoured) VALUES ("Mondo Burger", true);

Your table should look similar to the following example:


### Create a .env file to store your MySQL Password

### Verify database connection information
    Open the config/connection.js file and verify that the database connection information (host, user, port, password, and database) reflects the database you just created.

Modify the connection properties as needed to reflect your database instance.

For example:

var connection = mysql.createConnection({
host: "localhost", port: 3306,
user: "root",
password: process.env.MYSQL_PASSWORD,
database: "burger_db"
});                   
### Start the server
* run the following command to start the server:
    node server.js
* To verify that the server has started and the application is working locally on your computer, open Chrome and go to http://localhost:3000.


![alt text](xx.png)
![alt text](xxx.png)

# How to Use
* Input the names of burgers you'd like to eat. 
* Whenever a user submits a burger's name, your app will display the burger on the left side of the page -- waiting to be devoured. 
* Each burger in the waiting area also has a Devour it! button. 
* When you click it, the burger will move to the "devoured" section of the page. 
* Your app will store every burger in a database, whether devoured or not.

 ## Backend technologies
* Node.js (https://nodejs.org/en/)
* MySQL (https://www.mysql.com/)
* Express (http://expressjs.com/)
* ORM - Object Relational Mapping (https://en.wikipedia.org/wiki/Object-relational_mapping)

## Frontend technologies
* HTML
* CSS
* Bootstrap (http://getbootstrap.com/)
* Javascript
* jQuery (https://jquery.com/)
* Handlebars (http://handlebarsjs.com/)
    
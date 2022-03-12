# CS465-fullstack
CS-465 Full Stack Development with MEAN

## Table of Contents
* [Introduction](#Introduction)
* [Technologies](#Technologies)
* [Setup](#Setup)
* [Functionality](#Functionality)
* [Usage](#Usage)
* [Future Functionaility](#Future-Functionaility)
* [Sources](#Sources)

## Introduction
Travlr is a web application used to view travel packages. Travel information is divided into travel, rooms, and meals. Travlr also includes a news section for information on events. Travlr also includes an administration service built within the project to manage content

This was a school project where a pre-built static webpage was transformed into a dynamic full stack application. Within this project, we learned about the Model View Controller framework. Our model was the trip information being served up to the webpage or view from the server or controller. This project was built using the MongoDB, Express, Angular, and Node.js stack.

## Technologies
#### FrontEnd
* Angular 13.2.5
* Node 14.19.0
* Languages used: HTML, CSS, Typescript
#### BackEnd
* Node.js
* Express
* Language used: Javascript
#### Database
* MongoDB 5.0.3

## Setup 
* Clone the application
`git clone https://github.com/SNHUPatKnight/fullstack.git`

* Navigate to the folder to run the application
```
cd .\fullstack\
ng serve
```
* The frontend will load on http://localhost:3000

* Navigate to the admin folder to run the admin application
```
cd .\fullstack\app_admin\
ng serve
```
* The admin will load on http://localhost:4200

## Functionality
* Dynamically serves information using the MVC framework
* Register a new Admin account
* Login and Logout through Authentication
* Create, Read, Update, and Delete trip information
* Authorization checks whether CRUD operations can be performed
* Authorization  using generated security tokens
* Admin app built as a single page application

## Usage
Load Main App and navigate through the different scenes
![Screenshot 2022-02-18 234504](https://user-images.githubusercontent.com/82788581/154787251-f65b88dc-d248-4600-be26-3eed7b5feffc.png)

![Screenshot 2022-02-18 234554](https://user-images.githubusercontent.com/82788581/154787255-25002c38-e23a-4ad0-b801-20c6540a472e.png)

![Screenshot 2022-02-18 234610](https://user-images.githubusercontent.com/82788581/154787258-569c8db7-a82a-407c-8c92-17e55483c44a.png)

Load the Admin App and login in
![Screenshot 2022-02-19 001250](https://user-images.githubusercontent.com/82788581/154787278-29101e98-df2c-4f1b-8552-42d7e0dd82f6.png)

View the trips
![Screenshot 2022-02-19 001148](https://user-images.githubusercontent.com/82788581/154787287-31450a6c-1ad3-4157-81e8-9a83c2d1fcdd.png)

Add a new trip
![Screenshot 2022-02-19 001202](https://user-images.githubusercontent.com/82788581/154787292-c32f6bd5-3835-4a37-bf98-79f7eeaca36d.png)

Edit a trip
![Screenshot 2022-02-19 001215](https://user-images.githubusercontent.com/82788581/154787296-06206b57-8d0f-4ec2-b159-47c753a14416.png)

Delete a trip
![Screenshot 2022-02-19 001234](https://user-images.githubusercontent.com/82788581/154787303-c43613dc-5b8f-4881-af3b-978f61cee1e8.png)

## Future Functionality
* Deploy Application to either AWS or Heroku
* Migrate the Rooms, Meals, and News information to the database
* Implement CRUD operations for Rooms, Meals, and News information
* Create Users
* Grant users the ability to book packages

## Sources
This project was as coursework for a class. This was my first introduction ito full stack applications and MVC frameworks. 
* CS - 465 Full Stack Development
     * Southern New Hampshire University
* Getting MEAN with Mongo, Express, Angular, and Node
     * Author: Simon Holmes 
     * Creates a review tracking system using Mongo, Express, Angular, and Node


# School Reflection
## Architecture
* Compare and contrast the types of frontend development you used in your full-stack project, including Express HTML, JavaScript, and the single-page application (SPA).

HyperText Markup Language, HTML, is a language that is used to design a webpage. HTML pages are static with no real interactivity. JavaScript is a programming language that is used to enhance web pages. It can be used to make web pages more dynamic. Single-page applications, SPA, are simple webpage where all information can be stored and edited. SPA’s can be used as administration sites.

* Why did the backend use a NoSQL MongoDB database?

A NoSQL database is a type of database that does not require a structure for data. This means that a document that is stored within the databases does not need to have the same information as any of the other data stored. Another benefit of NoSQL in this project is that the documents are stored as JSON objects. JSON or JavaScript Object Notation is a format for data. JSON is easily accessible with the JavaScript programming language that was used in this project

## Functionality

* How is JSON different from JavaScript and how does JSON tie together the frontend and backend development pieces?

JSON is a format for data. We use JSON to format information that is being stored in an easy-to-read way. JavaScript is a programming language. We can use JavaScript to create dynamic and interactable websites. JSON can be easily accessed using JavaScript making it a good format to use when moving data from the frontend to the backend of the website.

* Provide instances in the full-stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.

One instance where we refactored code is when we took the static HTML pages and turned them into dynamic JavaScript webpages. Using the Model-View-Controller methodology, we took the original webpages and separated them into a controller that handles the route of the webpage, a view that handles the look of the page, and the model that handles the data stored within the page. This begins to simplify the web pages.

Another instance of refactoring the project is when we created a separate header and footer file that would control the view of the two. This cuts down on reused code throughout the project. It also simplifies the approach of making changes to the project because we only need to go to a single file to make updates.

## Testing

* Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full-stack application.

Creating separate methods that handle the different requests and retrieval makes the project easier to maintain. If there is an issue with a particular method, a developer can quickly navigate there and create a fix for the issue. Methods also make testing the project easier as we can test the individual calls for functionality. When testing methods, we are also testing the communication between the frontend and backend of the project or the endpoints. Security is important in the project because we do not want all individuals to have access to the data that is stored. We want users to be able to access the data but not to make changes and we want the admin to be able to access and make changes to the data. We need to make sure through testing that the authorization in the project works as intended.

## Reflection

* How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?

This course has helped me to have a better understanding of how a large project like a website is created. In working through this course, I was shown how to take several different technologies to create one project. In previous courses, I have not had the experience of working with several technologies for one project. This has given me the ability to plan websites from start to finish. This course also taught me how to create both the frontend and backend of a website.


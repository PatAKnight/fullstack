# cs465-fullstack
CS-465 Full Stack Development with MEAN

# Architecture
* Compare and contrast the types of frontend development you used in your full-stack project, including Express HTML, JavaScript, and the single-page application (SPA).

HyperText Markup Language, HTML, is a language that is used to design a webpage. HTML pages are static with no real interactivity. JavaScript is a programming language that is used to enhance web pages. It can be used to make web pages more dynamic. Single-page applications, SPA, are simple webpage where all information can be stored and edited. SPA’s can be used as administration sites.

* Why did the backend use a NoSQL MongoDB database?

A NoSQL database is a type of database that does not require a structure for data. This means that a document that is stored within the databases does not need to have the same information as any of the other data stored. Another benefit of NoSQL in this project is that the documents are stored as JSON objects. JSON or JavaScript Object Notation is a format for data. JSON is easily accessible with the JavaScript programming language that was used in this project

# Functionality

* How is JSON different from JavaScript and how does JSON tie together the frontend and backend development pieces?

JSON is a format for data. We use JSON to format information that is being stored in an easy-to-read way. JavaScript is a programming language. We can use JavaScript to create dynamic and interactable websites. JSON can be easily accessed using JavaScript making it a good format to use when moving data from the frontend to the backend of the website.

* Provide instances in the full-stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.

One instance where we refactored code is when we took the static HTML pages and turned them into dynamic JavaScript webpages. Using the Model-View-Controller methodology, we took the original webpages and separated them into a controller that handles the route of the webpage, a view that handles the look of the page, and the model that handles the data stored within the page. This begins to simplify the web pages.

Another instance of refactoring the project is when we created a separate header and footer file that would control the view of the two. This cuts down on reused code throughout the project. It also simplifies the approach of making changes to the project because we only need to go to a single file to make updates.

# Testing

* Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full-stack application.

Creating separate methods that handle the different requests and retrieval makes the project easier to maintain. If there is an issue with a particular method, a developer can quickly navigate there and create a fix for the issue. Methods also make testing the project easier as we can test the individual calls for functionality. When testing methods, we are also testing the communication between the frontend and backend of the project or the endpoints. Security is important in the project because we do not want all individuals to have access to the data that is stored. We want users to be able to access the data but not to make changes and we want the admin to be able to access and make changes to the data. We need to make sure through testing that the authorization in the project works as intended.

# Reflection

* How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?

This course has helped me to have a better understanding of how a large project like a website is created. In working through this course, I was shown how to take several different technologies to create one project. In previous courses, I have not had the experience of working with several technologies for one project. This has given me the ability to plan websites from start to finish. This course also taught me how to create both the frontend and backend of a website.


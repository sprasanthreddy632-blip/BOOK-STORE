**Model-View-Controller (MVC) Architecture**



The Online Book Store backend application follows the Model-View-Controller (MVC) architectural pattern, a software design approach that separates the application into three interconnected components: Model, View, and Controller. In this project, Spring Boot is used to implement the MVC architecture, which helps organize the application into different layers with specific responsibilities. This separation improves code readability, maintainability, scalability, and simplifies future enhancements.



The MVC architecture enables the application to process user requests efficiently by routing them through the controller, executing business logic in the service layer, interacting with the database through the repository and model layers, and finally returning the appropriate response to the user.

**MVC Workflow**



The following diagram illustrates the MVC architecture used in the Online Book Store application.



&#x20; **User**

&#x20;  **│**

&#x20;  **▼**

**HTTP Request**

&#x20;  **│**

&#x20;  **▼**

**Controller**

&#x20;  **│**

&#x20;  **▼**

**Service Layer**

&#x20;  **│**

&#x20;  **▼**

**Repository (DAO)**

&#x20;  **│**

&#x20;  **▼**

**Database (MySQL)**

&#x20;  **▲**

&#x20;  **│**

**Repository**

&#x20;  **▲**

&#x20;  **│**

**Service**

&#x20;  **▲**

&#x20;  **│**

**Controller**

&#x20;  **│**

**HTTP Response**

&#x20;  **│**

&#x20;  **▼**

&#x20; **User**



**Model Layer (Data Layer)**



The Model Layer is responsible for managing the application's data and business entities. It defines the structure of the database tables using JPA Entity classes and performs database operations through Spring Data JPA and Hibernate.



The model layer represents real-world objects such as Users, Books, Orders, Cart, and Reviews. It communicates with the MySQL database to perform operations such as creating, reading, updating, and deleting records while maintaining data integrity.



**Responsibilities**

Define database entities.

Store and retrieve application data.

Perform CRUD (Create, Read, Update, Delete) operations.

Maintain relationships between different entities.

Ensure data consistency within the database.



**Controller Layer**



The Controller Layer acts as the communication bridge between the client application and the backend. It receives HTTP requests from the frontend, validates the request data, invokes the appropriate service methods, and returns the response to the client in JSON format.



Controllers expose RESTful APIs using Spring Boot annotations such as @RestController and @RequestMapping, enabling seamless communication between the frontend and backend.



**Responsibilities**

Receive HTTP requests from the client.

Validate incoming request data.

Invoke business logic through the Service Layer.

Return appropriate HTTP responses.

Handle exceptions and error responses.



**Service Layer**



The Service Layer contains the application's business logic. It acts as an intermediate layer between the Controller and Repository, ensuring that controllers remain lightweight and focused only on handling requests and responses.



This layer performs operations such as authentication, order processing, inventory updates, payment validation, and other business-related functionalities before interacting with the database.



**Responsibilities**

Implement business logic.

Process customer orders.

Authenticate users.

Update inventory after purchases.

Validate application data.

Coordinate communication between controllers and repositories.



**Repository Layer**



The Repository Layer is responsible for interacting directly with the MySQL database. It uses Spring Data JPA Repositories to perform database operations without requiring developers to write complex SQL queries.



Repositories provide built-in methods for data access and also support custom queries whenever additional functionality is required.



**Responsibilities**

Retrieve records from the database.

Save new records.

Update existing records.

Delete records.

Execute custom database queries.



**View Layer (Frontend)**



The View Layer represents the user interface of the Online Book Store application. It is implemented using React.js, allowing users to interact with the system through an intuitive and responsive interface.



The frontend communicates with the backend through REST APIs to perform operations such as user authentication, browsing books, managing the shopping cart, placing orders, and viewing order history.



**Responsibilities**

Display book catalog.

Provide login and registration pages.

Display shopping cart and checkout pages.

Show order confirmation and order history.

Provide Seller Dashboard.

Provide Admin Dashboard.

Display application responses received from the backend.



**Request Processing Flow**



The Online Book Store follows the request-response cycle shown below:



The user performs an action through the React frontend, such as logging in, searching for books, or placing an order.

The frontend sends an HTTP request to the appropriate REST API endpoint.

The Controller receives the request and validates the input.

The Controller forwards the request to the Service Layer.

The Service Layer processes the business logic and interacts with the Repository Layer.

The Repository communicates with the MySQL database to retrieve or update data.

The database returns the requested information to the Repository.

The Repository sends the data back to the Service Layer.

The Service Layer returns the processed data to the Controller.

The Controller sends an HTTP response to the frontend.

The frontend displays the response to the user.

**Advantages of Using MVC Architecture**



**Separation of Concerns**



Each layer has a clearly defined responsibility, making the application easier to understand, develop, and maintain.



**Improved Maintainability**



Changes made in one layer have minimal impact on other layers, reducing the risk of introducing bugs.



**Scalability**



New features can be added easily by creating new controllers, services, repositories, and model classes without affecting existing functionality.



**Code Reusability**



Business logic implemented in the Service Layer and data access methods in the Repository Layer can be reused across multiple modules.



**Easier Testing**



Each layer can be tested independently using unit and integration testing, improving software quality.



**Better Team Collaboration**



Frontend and backend developers can work independently on different layers of the application, increasing development efficiency.



**Enhanced Security**



Authentication, authorization, and request validation can be implemented effectively within the Controller and Service layers.



**Organized Project Structure**



The MVC pattern provides a clean and modular project structure, making the codebase easier to navigate, understand, and maintain as the application grows.


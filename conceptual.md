### Conceptual Exercise

Answer the following questions below:

- What is a JWT?

`JWT is a JSON Web Token. It is a way to authenticate a user.

- What is the signature portion of the JWT?  What does it do?

The signature portion is the version of header & payload, signed with secret key.
The signature ensures token integrity and is generated using the header, payload, and a secret key. 

- If a JWT is intercepted, can the attacker see what's inside the payload?

Yes, the attacker can see inside the payload. JWT is not encrypted by default.

- How can you implement authentication with a JWT?  Describe how it works at a high level.

To implement JWT, you first import JWT Library in to the project. You then create a JSON Web token and sign it with the secret key. You then send the token to the client. The client then sends the token to the server. The server then verifies the token and if it is valid, it allows the user to access the protected resources.

- Compare and contrast unit, integration and end-to-end tests.

Units tests are the most basic tests. They test an individual function or method. The goal is to make sure each individual unit of code works. 

Integration tests the integration of multiple units of the application. The goal is make sure the units integrate together correctly - for example a database and an API. Supertest is a tool that can be used to test integration tests.

End-to-end tests the entire application. The goal is to simulate a real user's interactions with the app to ensure it works. You can use tools like Cypress to test end-to-end tests.

- What is a mock? What are some things you would mock?

A mock is a fake object that simulates the behavior of real code. You can mock things like a database, an email, a file, etc.

jest.mock(./email);

- What is continuous integration?

Continuous Integration is a development practice for code changes to be built, tested, and validated each time a developer pushes their changes to the repository (Github.) Developers push small changes that are immediately checked by an automated system.

- What is an environment variable and what are they used for?

An environment variable is a variable whose value is set outside the program.  An env var is made up of a name/vlaue pair, and any number may be created and available for reference. They are used to store sensitive information that should not be exposed to the public.



- What is TDD? What are some benefits and drawbacks?

TDD stands for Test-Driven Development and is a software development approach where one writes test cases before writing the actual code.
Some benefits are: 
  - Unit tests provides constant feedback on the functions.
  - Design quality increased because of the tests are prioritized.
  - TDD is a safety net getting in front of bugs.
  - TDD ensures that the code is meeting requirements specified for the project.
  - TDD has a short development cycle.

- What is the value of using JSONSchema for validation?

JSONSchema is declarative language that provides a standardized way to describe and validate JSON data. The value is JSONSchema defines the rules, structure, and constraints that JSON data should follow as JSON data can be up to interpretation and lack comment documentation. 



- What are some ways to decide which code to test?

Coverage-based Test Case Prioritization
  This approach is based on the idea that the more code that can be covered by tests, the higher priority it needs to be tested.

Risk-based Test Case Prioritization
  This approach is based on the idea that the more risky code is, the more it needs to be tested.

Requirement-based Test Case Prioritization
  This approach is based on the idea that the more important code is, the more it needs to be tested.




- What does `RETURNING` do in SQL? When would you use it?

The RETURNING clause is used to return the values of the data in rows that were just modified - during INSERT, UDPATE, or DELETE.
This allows you see the result of the change immediately rather than making a second SELECT query. 

- What are some differences between Web Sockets and HTTP?

HTTP is unidirectional, with a request-response cycle with the client and server. It is stateless, meaning that the server does not remember anything about the client. This means there is more overhead per request. The protocol is http://.

WebSockets are bidirectional, where the client and server can talk to each other. It is stateful, meaning that the server remembers the client keeping an open connection. This means there is less overhead per request. The protocol is ws://.

- Did you prefer using Flask over Express? Why or why not (there is no right answer here --- we want to see how you think about technology)?

I prefer using Flask over Express. Flask seemed more intuitive to me because it uses Python fo the backend. Python is more natural for me. I also like Flask's microframework approach for the smaller projects I've had to build. This seemed more straight forward.
Express is good, but it's robust and has a lot of features which I find myself getting sidetracked on when I'm trying to build something simple. Javascript also is a bit less intuitive for me.
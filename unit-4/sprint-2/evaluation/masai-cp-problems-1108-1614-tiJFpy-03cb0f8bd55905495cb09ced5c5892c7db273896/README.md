# Learning Management System

### Maximum Marks - 8

```
✅ able to submit the application - 1 mark (minimum score)
✅ should able to add a student - 0.5 mark
✅ should able to add a instructor- 0.5 mark
✅ should able to get all the student from the database - 0.5 mark
✅ should able to get the data of the student whose student code has been passed as a param - 0.5 mark
✅ should able to get the data of all the instructors from database - 0.5 mark
✅ should able to get the data of the instructor whose employee id has ben passed as a param - 0.5 mark
✅ should able to update the details of a student whose roll number has been passed as a param - 0.5 mark
✅ should able to protect patch route by validator middleware - 1 mark
✅ should able to protect the delete route by validator middleware - 1 mark
✅ should able to delete the details of a particular student- 0.5 mark
✅ should able to apply logger middleware - 1 mark

```

## Description

Make a Learning Management System.<br/>
Make APIs using Express to perform CRUD Operation
Create a db.json file and consider it as your database.
```
db.json structure should be like the below structure.

{
    "students": [
        {
            "student_code": 1,
            "name": "Chunnu",
            "location": "Delhi",
            "batch": "web15"
        }
    ],
    "instructors": [
        {
            "emp_id": 1,
            "name": "Aman",
            "sub": "DSA",
            "experience": 3
        }
    ]
}

```
### Test Cases

#### Create
- `/students/addstudent` :- To add the details of a student to the database. (POST)
    - on successful creation `Student has been added` response should be sent and the data should be updated on `db.json.`

- `/instructors/addinstructor` :- To add the details of an instructor to the database. (POST)
    - on successful creation `Instructor has been added` response should be sent and the data should be updated on `db.json.`

#### Read

- `/students` :- To get the data of all the students as a response from the database. (GET)

- `/students/:studentCode` :- To get the data of the student whose student code has been passed as a param. (GET)

- `/instructors` :- To get the data of all the instructors from the database. (GET)

- `/instructors/:empID` :- To get the data of the instructor whose employee id has been passed as a param. (GET)

#### Update

- `/students/:studentCode` :- To update the details of a student whose student code has been passed as a param. (PATCH)
    - on successful update `Patched Student Details` response should be sent and the data should be updated on `db.json.`

#### Delete

- `/students/:studentCode` :- To delete the details of a particular student. (DELETE)
    - on successful delete `Deleted Student Details` response should be sent and `db.json` should be updated accordingly.

#### Middlewares

- Write a Middleware called "logger", it should log the `METHOD, ROUTE, and 'user-agent'` from request headers in a file called `logs.txt`.it should be called in every request.
```
Example of logs.txt file (every line should look the exact same structure otherwise can be the reason for not getting the marks) :
"Method:GET, Route:/, user-agent:PostmanRuntime/7.31.1"
```
- Write a Middleware called "validator", which should protect `only the PATCH and DELETE` routes.

    - It should check if in the URL Query,` if the password is equal to 7877 and role is equal to "admin" or "instructor",` because only an instructor or admin can update or delete student details. If yes, it should allow the user to `modify/delete` the post. If not, send a message `You are not authorised to do this operation`

```
Note: You can check documentation on how you can get two queries from URL.
You are supposed to logically segregate the code. Routes and Middlewares should be in separate folders. Keep your index file clean.
```

## Installation

- Use node version(LTS) should be `v16.16.0`
- Don't change/override package.json
- please make sure you do not push package-lock.json

```
- run `npm install --engine-strict` to install the node modules.

// complete functions

// test locally
npm run test
`make sure when you test locally server is not running locally.`

```

## Requirements

- The code should be written in Node.js.
- Use the built-in modules and external modules that are required.
- Add comments throughout your code to explain the logic behind each step

## Evaluation Criteria

- Correct implementation of all the routes
- Proper handling of edge cases
- Code readability and organization
- Comments explaining the logic behind each step

#### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not just submit it last minute
- try to keep one submission at a time

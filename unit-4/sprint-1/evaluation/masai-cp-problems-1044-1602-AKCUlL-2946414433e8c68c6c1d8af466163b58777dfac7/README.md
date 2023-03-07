# User Management System

### Maximum Marks - 10
```
✅ able to submit the application - 1 mark (minimum score)
✅ should able to perform the oprations for "/" route - 1 mark
✅ should able to write initial count and time stamp in the logs.txt file on hitting "/count" route - 1 mark
✅ should able to send approprite response in "/count" route- 1 marks
✅ should able to update the new user in "data.json" file on hitting "/update" route - 1 mark
✅ should able to append the updtaed number of users along with time stamp in "logs.txt" on hitting "/update" route - 1 mark
✅ should able to get all the users in unordered list form on hitting "/users" - 1 mark
✅ should able to get IP address and family on hitting "/address" route - 1 mark
✅ should able to append it in "logs.txt" on hitting "/address" route  - 1 mark
✅ should able to get the desired response ypon hitting "/say" route- 1 marks
```

Initialize a backend project using the right command for it and create a http server for user managemnet system with following API endpoints:

### /
- This represents the home route of the server.
- If the client is hitting a request at this endpoint, there should be a response as `HOME PAGE`.
- This response should be a `h1` heading type.
- You have to take care of this at backend itself.

### /count
- This route is reponsible for counting the initial number of users in `data.json`.
- Once the client hits at his api endpoint, there should be a `logs.txt` file in which you have to write the initial count of the user along with the time stamp, refer the following:
```
The inital user count is 10 at Thu Mar 02 2023 19:03:30 GMT+0530 (India Standard Time)
```
- If there is some error in writing into the file you have to send it as response
```
Send the complete err as response
```
- In case of no error, send following as response:
```
The user count has been updated in the logs file
```
- This writing operation has to be carried out `asynchronously`.

### /update
- Once the client has made a request at this endpoint, then you are supposed to update the `data.json` file.
- Create a new user with following fields:
```
id => Any Random number between the count of user and 100
first_name => get the username using the os inbuilt module of node
last_name => get the username using the os inbuilt module of node
email => you can put any email of your choice over here
gender => you can put Male/Female as per your choice

Note: In both first_name and last_name you have to put the username taken from os module.
```
- Add this new user along with the data that is already present in `data.json` file and then write it again, this will mimic the update functionality of database.
- Make sure you are also taking care of the `count` as the count of user will increase by 1 now.
- If there is error in updating the database then:
```
Send the complete err as response
```
- In case everything is successful then the response will be:
```
The data has been updated, go and check the data file
```
- Also you need to update the number of users with time stamp in `logs.txt`.
```
Updated user count after adding a new user is 11 at Thu Mar 02 2023 19:30:30 GMT+0530 (India Standard Time)
```
- All the things should be there in `logs.txt` in a new line
- This writing operation has to be carried out `asynchronously`.
- This appending operation has to be carried out `synchronously`.

### /users
- Once the client has made a request over here, you are supposed to send the names of all the users.
- Get the first names of all the users from `data.json` and send them as a response in an `unordered list` form.
```
Following are the users present in database:
- user1
- user2
```
### /address
- Once the client has made a request over here, you are supposed to handle the `ip address` and `family` of `masaischool.com`
- Hint: You can use inbuilt `DNS` module.
- These things should get appended in the `logs.txt` file
```
URL: masaischool.com IP Address: 3.7.198.157 and Family is IPv4
```
- All the things should be there in `logs.txt` in a new line
- This appending operation has to be carried out `asynchronously`.


### /say
- You have to take help of an external module `cowsay` for this.
- Whatever log is present in the `logs.txt` file, send that as a response using cowsay.
- Go through the documentations for this on `npm`.

#### All the readFile operations should be synchronous.

### Important Points to keep in mind
- You don't have to run the server (listen the server), you just have to export it at the end.
- You are not supposed to use `nodemon` as you are going to export the server.
```
module.exports=server
```
- In order to test the things locally you might need to run the server, but while testing on CP just comment out the `server.listen()` and just export the server.
- Should clean/delete the `logs.txt` each and every time before testing.
- should keep the `data.json` as it was in initial condition, which means we have to remove the added data and make the `data.json` as it was in initial state before testing.

Your solution should be well-organized and easy to understand, with clear and concise comments explaining the logic behind each step.


## Installation

- Use node version(LTS) >=14 and <17 (v16.16.0 is recommended)
- please make sure you do not push package-lock.json

```
npm install

// complete functions on index.js

// test locally
npm run test
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

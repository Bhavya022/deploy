# WEB - Masai Restaurant Finder

## Submission Instructions [Please note]

## Maximum Marks - 10

- The Submission should not contain spaces, for example,/js-101 folder/eval will not work
- Do not push node_modules and package_lock.json to GitHub

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ Check if the api call made - 1 marks.
 ✅ Student is able to loop through the data and append in the dom - 1 marks.
 ✅ Check the Filter Part  - 2 marks.
 ✅ Add a product to favourites - 2 marks.
 ✅ Add same product to favourite - 1 marks.
 ✅ Go To favourites page and check if able to show on dom  along with total size- 1 marks.
 ✅ Check the delete part  - 1 marks.
```

## Installation

- you can use any node version that works for you ( 14+ )
- Download and unzip the boilerplate
- Navigate to the correct path

## Folder structure

- index.html(Home Page)
- favourites.html(Favourites Page)
- Please Ignore all the other files except for the above-mentioned files.

### You haven't taught cypress to run the test cases locally, you can see the passed/ failed test cases and test errors on CP itself.

## Description

#### Use the template provided below to write your code (Mandatory)

### Some Rules to follow:-

- Before writing a single line of code please read the problem statement very carefully.
- Don't change the already given ids or classes.
- If you don't follow these rules you might not get any marks even if you do everything correctly.

### Problem Statement:-

- In this application, we have 2 different pages:-
  1. index.html(Home Page)
  2. favourites.html(Favourites Page)

#### index.html(Home Page):-
- On loading this page make an API request with fetch in this API end-point:- 
`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?limit=30`.
- On Successful API request, you will get a response of restaurant data which is Array of Objects.
- Loop over the response data and create small cards and append them to div with an id:- `restaurant-container`.
- Show 4 cards per row with a display grid.
- Refer to this image for better understanding:- 
![image](https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2022-12-06/Screenshot%202022-12-06%20at%2012.43.49%20PM_816163.png).
- You should also implement Filter functionality using select tag with an id:- `filter`.
- Using this select tag you should be able to filter the restaurants with their type.
- Use array.filter method to filter the restaurants by their type.
![image](https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2022-12-06/Screenshot%202022-12-06%20at%2012.44.55%20PM_212895.png)
- Each Restaurant card should have a button with the text:- `Favourites`.
- When clicked on this button that restaurant data should be added to local storage with a key `favourites`.
- The user should not be able to add the same restaurant to the favourites multiple times.
- In this page we will also have a h1 tag with an id:- `alert`.
- If adding to favourites is successful the text of this above-mentioned h1 tag should be:- `Restaurant Added To Favourites`, else the text should be:- `Restaurant Already in Favourites`.


#### favourites.html(Favourites Page):-
- In this page get the data from the localstorage with key `favourites`.
- Loop over the localstorage data and show them in smaller cards inside and div with id:- `fav-container`(Given in the template).
- Each card should also have a button with text `Delete`. Clicking on that this particular card should be deleted.
- Please make sure all the buttons have the same text as the given structure.
- In the template we also have a span tag with id:- `fav-total`.
- Here you have to show the total count of Favourites.
- Please take a look at the below image for better understanding:- ![image](https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2022-12-06/Screenshot%202022-12-06%20at%2012.45.45%20PM_480507.png)

#### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not just submit it last minute
- try to keep one submission at a time

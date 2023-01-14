# JS-Promises-job

## Submission Instructions [Please note]

## Maximum Marks - 10

- The Submission should not contain spaces, for example /js-101 folder/eval will not work
- Do not push node_modules and package_lock.json to github

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ function job returns a promise- 1 mark
 ✅ The results should be an array of given values- 3 mark
 ✅ The resolve time of all promises should be highest delay among all the promises-1 - 3 marks
 ✅ The resolve time of all promises should be highest delay among all the promises-2 - 2 marks
```

## Installation

- you can use any node version that works for you ( 14+ )
- please make sure you do not push package-lock.json
- Download and unzip the boilerplate
- Navigate to the correct path
- Run **npm install** to install the node modules
- Run **npm test** for the test cases.

## Description

- You need to complete the `job` function such that it fulfills the below criteria:

  - job is a function which takes `delay` and `value` as parameters and resolves to given `value` after the given `delay`
  - create 4 such promises, with delays of 1000, 3000, 500, 1500 and values of 10,20,30,40 respectively. (do not change the order)
  - You need to create an array of all promises such that you can trigger to resolve all promises at the same time (refer [this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all) )
  - As a result of triggering of all promises at the same time, the max time to resolve them should be the promise with highest delay (in this case 3000)
  - Store the response from these promises in `results` array

  **Note:- Do not use any other names for the methods other than mentioned.**

  ####

## Boilerplate

- Do not chnage the given folder structure
- inside src you will promises2.js file that is where you need to write the mentioned methods
- you can find the testcase under `__tests__ ` folder

#### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug before itself
- we also request you to not to just submit it last minute
- try to keep one submission at a time

// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://localhost:${
  import.meta.env.REACT_APP_JSON_SERVER_PORT
}`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

// ***** Constants / Variables ***** //
const recipeIngredientURL = `${baseServerURL}/recipeIngredients`;
const employeeURL = `${baseServerURL}/employees`;
const userRegisterURL = `${baseServerURL}/register`;
const userLoginURL = `${baseServerURL}/login`;


let paginationWrapper = document.getElementById("pagination-wrapper");

// register
let registerUserUsername = document.getElementById("register-user-username");
let registerUserFirstname = document.getElementById("register-user-firstname");
let registerUserLastname = document.getElementById("register-user-lastname");
let registerUserEmail = document.getElementById("register-user-email");
let registerUserPassowrd = document.getElementById("register-user-passowrd");
let registerUserAvatar = document.getElementById("register-user-avatar");
let registerUserLevel = document.getElementById("register-user-level");
let registerUserButton = document.getElementById("register-user");

// login
let loginUserUsername = document.getElementById("login-user-username");
let loginUserPassword = document.getElementById("login-user-passowrd");
let loginUserButton = document.getElementById("login-user");

// getTodo
let getTodoButton = document.getElementById("fetch-todos");

let mainSection = document.getElementById("data-list-wrapper");
let notificationWrapper = document.getElementById("notifications-wrapper");

let userAuthToken = localStorage.getItem("localAccessToken") || null;
let userId = +localStorage.getItem("userId") || null;
const urlAllTodosOfUser = `${baseServerURL}/todos?userId=${userId}`;
const urlTodosBase = `${baseServerURL}/todos/`;

// cats
let empNameInput = document.getElementById("employee-name");
let empImgInput = document.getElementById("employee-image");
let empDeptInput = document.getElementById("employee-dept");
let empSalaryInput = document.getElementById("employee-salary");
let empCreateBtn = document.getElementById("add-employee");
let sortAtoZBtn = document.getElementById("sort-low-to-high");
let sortZtoABtn = document.getElementById("sort-high-to-low");
let catsData = [];

// employees
let updateEmpIdInput = document.getElementById("update-employee-id");
let updateEmpNameInput = document.getElementById("update-employee-name");
let updateEmpImageInput = document.getElementById("update-employee-image");
let updateEmpDeptInput = document.getElementById("update-employee-dept");
let updateEmpSalaryInput = document.getElementById("update-employee-salary");
let updateEmpUpdateBtn = document.getElementById("update-employee");

let updateScoreEmpId = document.getElementById("update-score-employee-id");
let updateScoreEmpSalary = document.getElementById(
  "update-score-employee-salary"
);
let updateScoreEmpSalaryButton = document.getElementById(
  "update-score-employee"
);

let employeesData = [];

// ***** Event listeners ***** //
window.addEventListener("load", () => {
  // fetchAndRenderCats()
  fetchAndRenderEmployees();
  // fetchAndRenderIngredients(`${recipeIngredientURL}?_limit=40&_page=1`);
});

sortAtoZBtn.addEventListener("click", () => {
  // if (catsData && catsData.length) {
  //   catsData.sort((a,b) => {
  //     if (a.title > b.title) return 1;
  //     if (a.title < b.title) return -1;
  //     return 0;
  //   })

  //   renderCardList(catsData)
  // } else {
  //   console.log('nothing to sort')
  // }

  // if (employeesData && employeesData.length) {
  //   employeesData.sort((a,b) => a.salary - b.salary)
  //   renderCardList(employeesData);
  // } else {
  //   console.log('nothing to sort')
  // }

  fetchAndRenderEmployees("?_sort=salary&_order=asc");
});

sortZtoABtn.addEventListener("click", () => {
  // if (employeesData && employeesData.length) {
  //   employeesData.sort((a,b) => b.salary - a.salary)
  //   renderCardList(employeesData);
  // } else {
  //   console.log('nothing to sort')
  // }

  fetchAndRenderEmployees("?_sort=salary&_order=desc");
});

empCreateBtn.addEventListener("click", () => {
  let empName = empNameInput.value;
  let empImg = empImgInput.value;
  let empDept = empDeptInput.value;
  let empSal = empSalaryInput.value;

  // do some validation

  let userObj = {
    name: empName,
    image: empImg,
    department: empDept,
    salary: empSal,
  };

  createEmployee(userObj);
  fetchAndRenderEmployees();
});

updateScoreEmpSalaryButton.addEventListener("click", function () {
  let empId = updateScoreEmpId.value;
  let empSalary = updateScoreEmpSalary.value;

  // you may add validations here. for example if empId is falsey then return or throw error.

  fetch(`${baseServerURL}/employees/${empId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      salary: empSalary,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      alert(`Salary of emp with id ${empId} updated to Rs. ${empSalary}.`);
      fetchAndRenderEmployees();
    })
    .catch((err) => alert(JSON.stringify(err)));
});

updateEmpUpdateBtn.addEventListener("click", function () {
  let empId = updateEmpIdInput.value;
  let empName = updateEmpNameInput.value;
  let empImage = updateEmpImageInput.value;
  let empDept = updateEmpDeptInput.value;
  let empSalary = updateEmpSalaryInput.value;

  // you may add validations here. for example if empId is falsey then return or throw error.

  let empObj = {};
  if (empId) empObj["id"] = empId;
  if (empName) empObj["name"] = empName;
  if (empImage) empObj["image"] = empImage;
  if (empDept) empObj["salary"] = empDept;
  if (empSalary) empObj["salary"] = empSalary;

  fetch(`${baseServerURL}/employees/${empId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(empObj),
  })
    .then((res) => res.json())
    .then((data) => {
      alert(`Data of ${empId} updated.`);
      fetchAndRenderEmployees();
    })
    .catch((err) => alert(JSON.stringify(err)));
});

getTodoButton.addEventListener("click", async function () {
  let res = await fetch(urlAllTodosOfUser, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${userAuthToken}`,
    },
  });
  let data = await res.json();

  mainSection.innerHTML = `
    <pre>
      ${JSON.stringify(data, null, 2)}
    </pre>  
  `;
});

loginUserButton.addEventListener("click", async function () {
  let userName = loginUserUsername.value;
  let password = loginUserPassword.value;

  let userObj = {
    username: userName,
    password: password,
  };

  try { 
    let res = await fetch(userLoginURL, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(userObj),
    });

    let data = await res.json();
    console.log("login ", data);
    localStorage.setItem("localAccessToken", data.accessToken);
    localStorage.setItem("userId", data.user.id)
    alert("user successfully logged in.");
  } catch (error) {
    alert("Err.", JSON.stringify(error));
  }
});

registerUserButton.addEventListener("click", function () {
  let userName = registerUserUsername.value;
  let firstName = registerUserFirstname.value;
  let lastName = registerUserLastname.value;
  let email = registerUserEmail.value;
  let password = registerUserPassowrd.value;
  let avatar = registerUserAvatar.value;
  let level = registerUserLevel.value;

  let userObject = {
    username: userName,
    password: password,
    email: email,
    firstname: firstName,
    lastname: lastName,
    avatar: avatar,
    userLevel: level,
  };

  fetch(userRegisterURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userObject),
  })
    .then((res) => res.json())
    .then((data) => alert(JSON.stringify(data)))
    .catch((err) => alert("error"));
});

// ***** Utilities ***** //
// array of objects
// id, title, desc, linkText, linkUrl, imageUrl
function renderCardList(cardData) {
  let cardList = `
    <div class="card-list">
      ${cardData
        .map((item) =>
          getCard(
            item.id,
            item.title,
            item.description,
            item.linkText,
            item.linkUrl,
            item.imageUrl
          )
        )
        .join("")}
    </div>
  `;

  mainSection.innerHTML = cardList;

  let editLinks = document.querySelectorAll(".card__link");
  for (let editLink of editLinks) {
    editLink.addEventListener("click", (e) => {
      e.preventDefault();
      let currentId = e.target.dataset.id;
      populateEditForms(currentId);
    });
  }
}

function getCard(id, title, desc, linkText, linkUrl, imageUrl) {
  let card = `
      <div class="card" data-id=${id} >
        <div class="card__img">
        <img src=${imageUrl} alt="food" />
        </div>
        <div class="card__body">
          <h3 class="card__item card__title">${title}</h3>
          <div class="card__item card__description">
            ${desc}
          </div>
          <a href=${linkUrl} data-id=${id} class="card__item card__link">${linkText}</a>
        </div>
      </div>
  `;
  return card;
}

function createEmployee(userObj) {
  fetch(`${baseServerURL}/employees`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userObj),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
    });
}

// Cats
function fetchAndRenderCats() {
  fetch(`${baseServerURL}/cats`)
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      let catsObj = data.map((cat) => ({
        id: cat.id,
        title: cat.name,
        description: cat.description.substring(0, 100),
        linkText: "Edit",
        linkUrl: "https://google.com",
        imageUrl: `${baseServerURL}${cat.image}`,
      }));
      catsData = catsObj;
      renderCardList(catsObj);
    });
}

// Employees
function fetchAndRenderEmployees(queryParamString = null) {
  fetch(`${baseServerURL}/employees${queryParamString ? queryParamString : ""}`)
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      let empObj = data.map((item) => ({
        id: item.id,
        title: item.name,
        salary: item.salary,
        description: "Rs. " + item.salary,
        linkText: "Edit",
        linkUrl: "https://google.com",
        imageUrl: `${baseServerURL}${item.image}`,
      }));

      employeesData = empObj;
      renderCardList(empObj);
    });
}

function populateEditForms(currentId) {
  //working with employees
  let table = "employees";

  fetch(`${baseServerURL}/${table}/${currentId}`)
    .then((res) => res.json())
    .then((data) => {
      updateEmpIdInput.value = data.id;
      updateEmpNameInput.value = data.name;
      updateEmpImageInput.value = data.image;
      updateEmpDeptInput.value = data.department;
      updateEmpSalaryInput.value = data.salary;

      updateScoreEmpId.value = data.id;
      updateScoreEmpSalary.value = data.salary;
    });
}

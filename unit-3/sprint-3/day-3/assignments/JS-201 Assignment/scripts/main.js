// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://localhost:${
  import.meta.env.REACT_APP_JSON_SERVER_PORT
}`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

// ***** Constants / Variables ***** //
const userRegisterURL = `${baseServerURL}/register`;
const userLoginURL = `${baseServerURL}/login`;

// register
let registerUserUsername = document.getElementById("register-user-username");
let registerUserFirstname = document.getElementById("register-user-firstname");
let registerUserLastname = document.getElementById("register-user-lastname");
let registerUserEmail = document.getElementById("register-user-email");
let registerUserPassword = document.getElementById("register-user-passowrd");
let registerUserAvatar = document.getElementById("register-user-avatar");
let registerUserLevel = document.getElementById("register-user-level");
let registerUserButton = document.getElementById("register-user");

// login
let loginUserUsername = document.getElementById("login-user-username");
let loginUserPassword = document.getElementById("login-user-passowrd");
let loginUserButton = document.getElementById("login-user");

let fetchEmployeeBtn = document.getElementById('fetch-employees');

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
// window.addEventListener("load", () => {
//   fetchAndRenderEmployees();
// });

fetchEmployeeBtn.addEventListener('click', FetchEmployeesList)

sortAtoZBtn.addEventListener("click", () => {

});

sortZtoABtn.addEventListener("click", () => {

});

empCreateBtn.addEventListener("click", () => {

});

updateScoreEmpSalaryButton.addEventListener("click", async function () {
  try {
    const id = updateScoreEmpId.value;
    const updated_sal = updateScoreEmpSalary.value;

    const patch_request = await fetch(`${baseServerURL}/employees/${id}`,{
      method : "PATCH",
      headers : {
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify({salary : updated_sal})
    })

    if(patch_request.ok===true){
      FetchEmployeesList();
    }
  } catch (error) {
    
  }
});

updateEmpUpdateBtn.addEventListener("click", function () {

});

loginUserButton.addEventListener("click",LoginUser);

registerUserButton.addEventListener("click", RegisterUser);


function LoginUser(){
    const login_details = {
      username : loginUserUsername.value,
      password : loginUserPassword.value
    }

    const login_request = fetch(`${userLoginURL}`,{
      method : 'POST',
      headers : {
        "Content-Type" : 'application/json'
      },
      body : JSON.stringify(login_details)
    }).then((response)=>{
      return response.json();
    }).then((token)=>{console.log(token)}).catch((error)=>{
      console.log(error);
    });

}


async function RegisterUser(){
  try {
    const obj = { username : registerUserUsername.value, firstname : registerUserFirstname.value,
      lastName : registerUserLastname.value,
      email : registerUserEmail.value,
      password : registerUserPassword.value,
      avatar : registerUserAvatar.value 
      }

      let register_request = await fetch(`${userRegisterURL}`,{
        method : 'POST',
        headers : {
          "Content-Type" : 'application/json'
        },
        body : JSON.stringify(obj)
      }) 
      
      console.log(register_request);
      
  } catch (error) {
    console.log(error);
  }
}
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
            item.name,
            item.department,
            item.image,
            item.salary,
          )
        )
        .join("")}
    </div>
  `;

  mainSection.innerHTML = cardList;

  // let editLinks = document.querySelectorAll(".card__link");
  // for (let editLink of editLinks) {
  //   editLink.addEventListener("click", (e) => {
  //     e.preventDefault();
  //     let currentId = e.target.dataset.id;
  //     populateEditForms(currentId);
  //   });
  // }
}

function getCard(id, name, department, image, salary) {
  let card = `
      <div class="card" data-id=${id} >
        <div class="card__img">
        <img src=${baseServerURL}${image} alt="food" />
        </div>
        <div class="card__body">
          <p>${id}</p>
          <h3 class="card__item card__title">${name}</h3>
          <div class="card__item card__description">
            ${salary}
          </div>
          <a data-id=${id} class="card__item card__link">${department}</a>
        </div>
      </div>
  `;
  return card;
}


async function FetchEmployeesList(){
  try {
    const get_employee = await fetch(`${baseServerURL}/employees`);
    const data = await get_employee.json();

    // console.log(data);
    renderCardList(data);
    
  } catch (error) {
    console.log(error);
  }
}

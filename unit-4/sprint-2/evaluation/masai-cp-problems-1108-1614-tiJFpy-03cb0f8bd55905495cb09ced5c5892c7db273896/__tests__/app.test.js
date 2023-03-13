const request = require("supertest");
const fs = require("fs");
const path = require("path");
const app = require("../index");

global.score = 1;

describe("File server app", () => {
  // beforeEach(() => {
  //   fs.writeFileSync("logs.txt", "");
  //   fs.writeFileSync("db.json",'{"students":[],"instructors":[]}')
  // });

  beforeAll(() => {
    fs.writeFileSync("logs.txt", "");
    fs.writeFileSync("db.json", '{"students":[],"instructors":[]}');
  });

  // create

  it(" should able to add a student", (done) => {
    request(app)
      .post("/students/addstudent")
      .send({
        student_code: 1,
        name: "Chunnu",
        location: "Delhi",
        batch: "web15",
      })
      .set("Accept", "application/json")
      .expect(200)
      .then((responce) => {
        expect(responce.text).toMatch("Student has been added");

        let db = fs.readFileSync("db.json").toString();

        db = JSON.parse(db);

        let newStudent = db.students[db.students.length - 1];

        expect(newStudent).toEqual({
          student_code: 1,
          name: "Chunnu",
          location: "Delhi",
          batch: "web15",
        });

        done();
        global.score += 0.5;
      });
  });

  it("should able to add a instructor", (done) => {
    request(app)
      .post("/instructors/addinstructor")
      .send({ emp_id: 1, name: "Aman", sub: "DSA", experience: 3 })
      .set("Accept", "application/json")
      .expect(200)
      .then((responce) => {
        expect(responce.text).toMatch("Instructor has been added");
        let db = fs.readFileSync("db.json").toString();

        db = JSON.parse(db);

        let newStudent = db.instructors[db.instructors.length - 1];

        expect(newStudent).toEqual({
          emp_id: 1,
          name: "Aman",
          sub: "DSA",
          experience: 3,
        });
        done();
        global.score += 0.5;
      });
  });

  // // Read

  it("should able to get all the student from the database", (done) => {
    request(app)
      .get("/students")
      .then((responce) => {
        let db = fs.readFileSync("db.json").toString();

        db = JSON.parse(db);

        // console.log(responce.text);
        expect(JSON.parse(responce.text)).toEqual(db.students);
        done();
        global.score += 0.5;
      });
  });

  it("should able to get the data of the student whose roll number has been passed as a param", (done) => {
    request(app)
      .get("/students/1")
      .expect(200)
      .then((responce) => {
        expect(JSON.parse(responce.text)).toEqual({
          student_code: 1,
          name: "Chunnu",
          location: "Delhi",
          batch: "web15",
        });
        done();
        global.score += 0.5;
      });
  });

  it("should able to get the data of all the instructors from database", (done) => {
    request(app)
      .get("/instructors")
      .expect(200)
      .then((responce) => {
        let db = fs.readFileSync("db.json").toString();

        db = JSON.parse(db);
        // console.log(responce.text);
        expect(JSON.parse(responce.text)).toEqual(db.instructors);
        done();
        global.score += 0.5;
      });
  });

  it("should able to  get the data of the instructor whose employee id has ben passed as a param", (done) => {
    request(app)
      .get("/instructors/1")
      .expect(200)
      .then((responce) => {
        expect(JSON.parse(responce.text)).toEqual({
          emp_id: 1,
          name: "Aman",
          sub: "DSA",
          experience: 3,
        });
        done();
        global.score += 0.5;
      });
  });

  // // Update with validation

  it("should able to update the details of a student whose roll number has been passed as a param", (done) => {
    request(app)
      .patch("/students/1?role=admin&pass=7877")
      .send({
        location: "kolkata",
        batch: "web10",
      })
      .set("Accept", "application/json")
      .expect(200)
      .then((responce) => {

        let quarries=responce.req.path.split("?")[1]
        //.split("&").map((e)=>e.split("="));
        // console.log(quarries);
        expect(quarries).not.toBeUndefined();
        expect(responce.text).toMatch("Patched Student Details");

        let db = fs.readFileSync("db.json").toString();

        db = JSON.parse(db);
        let updatedStudent;

        db.students.forEach((element) => {
          if (element.student_code === 1) {
            updatedStudent = element;
          }
        });

        expect(updatedStudent.location).toMatch("kolkata");

        expect(updatedStudent.batch).toMatch("web10");

        done();
        global.score += 0.5;
      });
  });

  it("should able to protect patch route by validator middleware", (done) => {
    request(app)
      .patch("/students/1")
      .send({
        location: "kolkata",
        batch: "web10",
      })
      .set("Accept", "application/json")
      .then((responce) => {
        // let quarries=responce.req.path.split("?")[1];
        // console.log(quarries)

        expect(responce.text).toMatch(
          "You are not authorised to do this operation"
        );
        done();
        global.score += 1;
      });
  });
  // // Delete with validation

  it("should able to protect delete route by validator middleware", (done) => {
    request(app)
      .delete("/students/1")
      .then((responce) => {
        expect(responce.text).toMatch(
          "You are not authorised to do this operation"
        );
        done();
        global.score += 1;
      });
  });

  it("should able to delete the details of a particular student", (done) => {
    request(app)
      .delete("/students/1?role=instructor&pass=7877")
      .expect(200)
      .then((responce) => {
        expect(responce.text).toMatch("Deleted Student Details");

        let db = fs.readFileSync("db.json").toString();
        db = JSON.parse(db);
        expect(db.students).toEqual([]);

        done();
        global.score += 0.5;
      });
  });

  // logger Middlewears

  it("should able to apply logger middleware", (done) => {
    request(app)
      .post("/students/addstudent")
      .send({
        student_code: 1,
        name: "Chunnu",
        location: "Delhi",
        batch: "web15",
      })
      .set("Accept", "application/json")
      .expect(200)
      .then((responce) => {
        expect(responce.text).toMatch("Student has been added");

        let resText = fs.readFileSync("logs.txt").toString().trim().split("\n");

        let currentLog=resText[resText.length-1].trim().split(" ")
        expect(currentLog).toContain("Method:POST,");
        expect(currentLog).toContain("Route:/students/addstudent,");
        done();
        global.score += 1;
      });
  });
});

afterAll((done) => {
  done();
  console.log("Final Score is", global.score);
});

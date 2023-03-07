const request = require("supertest");
const fs = require("fs");
const http = require("http");
const path = require("path");
const app = require("../index");
const { execSync, exec } = require("child_process");
const cowsay = require("cowsay");
// const dd =require("../")
global.score = 1;

const initialData = [
  {
    id: 1,
    first_name: "Una",
    last_name: "Pechet",
    email: "upechet0@kickstarter.com",
    gender: "Female",
  },
  {
    id: 2,
    first_name: "Jamal",
    last_name: "Geraghty",
    email: "jgeraghty1@icq.com",
    gender: "Male",
  },
  {
    id: 3,
    first_name: "Inness",
    last_name: "MacDougall",
    email: "imacdougall2@howstuffworks.com",
    gender: "Male",
  },
  {
    id: 4,
    first_name: "Dannel",
    last_name: "Jeanes",
    email: "djeanes3@livejournal.com",
    gender: "Male",
  },
  {
    id: 5,
    first_name: "Tedda",
    last_name: "Wayt",
    email: "twayt4@goodreads.com",
    gender: "Female",
  },
  {
    id: 6,
    first_name: "Francisco",
    last_name: "Gerg",
    email: "fgerg5@marriott.com",
    gender: "Male",
  },
  {
    id: 7,
    first_name: "Ceciley",
    last_name: "Baddam",
    email: "cbaddam6@marriott.com",
    gender: "Genderfluid",
  },
  {
    id: 8,
    first_name: "Wit",
    last_name: "Hardwell",
    email: "whardwell7@yahoo.co.jp",
    gender: "Male",
  },
  {
    id: 9,
    first_name: "Gabi",
    last_name: "Cowburn",
    email: "gcowburn8@seesaa.net",
    gender: "Female",
  },
  {
    id: 10,
    first_name: "Eloisa",
    last_name: "Rabat",
    email: "erabat9@dedecms.com",
    gender: "Female",
  },
  {
    id: 11,
    first_name: "Philis",
    last_name: "Dehm",
    email: "pdehma@weibo.com",
    gender: "Female",
  },
  {
    id: 12,
    first_name: "Garvey",
    last_name: "Greveson",
    email: "ggrevesonb@skyrock.com",
    gender: "Male",
  },
  {
    id: 13,
    first_name: "Pet",
    last_name: "Grolmann",
    email: "pgrolmannc@csmonitor.com",
    gender: "Female",
  },
  {
    id: 14,
    first_name: "Early",
    last_name: "Nevett",
    email: "enevettd@ca.gov",
    gender: "Male",
  },
  {
    id: 15,
    first_name: "Whittaker",
    last_name: "Jewell",
    email: "wjewelle@biblegateway.com",
    gender: "Male",
  },
  {
    id: 16,
    first_name: "Kristel",
    last_name: "Huggins",
    email: "khugginsf@goo.gl",
    gender: "Bigender",
  },
  {
    id: 17,
    first_name: "Trstram",
    last_name: "Massinger",
    email: "tmassingerg@techcrunch.com",
    gender: "Male",
  },
  {
    id: 18,
    first_name: "Elfrieda",
    last_name: "Glavin",
    email: "eglavinh@github.com",
    gender: "Female",
  },
  {
    id: 19,
    first_name: "Farly",
    last_name: "Gomby",
    email: "fgombyi@mail.ru",
    gender: "Bigender",
  },
  {
    id: 20,
    first_name: "Merwyn",
    last_name: "Sturridge",
    email: "msturridgej@reddit.com",
    gender: "Male",
  },
  {
    id: 21,
    first_name: "Melissa",
    last_name: "Dallewater",
    email: "mdallewaterk@fema.gov",
    gender: "Female",
  },
  {
    id: 22,
    first_name: "Jonathan",
    last_name: "Lightowlers",
    email: "jlightowlersl@ucsd.edu",
    gender: "Non-binary",
  },
  {
    id: 23,
    first_name: "Lynn",
    last_name: "Cassley",
    email: "lcassleym@independent.co.uk",
    gender: "Female",
  },
  {
    id: 24,
    first_name: "Thaddeus",
    last_name: "Bissill",
    email: "tbissilln@gizmodo.com",
    gender: "Male",
  },
  {
    id: 25,
    first_name: "Vannie",
    last_name: "Hanton",
    email: "vhantono@columbia.edu",
    gender: "Female",
  },
];

beforeAll(() => {
  fs.writeFileSync("data.json", JSON.stringify(initialData));
});

describe("File server app", () => {
  afterEach(() => {
    // fs.writeFileSync("data.json",JSON.stringify(initialData))
    // app.close();
  });
  // 1

  it('should able to perform the oprations for "/" route', async () => {
    execSync("node index.js");
    const res = await request(app).get("/");

    let ct = "content-type";
    console.log(res.headers[ct]);
    expect(res.headers[ct]).toBe("text/html");
    expect(res.text).toBe("<h1>HOME PAGE</h1>");
    global.score += 1;
  });

  // 2

  it('should able to write initial count and time stamp in the logs.txt file on hitting "/count" route', async () => {
    execSync("node index.js subho mondal male https://www.youtube.com/count");

    const res = await request(app).get("/count");
    let resText = fs.readFileSync("logs.txt").toString();
    expect(resText).toBe(`The inital user count is 25 at ${Date()}\n`);

    global.score += 1;
  });

  // 3

  it('should able to send approprite response in "/count" route', async () => {
    execSync("node index.js");
    const res = await request(app).get("/count");
    expect(res.text).toBe("The user count has been updated in the logs file");
    global.score += 1;
  });

  // 4

  it('should able to update the new user in "data.json" file on hitting "/update" route', async () => {
    execSync("node index.js subho mondal male www.youtube.com");

    // app.close(() => {
    //   // Assert that the server has been closed
    //   expect(app.listening).toBe(false);
    //   done();
    // });

    const res = await request(app).get("/update");

    expect(res.text).toBe(
      `The data has been updated, go and check the data file`
    );
    global.score += 1;
  });

  // 5

  it('should able to append the updtaed number of users along with time stamp in "logs.txt" on hitting "/update" route', async () => {
    execSync("node index.js subho mondal male https://www.youtube.com/update");

    // app.close();

    const res = await request(app).get("/update");

    let resText = fs.readFileSync("logs.txt").toString().trim().split("\n");
    expect(resText).toContain(
      `Updated user count after adding a new user is 26 at ${Date()}`
    );

    global.score += 1;
  });

  // 6

  it('should able to get all the users in unordered list form on hitting "/users"', async () => {
    execSync("node index.js");

    const res = await request(app).get("/users");

    let ct = "content-type";
    console.log(res.headers[ct]);
    expect(res.headers[ct]).toBe("text/html");

    console.log(res.text);

    let users = JSON.parse(fs.readFileSync("data.json", "utf-8"));

    let testRes = "Following are the users present in database:";
    users.map((ele) => {
      testRes += `<li>${ele.first_name}</li>`;
    });
    console.log(testRes);
    expect(res.text).toBe(testRes);
    global.score += 1;
  });

  // // 7

  it('should able to get IP address and family on hitting "/address" route', async () => {
    execSync("node index.js subho mondal male www.youtube.com");
    //     //  execSync(app.close())
    //     // app.closeAllConnections
    // app.close();

    //   http.get('http://localhost:4500/address', (res) => {

    //   // console.log(res)

    // })

    const res = await request(app).get("/address");
    expect(res.text).toBe("Logs File has been updated");
    // console.log(res);

    global.score += 1;
  });

  // // 8

  it('should able to append it in "logs.txt" on hitting "/address" route', async () => {
    // // app.close();
    execSync("node index.js subho mondal male masaischool.com");

    

    // // app.close();
    // const res = await request(app).get("/address");

    let address = ["65.0.227.101", "65.0.189.239", "3.7.198.157"];

    const mockLookup = jest.fn((url, cb) => {
      cb(null, "192.0.2.1", 4);
    });
    jest.mock("dns", () => ({
      lookup: mockLookup,
    }));

    const res = await request(app).get("/address");

    // expect(mockLookup).toHaveBeenCalledWith(
    //   expect.any(String),
    //   expect.any(Function)
    // );
    expect(res.status).toBe(200);

    expect(res.text).toBe("Logs File has been updated");

    let resText = fs.readFileSync("logs.txt").toString().trim().split("\n");
    // expect(adress).toContain(resText[resText.length-1]);
    //   expect(resText[resText.length-1]).toContain(expect.stringContaining(address[0])
    // || expect.stringContaining(address[1])
    // || expect.stringContaining(address[2]));

    const containsAddress = resText.some((log) => {
      return address.some((ip) => {
        return log.includes(ip);
      });
    });

    expect(containsAddress).toBe(true);

    global.score += 1;
  });

  // // 9

  it('should able to get the desired response ypon hitting "/say" route', async () => {
    // execSync("node index.js");
    const res = await request(app).get("/say");

    let data = fs.readFileSync("logs.txt", "utf-8").toString();

    let testData = cowsay.say({
      text: data,
    });

    expect(res.text).toBe(testData);
    global.score += 1;
  });
});

afterAll((done) => {
  done();
  console.log("Final Score is", global.score);
});

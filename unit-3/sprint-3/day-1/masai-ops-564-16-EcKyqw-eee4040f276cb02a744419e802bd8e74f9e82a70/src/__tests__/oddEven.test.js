import getData from "../oddEven";
global.score = 1;

test("function getData return a promise", () => {
  const c = getData("");
  expect(typeof c).toBe("object");
  expect(typeof c.then).toBe("function");
  global.score += 1;
});
test("testing with string", async () => {
  let timer = 0;
  var newTimer = setInterval(() => {
    timer += 1000;
  }, 1000);
  let error;
  try {
    var k = await getData("string");
    clearInterval(newTimer);
  } catch (e) {
    clearInterval(newTimer);
    error = e;
  }
  expect(error).toBe("error");
  expect(timer).toBe(0);
  global.score += 2;
});

test("testing with odd", async () => {
  let timer = 0;
  var newTimer = setInterval(() => {
    timer += 1000;
  }, 1000);
  var k;
  try {
    k = await getData(3);
    clearInterval(newTimer);
  } catch (e) {
    clearInterval(newTimer);
  }
  expect(k).toBe("odd");
  console.log(k, "k");
  expect(timer).toBe(2000);
  global.score += 3;
});
test("testing with even", async () => {
  let timer = 1000;
  var newTimer = setInterval(() => {
    timer += 1000;
  }, 1000);
  let k;
  try {
    k = await getData(4);
    clearInterval(newTimer);
  } catch (e) {
    clearInterval(newTimer);
  }
  expect(k).toBe("even");
  expect(timer).toBe(4000);
  global.score += 3;
});

afterAll(() => {
  console.log("Final Score is", global.score);
});

import { job, results } from "../promiseJob";

global.score = 1;

test("function job returns a promise", () => {
  expect(job).toBeDefined();
  expect(typeof job(1000, 10)).toBe("object");
  expect(typeof job(1000, 10).then).toBe("function");

  global.score += 1;
});

test("The results should be array of given values", async () => {
  var promise = Promise.all([
    job(1000, 10),
    job(2000, 20),
    job(500, 30),
    job(1500, 40),
  ]);
  var ans = await promise;
  ans.forEach((element, index) => {
    expect(element).toBe(results[index]);
  });

  global.score += 3;
});

test("The resolve time of all promises should be highest delay among all the promises-1", async () => {
  var promise = Promise.all([
    job(1000, 10),
    job(3000, 20),
    job(500, 30),
    job(1500, 40),
  ]);
  let timer = 1000;

  var interval = setInterval(() => {
    timer += 1000;
  }, 1000);

  var ans = await promise;
  clearInterval(interval);

  expect(timer).toBe(3000);

  global.score += 3;
});
test("The resolve time of all promises should be highest delay among all the promises-2", async () => {
  var promise = Promise.all([
    job(1000, 30),
    job(2000, 40),
    job(3000, 50),
    job(4000, 60),
  ]);

  let timer = 1000;

  var interval = setInterval(() => {
    timer += 1000;
  }, 1000);

  var ans = await promise;
  clearInterval(interval);

  expect(timer).toBe(4000);

  global.score += 2;
});

afterAll(() => {
  console.log("Final Score is", global.score);
});

const fs = require("fs");
const crypto = require("crypto");

const start = Date.now();
process.env.UV_THREADPOOL_SIZE = 4;

setTimeout(() => console.log("timer 1 finished"), 0);
setImmediate(() => console.log("Immediate 1 finish"));

fs.readFile("test-file.txt", () => {
  console.log("I/O finished");
  console.log("--------------------");
  setTimeout(() => console.log("timer 2 finished"), 0);
  setTimeout(() => console.log("timer 3 finished"), 3000);
  setImmediate(() => console.log("Immediate 2 finish"));

  process.nextTick(() => console.log("Process.nextTick()"));

  //   crypto.pbkdf2Sync("password", "salt", 10_00_00, 1024, "sha512");
  //   console.log(Date.now() - start, "Password encrypted");
  //   crypto.pbkdf2Sync("password", "salt", 10_00_00, 1024, "sha512");
  //   console.log(Date.now() - start, "Password encrypted");
  //   crypto.pbkdf2Sync("password", "salt", 10_00_00, 1024, "sha512");
  //   console.log(Date.now() - start, "Password encrypted");
  //   crypto.pbkdf2Sync("password", "salt", 10_00_00, 1024, "sha512");
  //   console.log(Date.now() - start, "Password encrypted");

  crypto.pbkdf2("password", "salt", 10_00_00, 1024, "sha512", () => {
    console.log(Date.now() - start, "Password encrypted");
  });
  crypto.pbkdf2("password", "salt", 10_00_00, 1024, "sha512", () => {
    console.log(Date.now() - start, "Password encrypted");
  });
  crypto.pbkdf2("password", "salt", 10_00_00, 1024, "sha512", () => {
    console.log(Date.now() - start, "Password encrypted");
  });
});

console.log("Hello from the top level code");

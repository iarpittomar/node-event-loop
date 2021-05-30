const EventEmitter = require("events");
const http = require("http");

class Sales extends EventEmitter {
  constructor() {
    super();
  }
}

// const myEmitter = new EventEmitter();
const myEmitter = new Sales();

//observer 1
myEmitter.on("newSale", () => {
  console.log("There was a new Sale.");
});

//observer 2
myEmitter.on("newSale", () => {
  console.log("Costumer name : Arpit");
});

myEmitter.on("newSale", (stock) => {
  console.log(`There are now ${stock} items left in stock.`);
});

myEmitter.emit("newSale", 9); //object that emits the event

/////////////////////

const server = http.createServer();

server.on("request", (req, res) => {
  console.log("Request received");
  res.end("Request Received");
});

server.on("request", (req, res) => {
  console.log("Another request");
  //res.end("Another request");
});

server.on("close", () => {
  console.log("Server closed");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Waiting for request");
});

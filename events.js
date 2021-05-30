const EventEmitter = require("events");

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

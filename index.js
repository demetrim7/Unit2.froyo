const froyoOrder = {};
const froyoFlav = {};

const userOrder = prompt(
    "Please input your order seperated by commas." , "Example: vannila, strawberry, chocolate"
);

const froyoArray = userfroyoOrder.split(",")
froyoOrder.order = froyoArray

for (var i = 0; i <= froyoArray.length - 1; i++){
    console.log() 
}

for (const order of froyoArray) {
    console.log(order);
}

froyoArray.forEach((x) => {
    froyoFlav[x] = (froyoFlav[x] || 0) + 1;
});

console.table(froyoOrder)
console.table(froyoFlav)
let orders = [
{ total: 325 },
{ total: 512},
{ total: 128},
{ total: 32 }
];

let total = orders.reduce((total, order) => total + order.total, 0);
console.log(total);
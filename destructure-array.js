const point = [12, 45];

const x = point[0];

const y = point[1];


const [x2, y2] = point;

console.log(x2, y2); // 12 45


const [first, , third] = [10, 20, 30];

console.log(first, third); // 10 30


let a = 1, b = 2;

[a, b] = [b, a];

console.log(a, b);
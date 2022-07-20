let numbers = [1, 2, 3, 4, 5];

console.log(numbers.find(e => e % 2 == 0));
// find index
let ranks = [1, 5, 7, 8, 10, 7];

let index = ranks.findIndex(
    (rank, index) => rank === 7 && index > 2
);

console.log(index);
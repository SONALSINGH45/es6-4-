let chars = new Set(['a', 'b', 'c', 'c']);
console.log(chars);
console.log(typeof(chars));
let result = chars instanceof Set;
console.log(result);

/// get the size
let size = chars.size;
console.log(size);
//add 
chars.add('d');
console.log(chars);
chars.add('e')
     .add('f');
     console.log(chars);
     //check value in set
     let exist = chars.has('a');
console.log(exist);
// clr
chars.clear();
console.log(chars); 
//loop
let roles = new Set();
roles.add('admin')
    .add('editor')
    .add('subscriber');
    for (let rank of roles) {
        console.log(rank);
    }

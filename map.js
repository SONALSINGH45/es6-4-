// let sonal={name: 'hjedjeh'},
//     sona= {name: 'sona'};
    
// let user = new Map();
// console.log(typeof(user)); // object
// console.log(user instanceof Map); // true

//set method
// user.set(sona, 'editor')
//           .set(sonal, 'subscriber');

let john = { name: 'John Doe' },
  lily = { name: 'Lily Bush' },
  peter = { name: 'Peter Drucker' };

let userRoles = new Map([
  [john, 'admin'],
  [lily, 'editor'],
  [peter, 'subscriber'],
]);

for (const user of userRoles.keys()) {
  console.log(user.name);
}
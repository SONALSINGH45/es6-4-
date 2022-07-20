let box = {
    height: 10,
    width: 20,
    color: 'Red'
};

let style = {
    color: 'Blue',
    borderStyle: 'solid'
};

let styleBox = Object.assign({}, box, style);

console.log(styleBox);

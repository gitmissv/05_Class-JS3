function hello() {
    console.log('hello');
}
hello();

// * Declaration * \\
// let game;
// console.log(game); // undefined

// * Initialization * \\
game = "Super Mario";
console.log(game);   // Super Mario

let author = 'C.S. Lewis';
console.log(author);

lion("Aslan");  // moved to top - still works due to function being hoisted

function lion(name) {
    console.log(`The lions name is ${name}`);
}

// ** HOISTING ** \\
// Hoisting is JS default behavior - it moves declarations only ... initializations or assignments are left in place.
// variables with 'var' are hoisted

book("The Magicians Nephew");

function book(title) {
    console.log(`The book is called ${title}`);
}


let book1 = 'The Silver Chair';
console.log(book1)
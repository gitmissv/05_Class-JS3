// let game = 'Sonic';  // global variable

// console.log(game)

// function title() {
//     console.log(`${game}`);
// }

// title();

// if(true) {
//     console.log(`${game}`);
// }

// function a() {
//     let game = "Sonic";   // local variable & functional scope
//     console.log(game);
// }

// a();
    
// if(true) {
//     let game = 'Mario';
//     console.log(game);
// }

// let x = 10;
// console.log(x);

// if(true) {
//     let x = 2;
//     console.log(x);
// }

// console.log(x);




function fullName() {
    let firstName = 'Verona';
    let lastName = 'Lambert';
    let age = 35;
    let country = 'England';
    console.log(`${firstName} ${lastName} is ${age} years old and lives in ${country}`);
}

let firstName = 'Michael';

fullName();

let game = 'Sonic';

if(true) {
    let game = "Mario";
    console.log(game);
}

console.log(game);
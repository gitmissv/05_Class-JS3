// // EX 1 * Code Snippet:  
// function outerFunction() {  // outer function scope
// 	let outerVar = "I'm outside!";  // outer function scope  variable

// 	function innerFunction() {   // inner function
// 		let innerVar = "I'm inside!"; // inner function variable
// 		console.log(outerVar); // Can we access outerVar?
// 		console.log(innerVar); // Can we access innerVar?
// 	}

// 	innerFunction();
// }

// outerFunction();


// EX 2 * HOISTING * \\
// myDrink("Margarita");

// function myDrink(drink) {
//     console.log(`My favorite drink is a ${drink}`);
// }

// myDrink = "Bourbon"
// console.log(myDrink);

// EX 3 * Implement Closures * \\

function myTest() {
    let thisObject = "I don't know what I'm doing";

    function myUnknown() {
        console.log('This is my Test', thisObject);
    }

    myUnknown();
}

myTest();

// EX 4 * Local and Global Scope * \\

Let myFName = "Verona";
Let myLName = "Lambert";
Let myAge = 35;

function aboutMe() {
    console.log(`${myFName} ${myLName} is ${myAge} years old`)
}
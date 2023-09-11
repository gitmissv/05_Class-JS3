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

// function myTest() {
//     let thisObject = "I don't know what I'm doing";

//     function myUnknown() {
//         console.log('This is my Test', thisObject);
//     };

//     myUnknown();
// }

// myTest();

// EX 4 * Local and Global Scope * \\

// Let myFName = "Verona";
// Let myLName = "Lambert";
// Let myAge = 35;

// function aboutMe() {
//     console.log(`${myFName} ${myLName} is ${myAge} years old`)
// 

// * Example - Demo 1 * \\
function outer() {
    let myVariable = 'Outer Function Scoped Variable';

    function inner() {
        console.log('myVeriable inside inner function:', myVariable);
    }

    return inner;
}
// outer();

const outerFunctionCall = outer();
outerFunctionCall();


// * Example - Demo 2 * \\
function greeting(greeting) {
    return function(name) {
        return `${name}! ${greeting}`;
    };
}

const basicWelcome = greeting('Welcome.');
const friendlyWelcome = greeting('So glad to see you again!');

console.log('basicWelcome:', basicWelcome('Mike'));
console.log('friendlyWelcome', friendlyWelcome('Mike'));

// * Example - Demo 3 * \\
const createBankAccount = (initialBalance) => {
    let userBalance = initialBalance;

    return {
        getBalance: function() {
            return userBalance;
        },
        deposit: function(amount) {
            userBalance += amount;
            return userBalance;
        },
        withdrawl: function(amount) {
            userBalance -= amount;
            return userBalance;
        },
    };
};

const myAccount = createBankAccount(100);
let myBalance;

myBalance = myAccount.getBalance();
console.log('myBalance after creation:', myBalance);

myAccount.deposit(99);
myBalance = myAccount.getBalance();
console.log('myBalance after $99 deposit:', myBalance);

myAccount.withdrawl(12);
myBalance = myAccount.getBalance();
console.log('myBalance after $12 withdrawal:', myBalance);

// * Ex #4 (part 2) * \\
// Declare a global variable outside of any function.
// const myGlobal = "Exercise4"
// Create a function that tries to modify that global variable.
// function modGlobal() {
//     const myGlobal = 'newName';
//     function localScopeTest() {
//         let myGlobal = "Local Name";
//     }
    
//     localScopeTest();
// };

// console.log(modGlobal);
// console.log(myGlobal);

// Create another function that declares a local variable with the same name.

// Observe the behavior when calling both functions.

// * Exercise 5 * \\
// Design a function that accepts a parameter.
// The function should return another function that uses the parameter in some way.
function funFactory(param) {
    return function(name) {
       return `this is hard for ${name}`;
    };
   
}

const iDontKnow = funFactory('My Name')
console.log(iDontKnow('Verona'));

// * Ex 6 * \\
function myHoistingTest() {
    let myTest = 'I do not understand what I am doing';
    console.log(myTest);
}

myHoistingTest();

// * Ex 7 * \\
function setupCounter() {
   let myCount = 2;
    return function () {
        if(myCount < 10){
            myCount++;
            console.log(myCount); 
        };     
    };

};

const counter1 = setupCounter();
const counter2 = setupCounter();
const counter3 = setupCounter();

counter1();
counter1();
counter1();
counter1();
counter2();
counter2();
counter2();

counter2();

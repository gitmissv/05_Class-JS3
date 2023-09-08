let myName = 'Verona'

function printName() {
    console.log(myName);
}

myName = "Baxter"
printName()

myName = "Wally"
printName()

// function outerFunction(outerVariable) {
//     return function innerFunction(innerVariable) {
//         console.log('Outer Variable: ' + outerVariable)
//         conwole.log('Inner Variable: ' + innerVariable)
//     }
// }

// const newFunction = outerFunction('outside')
// newFunction('inner')
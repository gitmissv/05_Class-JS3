function makeCounter() {
    let count = 0;

    return function() {
        return count++;
    };
}

let counter = makeCounter();

// alert( counter() );
// alert( counter() );
// alert( counter() );

// console.log(counter ());
// console.log(counter ());
// console.log(counter ());

let phrase = "Hello";
// alert(phrase);
function say(name) {
    console.log( `${phrase}, ${name}!`);
}

say("Verona");

function sayWord(word) {
    return() => console.log(word);
}

const sayHello = sayWord("Hello");
sayHello();

// if (true) 
function sayFoo() {
    const foo = "foo";
    console.log(foo);
}

sayFoo();
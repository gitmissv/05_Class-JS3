// * Object Oriented Programming (OOP) * \\
//     ONE of several programming paradigms:
//          - Functional Programming
//          - Logic Programming
//          - event-Driven Programming, etc.
//     *A way to manage and think about state
//     *Models interactions within and between states
//  > Based on the concept of "objects"
//  > "Objects" have data and code associated to them


// OOP - 4 Main Ideas: (1)Inheritance, (2)Encapsulation, (3)Abstration, (4)Polymorphism
// most OOP is from Java, C++, and other programming languages.  JS is not traditionally OOP language, but uses it to simulate most OOP concepts
//**Use upper case (not camelCase) in JS to create a class (i.e.:  class Player {}) - with classes in JS, no need for let, const, etc. as they are not needed*/

//  Game On
//Players:  Warrior, Wizzard, Bartender
//Enemies:  Orc, Dragon, Very Scary Fish

class Player {
    age = 20; // default value.  To change specific, add "hanSolo.age = 50;" before console.log as example.
    constructor(name, hp, mp, items) {
        this.name = name;
        this.hp = hp;
        this.mp = mp;
        this.items = items;
        // this.age = 20;
    }
    
    speak(phrase) {
        console.log(`${this.name} says: ${phrase}`);
    }
}

const hanSolo = new Player ("Han Solo", 100, 10, ["blaster"]);
hanSolo.speak('Never tell me the odds!');
console.log(hanSolo);
// console.log(Object getOwnPropertyName(hanSolo));
// console.log(Object getOwnPropertyName(hanSolo__proto__))

const Verona = new Player("Verona", 1000, 500, ["Truth Laso"])
console.log(Verona)
Verona.speak("I need a drink!");
// console.log(Object getOwnPropertyName(Verona));
// console.log(Object getOwnPropertyName(Verona__proto__))

function AnotherPlayer(name, hp, mp, items) {
    this.name = name;
    this.hp = hp;
    this.mp = mp;
    this.items = items;
}

AnotherPlayer.prototype.speak = function(phrase) {
    console.log(`${this.name} says: ${phrase}`);
};

const darthVader = new AnotherPlayer("Darth Vader", 200, 50, ["Light Saber"]);
darthVader.speak("Luke, I am your father!");
console.log(darthVader);
// console.log(Object getOwnPropertyName(darctVader));
// console.log(Object getOwnPropertyName(darctVader__proto__))
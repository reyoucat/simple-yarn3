"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makePerson = void 0;
let MAX_AGE = 100;
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
exports.default = Person;
function makeRendomNumber(max = MAX_AGE) {
    return Math.ceil(Math.random() * max);
}
const makePerson = (name, age = makeRendomNumber()) => ({ name, age });
exports.makePerson = makePerson;
//# sourceMappingURL=Person.js.map
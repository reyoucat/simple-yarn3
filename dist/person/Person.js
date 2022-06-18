let MAX_AGE = 100;
export default class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
function makeRendomNumber(max = MAX_AGE) {
    return Math.ceil(Math.random() * max);
}
export const makePerson = (name, age = makeRendomNumber()) => ({ name, age });
//# sourceMappingURL=Person.js.map
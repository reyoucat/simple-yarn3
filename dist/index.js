import Person from "./person/Person";
import Chance from "chance";
import * as R from "ramda";
const chance = new Chance();
let persons = R.range(0, 2)
    .map((n) => new Person(chance.name(), chance.age()));
console.log(persons);
//# sourceMappingURL=index.js.map
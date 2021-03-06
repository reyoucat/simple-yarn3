import IPerson from './IPerson';
let MAX_AGE = 100;


export default class Person implements IPerson {
  constructor(public name: string, public age: number) {}
}

function makeRendomNumber(max: number = MAX_AGE): number{
  return Math.ceil(Math.random() * max);
}

export const makePerson = (name: string, age: number = makeRendomNumber()) => ({name,age})

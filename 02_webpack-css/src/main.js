// src/main.js
import sum from './js/sum.js';
const { name, age, say } = require('./js/person.js');
import { element } from './js/element';

console.log(sum(20, 30));
console.log(name);
console.log(age);
say('sandy');
element();
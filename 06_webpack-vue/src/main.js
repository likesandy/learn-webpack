// src/main.js

import sum from './js/sum.js';
const { name, age, say } = require('./js/person.js');
import { element } from './js/element';
// import { createApp } from 'vue/dist/vue.esm-bundler';

import { createApp } from 'vue';
// 这里的后缀名不能省略
import App from './vue/App.vue';

console.log(sum(20, 30));
console.log(name);
console.log(age);
say('sandy');
element();

// const app = createApp({
//   template: `<h2>{{title}}</h2>`,
//   data() {
//     return {
//       title: 'Hello World'
//     }
//   }
// }).mount('#app');

const app = createApp(App);
app.mount('#app');

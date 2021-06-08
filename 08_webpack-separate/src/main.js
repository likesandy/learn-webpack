// src/main.js

// import sum from './js/sum.js';
import sum from '@/js/sum.js';
// const { name, age, say } = require('./js/person.js');
const { name, age, say } = require('@/js/person.js');
// import { element } from './js/element';
import { element } from 'js/element';

// import { createApp } from 'vue/dist/vue.esm-bundler';

import { createApp } from 'vue';
// import App from './vue/App';
import App from '@/vue/App';

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

if (module.hot) {
  module.hot.accept('./js/element.js', () => {
    console.log('element文件更新了')
  })
}
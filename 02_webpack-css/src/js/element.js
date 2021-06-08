// src/element.js
// import 'css-loader!../css/style.css';
import '../css/style.css';
import '../css/title.less';

export function element() {
  const divEl = document.createElement('div');

  divEl.className = 'title';
  divEl.innerHTML = 'Hello World';

  document.body.appendChild(divEl);
}

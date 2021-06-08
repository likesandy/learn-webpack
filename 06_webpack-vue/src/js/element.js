// src/element.js

import '../css/style.css';
import '../css/title.less';
import '../css/image.css';
import zhudi from '../images/zhudi.jpg'
import '../font/iconfont.css';


export function element() {
  const divEl = document.createElement('div');
  const bgEl = document.createElement('div');
  const imgEl = document.createElement('img');
  const iEl = document.createElement('i');
  divEl.className = 'title';
  divEl.innerHTML = 'Hello World';
  bgEl.className = 'image-bg';
  imgEl.src = zhudi;
  iEl.className = "iconfont icon-rili";

  document.body.appendChild(divEl);
  document.body.appendChild(bgEl);
  document.body.appendChild(imgEl);
  document.body.appendChild(iEl);
}

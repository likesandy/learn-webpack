// src/element.js

// import 'css-loader!../css/style.css';
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
  // 设置src,它不会根据你这里的路劲而找到对应的图片地址,而是直接将字符串的内容设置成src
  // 我们只能把src的地址当做模块化的方式来引用
  imgEl.src = zhudi;
  iEl.className = "iconfont icon-rili";

  document.body.appendChild(divEl);
  document.body.appendChild(bgEl);
  document.body.appendChild(imgEl);
  document.body.appendChild(iEl);
}

console.log(codertao.length);
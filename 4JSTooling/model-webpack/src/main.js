import { submitBtn } from './components/button.js';
import { container } from './components/container.js';
import { box } from './components/box.js';
import { p } from './components/paragraph.js'
import './assets/css/style.css';

const app = document.querySelector('#app');
app.appendChild(container);
container.appendChild(box);
box.appendChild(p);
box.appendChild(submitBtn);
p.innerHTML = ' Lorem ';
submitBtn.innerText = "Submit";
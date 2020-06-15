import * as logger from './js/logger';
import './css/fonts.css';
import './css/style.css';
import sampleIcon from './assets/img/animal.svg';

function createMessage() {
  const container = document.createElement('p');
  container.innerText = 'hello';
  container.classList.add('container');

  return container;
}

function createIcon() {
  const icon = new Image();
  icon.src = sampleIcon;

  return icon;
}

logger.log();

document.body.appendChild(createMessage());
document.body.appendChild(createIcon());

if (process.env.NODE_ENV !== 'production') {
  console.log('you are in dev mode');
}
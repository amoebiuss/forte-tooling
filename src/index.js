import * as logger from './js/logger';

function createMessage() {
  const container = document.createElement('p');
  container.innerText = 'hello';
  return container;
}

logger.log();

document.body.appendChild(createMessage());
import { AlertBox } from './alert-box/alert-box';
import writeText from './write-text/write-text';
// Since it's a class, we need to instantiate it before we can use it.
const alertUser = new AlertBox();
document.addEventListener('DOMContentLoaded', () => {
  const alertButton = document.getElementById('js-button');
  alertButton.addEventListener('click', alertUser.sayHi);
  const pTagButton = document.getElementById('js-write-text-button');
  const pTag = document.querySelector('p');
  /**
  * This is another variation. We create an anonymous function (Search more about it online)
  * and we call the function.
  */
  pTagButton.addEventListener('click', () => {
    writeText(pTag)
  });
});

import GLOBAL from '../global/global';
import Menu from '../components/Menu';
import './data';

function initMenu() {
  if (typeof Menu === 'undefined') {
    return false;
  }

  const common = {}; // for paricular params

  Array.prototype.forEach.call(document.getElementsByClassName('JS-Menu'), function(elem) {
    if (!elem.classList.contains("JS-Menu-Ready")) {
      const elParams = GLOBAL.parseData(elem.dataset.menuParams); // parse patams from element data-something
      const params = Object.assign({}, common, elParams);

      new Menu(elem, params);
    }
  });
}

document.addEventListener('DOMContentLoaded', function() {
  initMenu();
});
export default class Menu {
  constructor(elem, params = {}) {
    this.elem = elem;
    this.params = params;

    this.cssElemOpen = this.params.cssElemOpen || '';

    this.construct();
  }

  construct() {
    this.elOpen = this.elem.getElementsByClassName('JS-Menu-Open')[0];
    this.elClose = this.elem.getElementsByClassName('JS-Menu-Close')[0];

    this.init();
    this.ready();
  }

  init() {
    var _this = this;
    this.elOpen.addEventListener('click', this.open.bind(this));
    this.elClose.addEventListener('click', this.close.bind(this));
  }

  ready() {
    this.elem.classList.add('JS-Menu-Ready');
  }

  open() {
    this.elem.classList.add(this.cssElemOpen);
  }

  close() {
    this.elem.classList.remove(this.cssElemOpen);
  }
}

export default class Collapse {
  constructor(container) {
    this.container = container;
  }

  init() {
    this.onClick = this.onClick.bind(this);
    this.bindToDom();
  }

  bindToDom() {
    this.btnClick();
  }

  btnClick() {
    const btn = this.container.querySelector('.collapse__btn');

    btn.addEventListener('click', this.onClick);
  }

  onClick() {
    const block = this.container.querySelector('.collapse__block');
    const text = block.querySelector('.collapse__text');
    const className = 'collapse__anim';

    if (block.classList.contains(className)) {
      block.classList.remove(className);
      block.style.height = 0;
    } else {
      block.classList.add(className);
      block.style.height = `${text.offsetHeight}px`;
    }
  }
}

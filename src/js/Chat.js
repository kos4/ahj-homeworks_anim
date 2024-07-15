export default class Chat {
  constructor(container) {
    this.container = container;
  }

  init() {
    this.onClickBtn = this.onClickBtn.bind(this);
    this.bindToDom();
  }

  bindToDom() {
    this.btnShow();
    this.btnClose();
  }

  btnShow() {
    const btn = this.container.querySelector('.chat_btn');

    btn.addEventListener('click', this.onClickBtn);
  }

  btnClose() {
    const btn = this.container.querySelector('.chat__close');

    btn.addEventListener('click', this.onClickBtn);
  }

  onClickBtn() {
    this.container.classList.toggle('chat__show');
  }
}

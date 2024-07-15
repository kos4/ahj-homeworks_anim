import './style.css';

export default class Chat {
  constructor(container) {
    this.container = container;
    this.containerChat = undefined;
  }

  init() {
    this.onClickBtn = this.onClickBtn.bind(this);
    this.bindToDom();
  }

  bindToDom() {
    this.render();
    this.btnShow();
    this.btnClose();
  }

  btnShow() {
    const btn = this.containerChat.querySelector('.chat_btn');

    btn.addEventListener('click', this.onClickBtn);
  }

  btnClose() {
    const btn = this.containerChat.querySelector('.chat__close');

    btn.addEventListener('click', this.onClickBtn);
  }

  onClickBtn() {
    this.containerChat.classList.toggle('chat__show');
  }

  render() {
    this.container.insertAdjacentHTML('beforeend', Chat.markup());
    this.containerChat = this.container.querySelector('.chat');
  }

  static markup() {
    return `
      <div class="chat">
        <div class="chat_btn"></div>
        <div class="chat__form">
          <div class="chat__close"></div>
          <div class="chat__title">Напишите нам</div>
          <form class="form">
            <div class="form__group">
              <label for="chatText"></label>
              <textarea class="form__textarea" id="chatText"></textarea>
            </div>
            <div class="form__group">
              <button class="form__btn" type="button">Отправить</button>
            </div>
          </form>
        </div>
      </div>
    `;
  }
}

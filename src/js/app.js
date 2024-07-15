import Collapse from './Collapse';
import Chat from './Chat';

const collapse = new Collapse(document.querySelector('.collapse'));
collapse.init();

const chat = new Chat(document.querySelector('.chat'));
chat.init();

import Collapse from './Collapse';
import Chat from './components/chat/Chat';

const collapse = new Collapse(document.querySelector('.collapse'));
collapse.init();

const chat = new Chat(document.querySelector('body'));
chat.init();

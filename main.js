import { Game } from './game.js';
import { UI } from './ui.js';

const ui = new UI();
const game = new Game(ui);

window.addEventListener('load', () => {
  ui.init(game);
  game.init();
});

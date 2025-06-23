//import "./styles/styles.css"; // do NOT include
import "./styles/media.css"; // always include

import createBoard from "./modules/render.js";

const boards = document.querySelectorAll('.board');

createBoard(boards, 10);
import setFrontendStyle from './modules/frontendText.js';
import setDeveloperStyle from './modules/developerText.js';
import changeTechnoText from './modules/technologies.js';
import { setMenuStyle } from './modules/scroll.js';

const closeModalBtn = document.getElementById('close') as HTMLElement;

window.addEventListener('scroll', () => {
    const scroll: number = window.scrollY;
    setFrontendStyle(scroll);
    setDeveloperStyle(scroll);
    setMenuStyle(scroll);
})

closeModalBtn.addEventListener('click', () => {
    setMenuStyle(window.scrollY);
})

setMenuStyle(window.scrollY);
changeTechnoText();
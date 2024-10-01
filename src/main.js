AOS.init();
import setFrontendStyle from './modules/frontendText.js';
import setDeveloperStyle from './modules/developerText.js';


window.addEventListener('scroll', () => {
    const scroll = window.scrollY;

    setFrontendStyle(scroll);
    setDeveloperStyle(scroll);
})
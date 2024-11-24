import setFrontendStyle from './modules/frontendText.js';
import setDeveloperStyle from './modules/developerText.js';
import changeTechnoText from './modules/technologies.js';
const links = document.querySelectorAll('#link');
const contactBtn = document.querySelectorAll('#contactBtn');
const closeModalBtn = document.getElementById('close');
const light = document.getElementsByClassName('light')[0];
function setColor(event = null) {
    links.forEach(e => {
        e.classList.remove('active');
    });
    if (event) {
        event.classList.add('active');
        moveLight(event);
    }
}
function moveLight({ offsetTop, offsetHeight }) {
    light.style.transform = `translateY(${offsetTop - offsetHeight / 10}px)`;
}
function setMenuStyle(scroll) {
    if (scroll < window.screen.height - 500) {
        setColor(links[0]);
    }
    else if (scroll > window.screen.height - 500 && scroll < (window.screen.height * 2) - 500) {
        setColor(links[1]);
    }
    else if (scroll > (window.screen.height * 2) - 500 && scroll < (window.screen.height * 3) - 500) {
        setColor(links[2]);
    }
    else if (scroll > (window.screen.height * 3) - 500 && scroll < (window.screen.height * 4) - 500) {
        setColor(links[3]);
    }
    else if (scroll > (window.screen.height * 4) - 500) {
        setColor(links[4]);
    }
}
contactBtn.forEach(e => {
    e.addEventListener('click', () => setColor());
});
closeModalBtn.addEventListener('click', () => {
    setMenuStyle(window.scrollY);
});
window.addEventListener('scroll', () => {
    const scroll = window.scrollY;
    setFrontendStyle(scroll);
    setDeveloperStyle(scroll);
    setMenuStyle(scroll);
});
setMenuStyle(window.scrollY);
changeTechnoText();

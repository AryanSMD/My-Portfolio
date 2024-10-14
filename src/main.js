AOS.init();
import setFrontendStyle from './modules/frontendText.js';
import setDeveloperStyle from './modules/developerText.js';
import changeTechnoText from './modules/technologies.js';

const home = document.getElementById('homeLink');
const about = document.getElementById('aboutLink');
const education = document.getElementById('educationLink');
const skills = document.getElementById('skillsLink');
const experience = document.getElementById('experienceLink');
const contactBtn1 = document.getElementById('contactBtn1');
const contactBtn2 = document.getElementById('contactBtn2');
const closeModalBtn = document.getElementById('close');

function setColor(elem) {
    elem.classList.add('!text-primary');
}
function clear() {
    home.classList.remove('!text-primary');
    about.classList.remove('!text-primary');
    education.classList.remove('!text-primary');
    skills.classList.remove('!text-primary');
    experience.classList.remove('!text-primary');
}
function setMenuStyle(scroll) {
    if (scroll < window.screen.height - 500) {
        clear();
        setColor(home);
    } else if (scroll > window.screen.height - 500 && scroll < (window.screen.height * 2) - 500) {
        clear();
        setColor(about);
    } else if (scroll > (window.screen.height * 2) - 500 && scroll < (window.screen.height * 3) - 500) {
        clear();
        setColor(education);
    } else if (scroll > (window.screen.height * 3) - 500 && scroll < (window.screen.height * 4) - 500) {
        clear();
        setColor(skills);
    } else if (scroll > (window.screen.height * 4) - 500) {
        clear();
        setColor(experience);
    }
}

contactBtn1.addEventListener('click', () => {
    clear();
})
contactBtn2.addEventListener('click', () => {
    clear();
})
closeModalBtn.addEventListener('click', () => {
    setMenuStyle(window.scrollY);
})

window.addEventListener('scroll', () => {
    const scroll = window.scrollY;
    setFrontendStyle(scroll);
    setDeveloperStyle(scroll);
    setMenuStyle(scroll);
})

setMenuStyle(window.scrollY);
changeTechnoText();
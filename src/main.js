AOS.init();
import setFrontendStyle from './modules/frontendText.js';
import setDeveloperStyle from './modules/developerText.js';


const home = document.getElementById('homeLink');
const about = document.getElementById('aboutLink');
const education = document.getElementById('educationLink');
const skills = document.getElementById('skillsLink');
const experience = document.getElementById('experienceLink');


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

setColor(home)
window.addEventListener('scroll', () => {
    const scroll = window.scrollY;

    setFrontendStyle(scroll);
    setDeveloperStyle(scroll);

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
})
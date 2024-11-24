import setFrontendStyle from './modules/frontendText.js';
import setDeveloperStyle from './modules/developerText.js';
import changeTechnoText from './modules/technologies.js';


const links = document.querySelectorAll('#link') as NodeListOf<Element>;
const contactBtn = document.querySelectorAll('#contactBtn') as NodeListOf<Element>;
const closeModalBtn = document.getElementById('close') as HTMLElement;
const light = document.getElementsByClassName('light')[0] as HTMLDivElement;


function setColor(event: Element|null = null): void {
    links.forEach(e => {
        e.classList.remove('active');
    })

    if (event) {
        event.classList.add('active');
        moveLight(event);
    }
}

function moveLight({ offsetTop, offsetHeight }: any) {
    light.style.transform = `translateY(${ offsetTop - offsetHeight/10}px)`;
}

function setMenuStyle(scroll: number): void {
    if (scroll < window.screen.height - 500) {
        setColor(links[0]);

    } else if (scroll > window.screen.height - 500 && scroll < (window.screen.height * 2) - 500) {
        setColor(links[1]);

    } else if (scroll > (window.screen.height * 2) - 500 && scroll < (window.screen.height * 3) - 500) {
        setColor(links[2]);

    } else if (scroll > (window.screen.height * 3) - 500 && scroll < (window.screen.height * 4) - 500) {
        setColor(links[3]);

    } else if (scroll > (window.screen.height * 4) - 500) {
        setColor(links[4]);
    }
}


contactBtn.forEach(e => {
    e.addEventListener('click', () => setColor())
})

closeModalBtn.addEventListener('click', () => {
    setMenuStyle(window.scrollY);
})

window.addEventListener('scroll', () => {
    const scroll: number = window.scrollY;
    setFrontendStyle(scroll);
    setDeveloperStyle(scroll);
    setMenuStyle(scroll);
})

setMenuStyle(window.scrollY);
changeTechnoText();
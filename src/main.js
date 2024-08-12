AOS.init();

const navbar = document.getElementById('navbar');
const linkText = document.getElementsByClassName('link-text');
const linkSvg = document.getElementsByClassName('link-svg');
const about = document.getElementById('aboutLink');
const education = document.getElementById('educationLink');
const skills = document.getElementById('skillsLink');
const experiences = document.getElementById('experiencesLink');
const contact = document.getElementById('contactLink');
const cards = document.getElementsByClassName('card');


function setStyle(val) {
    val.classList.add('text-fourth');
    val.classList.add('text-fourth');
    navbar.classList.add('!bg-opacity-60');
    for(let i in linkText) {
        linkText[i].classList?.add('translate-y-[100px]');
        linkSvg[i].classList?.add('!translate-y-0');
    }
}

function removeStyle(val) {
    val.classList.remove('text-fourth');
}

function removeNavStyle() {
    navbar.classList?.remove('!bg-opacity-60');
    for(let i in linkText) {
        linkText[i].classList?.remove('translate-y-[100px]');
        linkSvg[i].classList?.remove('!translate-y-0');
    }
}

function clear() {
    removeStyle(about);
    removeStyle(skills);
    removeStyle(education);
    removeStyle(experiences);
    removeStyle(contact);
}


document.onscroll = () => {
    const scroll = window.scrollY;

    if (window.screen.width > 767) {
        if (scroll < 1) {
            clear();
            removeNavStyle();
        } else if (cards[0].getBoundingClientRect().bottom > 300) {
            clear();
            setStyle(about);
        } else if (cards[1].getBoundingClientRect().bottom > 300) {
            clear();
            setStyle(education);
        } else if (cards[2].getBoundingClientRect().bottom > 300) {
            clear();
            setStyle(skills);
        } else if (cards[3].getBoundingClientRect().bottom > 700) {
            clear();
            setStyle(experiences);
        } else if (cards[3].getBoundingClientRect().bottom > 200) {
            clear();
            setStyle(contact);
        }
    }
}
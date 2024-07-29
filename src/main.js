const about = document.getElementById('aboutLink');
const education = document.getElementById('educationLink');
const skills = document.getElementById('skillsLink');
const experiences = document.getElementById('experiencesLink');
const contact = document.getElementById('contactLink');
const cards = document.getElementsByClassName('card');

function setStyle(val) {
    val.classList.add('text-tertiary');
    val.classList.add('md:scale-105');
}
function removeStyle(val) {
    val.classList.remove('text-tertiary');
    val.classList.remove('md:scale-105');
}
function clear() {
    removeStyle(about);
    removeStyle(skills);
    removeStyle(education);
    removeStyle(experiences);
    removeStyle(contact);
    for(let i in cards) {
        cards[i].classList?.remove('scale-105');
    }
};

document.onscroll = () => {
    const scroll = window.scrollY;

    if (window.screen.width > 767) {
        if (scroll < 1) {
            clear();
            cards[0].classList.add('scale-105');
        } else if (cards[0].getBoundingClientRect().bottom > 200) {
            clear();
            setStyle(about);
            cards[0].classList.add('scale-105');
        } else if (cards[1].getBoundingClientRect().bottom > 200) {
            clear();
            setStyle(education);
            cards[1].classList.add('scale-105');
        } else if (cards[2].getBoundingClientRect().bottom > 200) {
            clear();
            setStyle(skills);
            cards[2].classList.add('scale-105');
        } else if (cards[3].getBoundingClientRect().bottom > 700) {
            clear();
            setStyle(experiences);
            cards[3].classList.add('scale-105');
        } else if (cards[3].getBoundingClientRect().bottom > 200) {
            clear();
            setStyle(contact);
        }
    }
}
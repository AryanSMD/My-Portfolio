const about = document.getElementById('aboutLink');
const education = document.getElementById('educationLink');
const skills = document.getElementById('skillsLink');
const experiences = document.getElementById('experiencesLink');
const contact = document.getElementById('contactLink');


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
};

document.onscroll = () => {
    const body = document.body.scrollHeight;
    const screen = window.screen.height;
    const scroll = window.scrollY;

    if (window.screen.width > 767) {
        if (scroll < 1) {
            clear();
        } else if (scroll > 1 && scroll < 330) {
            clear();
            setStyle(about);
        } else if (scroll > 330 && scroll < 895) {
            clear();
            setStyle(education);
        } else if (scroll > 895 && scroll < 1390) {
            clear();
            setStyle(skills);
        } else if (scroll > 1390 && scroll < (body - screen)) {
            clear();
            setStyle(experiences);
        } else if (scroll > (body - screen)) {
            clear();
            setStyle(contact);
        }
    }
}
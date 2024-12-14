const links = document.querySelectorAll('#link');
const light = document.getElementsByClassName('light')[0];
function moveLight({ offsetTop, offsetHeight }) {
    light.style.transform = `translateY(${offsetTop - offsetHeight / 10}px)`;
    const newLinks = links;
    switch (offsetTop) {
        case newLinks[0].offsetTop:
            light.style.backgroundColor = 'var(--primary)';
            break;
        case newLinks[1].offsetTop:
            light.style.backgroundColor = '#00ffff';
            break;
        case newLinks[2].offsetTop:
            light.style.backgroundColor = '#ff0000';
            break;
        case newLinks[3].offsetTop:
            light.style.backgroundColor = '#fff700';
            break;
        case newLinks[4].offsetTop:
            light.style.backgroundColor = '#e600ff';
            break;
    }
}
function setColor(event = null) {
    links.forEach(e => {
        e.classList.remove('active');
    });
    if (event) {
        event.classList.add('active');
        moveLight(event);
    }
}
export { links, setColor };

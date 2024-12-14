const links = document.querySelectorAll('#link') as NodeListOf<Element>;
const light = document.getElementsByClassName('light')[0] as HTMLDivElement;

function moveLight({ offsetTop, offsetHeight }: any) {
    light.style.transform = `translateY(${ offsetTop - offsetHeight/10 }px)`;
    const newLinks: any = links;
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

function setColor(event: Element|null = null): void {
    links.forEach(e => {
        e.classList.remove('active');
    })

    if (event) {
        event.classList.add('active');
        moveLight(event);
    }
}

export {
    links,
    setColor
}
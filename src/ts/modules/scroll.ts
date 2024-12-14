import { links, setColor } from './sidebar.js';


export function setMenuStyle(scroll: number): void {
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
export default function setFrontendStyle(scroll: number): void {
    if (window.screen.width > 1024) {
        $('#frontend').css('transform', `translateX(${scroll * 4 < 1000 ? scroll * 4 : 1000}px)`);
    } else {
        $('#frontend').css('transform', `translateX(${scroll * 8 < 1000 ? scroll * 8 : 1000}px)`);
    }
}
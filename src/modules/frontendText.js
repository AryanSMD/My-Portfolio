const frontend = document.getElementById('frontend');

export default function setFrontendStyle(scroll) {
    if (window.screen.width > 1024) {
        $('#frontend').css('transform', `translateX(${scroll * 4 < 1000 ? scroll * 4 : 1000}px)`);
    } else {
        $('#frontend').css('transform', `translateX(${scroll * 8 < 1000 ? scroll * 8 : 1000}px)`);
    }
}
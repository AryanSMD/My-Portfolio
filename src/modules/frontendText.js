const frontend = document.getElementById('frontend');

export default function setFrontendStyle(scroll) {
    $('#frontend').css('transform', `translateX(${scroll * 4 < 1000 ? scroll * 4 : 1000}px)`)
}
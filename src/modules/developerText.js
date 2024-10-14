const developer = document.getElementById('developer');

export default function setDeveloperStyle(scroll) {
    if (window.screen.width > 1024) {
        $('#developer').css('opacity', `${ (100 - scroll * .4) >= 0 ? 100 - scroll * .4 : 0 }%`)
        $('#developer').css('transform', `scale(${ (1 - scroll * .002) >= 0 ? 1 - scroll * .002 : 0 })`)
        $('#technologies').css('opacity', `${ (100 - scroll * .4) >= 0 ? 100 - scroll * .4 : 0 }%`)
        $('#technologies').css('transform', `scale(${ (1 - scroll * .002) >= 0 ? 1 - scroll * .002 : 0 })`)
    } else {
        $('#developer').css('transform', `translateX(-${scroll * 8 < 1000 ? scroll * 8 : 1000}px)`);
        $('#technologies').css('transform', `translateX(-${scroll * 8 < 1000 ? scroll * 8 : 1000}px)`);
    }
}
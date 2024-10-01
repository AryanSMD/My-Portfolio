const developer = document.getElementById('developer');

export default function setDeveloperStyle(scroll) {
    $('#developer').css('opacity', `${ (100 - scroll * .4) >= 0 ? 100 - scroll * .4 : 0 }%`)
    $('#developer').css('transform', `scale(${ (1 - scroll * .002) >= 0 ? 1 - scroll * .002 : 0 })`)
}
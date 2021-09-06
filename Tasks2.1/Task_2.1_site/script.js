function changeSite() {
    document.getElementById('container').style.display = 'flex';
    document.getElementById('body').style.overflowY = 'hidden';
}

function rechangeSite() {
    document.getElementById('container').style.display = 'none';
    document.getElementById('body').style.overflowY = 'scroll';
}
const button = document.getElementById('darkmode');
const body = document.body;
const navs = document.getElementById('darkmodnav');
const button1 = document.getElementById('anamenubtn');
const ayuak = document.getElementById('footers');
const ulyaz=document.getElementById('yazıssd');

// Sayfa yüklendiğinde tercihleri kontrol et
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('darkmode') === 'enabled') {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});

button.addEventListener('click', () => {
    if (localStorage.getItem('darkmode') === 'enabled') {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
});

function enableDarkMode() {
    ulyaz.classList.toggle('ullyaz')
    body.classList.add('darkmods');
    navs.classList.add('darkmod1');
    button.classList.add('darkmodel');
    button1.classList.add('darkmode2');
    ayuak.classList.add('foot');
    iletism.classList.add('ilet');
    localStorage.setItem('darkmode', 'enabled');
}

function disableDarkMode() {
    ulyaz.classList.toggle('ullyaz')
    body.classList.remove('darkmods');
    navs.classList.remove('darkmod1');
    button.classList.remove('darkmodel');
    button1.classList.remove('darkmode2');
    ayuak.classList.remove('foot');
    iletism.classList.remove('ilet');
    localStorage.setItem('darkmode', 'disabled');
}

    
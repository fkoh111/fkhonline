const splash = document.getElementById('splash');

splash.onclick = function addRobo() {
    splash.classList.remove('spinner')
    splash.innerHTML = "<img src='data/gif/roboLarge.gif' />";
}

function addSpinner() {
    splash.classList.add('spinner')
}
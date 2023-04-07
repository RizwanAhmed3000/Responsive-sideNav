const icon = document.querySelector('.icon').firstChild;
const sideNav = document.querySelector('.navContainer');
const closeBtn = document.querySelector('.closeBtn').firstChild;

icon.addEventListener('click', callNav);
closeBtn.addEventListener('click', callNav)

function callNav(){
    sideNav.classList.toggle('notVisible');
}
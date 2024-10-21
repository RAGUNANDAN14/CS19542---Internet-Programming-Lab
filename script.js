let menu=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menu.onclick=() => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-b');
    navbar.classList.remove('active')
}

//typing text code

var typed = new Typed('.multiple-text',{
    strings:['Physical Fitness','Weight Gain','Strenght Training','Fat Lose','Weight Lifting','Running'],
    typespeed: 60,
    backspeed: 60,
    backdelay: 1000,
    loop: true,
});
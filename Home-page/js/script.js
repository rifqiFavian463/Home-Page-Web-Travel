const toggle = document.querySelector('.fa-bars')
const nav = document.querySelector('.nav')
toggle.addEventListener('click',function(){
    toggle.classList.toggle("active");
    nav.classList.toggle("active");
})
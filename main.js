const hambergerBtn = document.querySelector('.navbar_hambergerBtn');
const menu = document.querySelector('.navbar_items');

hambergerBtn.addEventListener('click', ()=>{
    menu.classList.toggle('active');
})
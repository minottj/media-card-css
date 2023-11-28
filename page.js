function navToggle(){
    let siteNav =document.getElementById('site-nav')
    let trigram =document.getElementById ('trigram')
    if (siteNav.className === 'nav-wrap');
    trigram.classList.add('mobile');
    trigram.classList.add('tri-mobile');
} else {
  siteNav.classList = 'nav-wrap';
  trigram.classList = '';


}

//Modal Logic
document.querySelectorAll('.open-modal').for each(openBtn ===>{
    openBtn.addEventListener('click', event=>{
        let cardContent = event.target.previousElementSibling;
        let modalContent = document.getElementById('modal-wrap');
        modalContent.appendChild(cardContent.clonenode(true));
        modalContent.classList.add('show');
})
});
document.getElementById('modal-wrap').addEventListener('click', event=>{
    let modalContent = document.getElementById('modal-wrap');
    let cardContent = modalContent.firstElementChild;
    if (modalContent.className === 'show') {
        modalContent.innerHTML = '';
        modalContent.classList.remove('show');
        event.preventDefault();
        console.log(cardContent);
        return false;
    }
});

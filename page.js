
function navToggle() {
  let siteNav = document.getElementById('site-nav');
  let trigram = document.getElementById('trigram');
  if (siteNav.className === 'nav-wrap') {
    siteNav.classList.add('mobile');
    trigram.classList.add('tri-mobile');
  } else {
    siteNav.classList = 'nav-wrap';
    trigram.classList = 'nav-link';
  }
}
/*--- 
Slideshow functions 
--*/
let slideIndex = 1;
showSlides(slideIndex);
// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}
// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}
//main slideshow function
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("thumb");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1};
  if (n < 1) {slideIndex = slides.length};
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
} 

// Modal logic
document.querySelectorAll('.open-modal').forEach(openBtn => {
  openBtn.addEventListener('click', event => {
    let cardContent = event.target.previousElementSibling;
    let modalContent = document.getElementById('modal-wrap');
    modalContent.appendChild(cardContent.cloneNode(true));
    modalContent.classList.add('show');
  })
});
document.getElementById('modal-wrap').addEventListener('click', event => {
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




  
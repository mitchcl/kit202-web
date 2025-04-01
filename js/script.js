function myFunction(event) {
    var dots = event.target.previousElementSibling.querySelector(".dots");
    var moreText = event.target.previousElementSibling.querySelector(".more");
    var btn = event.target;
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btn.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btn.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
}

// Fix for scroll button functionality
document.addEventListener('DOMContentLoaded', function() {
  let scroll = document.querySelector('.scroll');
  
  if (scroll) {
    window.onscroll = function() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scroll.classList.add('visible');
      } else {
        scroll.classList.remove('visible');
      }
    };
  }
});

function scrollToTop() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}
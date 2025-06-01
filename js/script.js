function toggleReadMore(event) {
  const dots = event.target.previousElementSibling.querySelector(".dots");
  const moreText = event.target.previousElementSibling.querySelector(".more");
  const btn = event.target;

  if (dots.classList.contains('hidden')) {
    // If expanded, collapse it
    dots.classList.remove('hidden');
    btn.innerHTML = "Read more";
    btn.classList.remove('active');
    
    // Start animation for hiding content
    moreText.classList.remove('shown');
    
    // Add a subtle rotation animation to the button
    btn.style.transition = "transform 0.3s ease";
    
    // Wait for animation to finish before fully hiding
    setTimeout(() => {
      moreText.style.display = "none";
    }, 500);
  } else {
    // If collapsed, expand it
    dots.classList.add('hidden');
    btn.innerHTML = "Read less";
    btn.classList.add('active');
    moreText.style.display = "inline";
    
    // Add a subtle rotation animation to the button
    btn.style.transition = "transform 0.3s ease";
    
    // Trigger animation after a small delay to ensure display change takes effect
    setTimeout(() => {
      moreText.classList.add('shown');
    }, 10);
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
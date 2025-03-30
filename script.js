function myFunction(event) {
    var dots = event.target.previousElementSibling.querySelector(".dots");
    var moreText = event.target.previousElementSibling.querySelector(".more");
    var btnText = event.target;
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }



// document.addEventListener("DOMContentLoaded", function () {
//     var btn = document.getElementById("myBtn1");
//     var dots = document.getElementById("dots1");
//     var moreText = document.getElementById("more1");

//     btn.addEventListener("click", function () {
//         if (dots.style.display === "none") {
//             dots.style.display = "inline";
//             btn.textContent = "Read more"; 
//             moreText.style.display = "none";
//         } else {
//             dots.style.display = "none";
//             btn.textContent = "Read less"; 
//             moreText.style.display = "inline";
//         }
//     });
// });

// document.addEventListener("DOMContentLoaded", function () {
//     var btn = document.getElementById("myBtn2");
//     var dots = document.getElementById("dots2");
//     var moreText = document.getElementById("more2");

//     btn.addEventListener("click", function () {
//         if (dots.style.display === "none") {
//             dots.style.display = "inline";
//             btn.textContent = "Read more"; 
//             moreText.style.display = "none";
//         } else {
//             dots.style.display = "none";
//             btn.textContent = "Read less"; 
//             moreText.style.display = "inline";
//         }
//     });
// });



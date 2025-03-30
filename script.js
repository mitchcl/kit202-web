document.addEventListener("DOMContentLoaded", function () {
    var btn = document.getElementById("myBtn");
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");

    btn.addEventListener("click", function () {
        if (dots.style.display === "none") {
            dots.style.display = "inline";
            btn.textContent = "Read more"; 
            moreText.style.display = "none";
        } else {
            dots.style.display = "none";
            btn.textContent = "Read less"; 
            moreText.style.display = "inline";
        }
    });
});
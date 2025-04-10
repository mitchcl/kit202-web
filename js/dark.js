// Fix for dark-mode slider/checkbox functionality
document.addEventListener('DOMContentLoaded', function() {

    const darkModeToggle = document.getElementById("darkModeToggle");
// Check if dark mode is enabled then apply it
if (darkModeToggle) {
  if (localStorage.getItem('darkMode') === 'enabled') {
      document.body.classList.add("dark-mode");
      darkModeToggle.checked = true;
  }
  // Event listener to handle the changes in dark mode toggle
  darkModeToggle.addEventListener("change", function() {
      document.body.classList.toggle("dark-mode", this.checked);
      
      if (this.checked) {
          localStorage.setItem('darkMode', 'enabled');
      } else {
          localStorage.removeItem('darkMode');
      }
  });
}
});
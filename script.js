

// Get the icon element
const icon = document.querySelector('.burger');

// Get the menu element
const menu = document.querySelector('.navigation ul');

// Add event listener to the icon for the click event
icon.addEventListener('click', function() {
  // Toggle the 'active' class on the menu
  menu.classList.toggle('active');
});

// Add event listener to the document for the click event
document.addEventListener('click', function(event) {
  // Check if the clicked element is outside the menu
  if (!menu.contains(event.target) && event.target !== icon) {
    // Remove the 'active' class from the menu
    menu.classList.remove('active');
  }
});





// Scroll button
let btn = document.querySelector('.scroll');

window.onscroll = function () {
    if(window.scrollY >= 600) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }

btn.addEventListener('click', () => {
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth",
    });
})
}



const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence. 


// Start Here: Create a reference to the ".menu" class
const menu = document.querySelectorAll('body .menu');
// create a reference to the ".menu-button" class

// Using your menuButton reference, add a click handler that calls toggleMenu
let menuButton = document.querySelector('header .menu-button');
menuButton.addEventListener('click', function(event)  {
  return toggleMenu();

})
   

};
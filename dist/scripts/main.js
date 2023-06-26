// NAVBAR CHAPTERS DROPDOWN
// Get the dropdown elements
const dropdown = document.getElementById("chapters-dropdown");
const dropdownMenu = document.getElementById("chapters-dropdown-menu");
const dropdownIcon = document.querySelector("#chapters-dropdown svg");

// Add event listeners for hover events
dropdown.addEventListener("mouseover", showDropdownMenu);
dropdown.addEventListener("mouseout", hideDropdownMenu);
dropdownMenu.addEventListener("mouseover", cancelHideDropdownMenu);
dropdownMenu.addEventListener("mouseout", hideDropdownMenu);

// Variables to track the hide delay
let hideTimeout;

// Function to show the dropdown menu
function showDropdownMenu() {
  clearTimeout(hideTimeout);
  dropdownMenu.classList.remove("hidden");
  dropdownMenu.style.height = "0";
  dropdownMenu.style.transition = "height 200ms";
  const dropdownMenuHeight = dropdownMenu.scrollHeight;
  dropdownMenu.style.height = dropdownMenuHeight + "px";
  dropdownIcon.style.transform = "rotate(180deg)";
}

// Function to hide the dropdown menu
function hideDropdownMenu() {
  hideTimeout = setTimeout(() => {
    dropdownMenu.style.height = "0";
    dropdownMenu.addEventListener("transitionend", setMenuHidden, {
      once: true,
    });
    dropdownIcon.style.transform = "";
  }, 200); // Adjust the delay time as needed (in milliseconds)
}

// Function to set the menu as hidden
function setMenuHidden() {
  dropdownMenu.classList.add("hidden");
  dropdownMenu.style.transition = "";
}

// Function to cancel the hide timeout
function cancelHideDropdownMenu() {
  clearTimeout(hideTimeout);
}
// END OF NAVBAR CHAPTERS DROPDOWN
//
//
//
//
// MOBILENAV MENU
// Get elements
const navbarMenuBtn = document.getElementById("navbar-menu-btn");
const navbarMenu = document.getElementById("navbar-menu");
const header = document.querySelector("header");
const menuIconPath = document.getElementById("menu-icon-path");

// Event Listener for Menu Btn click
navbarMenuBtn.addEventListener("click", function () {
  navbarMenu.classList.toggle("hidden");
  navbarMenu.classList.toggle("flex");
  header.classList.toggle("shadow-sm");
});

// Animate menuIcon
let mobileMenuIsActive = true;

navbarMenuBtn.addEventListener("click", function () {
  if (mobileMenuIsActive) {
    menuIconPath.setAttribute("d", "M4 5L20 20M20 5L4 20");
    menuIconPath.setAttribute("stroke-width", "2.4");
    mobileMenuIsActive = false;
  } else if (!mobileMenuIsActive) {
    menuIconPath.setAttribute("d", "M4 6h16M4 12h16M4 18h16");
    menuIconPath.setAttribute("stroke-width", "2");
    mobileMenuIsActive = true;
  }
});

// END OFMOBILENAV MENU
//
//
//
//

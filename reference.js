const menuBtn = document.querySelector(".menu-btn");
const mobileMenu = document.querySelector(".mobile-nav");
const mobileLinkProjects = document.getElementById("mobile-projects")
const mobileLinkAbout = document.getElementById("mobile-about")
const mobileLinkContact = document.getElementById("mobile-contact")

menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("is-active");
  mobileMenu.classList.toggle("is-active");
});

mobileLinkProjects.addEventListener("click", function () {
  menuBtn.classList.toggle("is-active");
  mobileMenu.classList.toggle("is-active");
});

mobileLinkAbout.addEventListener("click", function () {
  menuBtn.classList.toggle("is-active");
  mobileMenu.classList.toggle("is-active");
});

mobileLinkContact.addEventListener("click", function () {
  menuBtn.classList.toggle("is-active");
  mobileMenu.classList.toggle("is-active");
});

window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  const scrolled = window.scrollY > 0;
  header.classList.toggle('scrolled', scrolled);
});
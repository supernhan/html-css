// document.addEventListener("DOMContentLoaded", function() {
//   var checkvalue = window.location.pathname; // Use window.location.pathname instead of window.location.search
//   var links = document.querySelectorAll("a");

//   links.forEach(function(link) {
//       var hrefvalue = link.getAttribute('href');
//       if (hrefvalue === checkvalue) {
//           link.classList.add("active");
//       }
//   });
// });

const navList = document.getElementById("list-content");
const navToggle = document.getElementById("menu-list");
const navRemove = document.getElementById("menu-list-remove");

function isClickedInside(element, container) {
  let targetElement = element;
  do {
    if (targetElement == container) {
      return true;
    }
    targetElement = targetElement.parentNode;
  } while (targetElement);

  return false;
}

document.addEventListener("click", (event) => {
  if (
    !isClickedInside(event.target, navList) &&
    event.target !== navToggle &&
    event.target !== navRemove
  ) {
    navList.classList.remove("show-list");
  }
});

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navList.classList.toggle("show-list");
  });
}

if (navRemove) {
  navRemove.addEventListener("click", () => {
    navList.classList.remove("show-list");
  });
}

const navMenu = document.getElementById("nav-menu");
const navAdd = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

// Function to check if a clicked element is inside a specific container
function isClickedInside(element, container) {
  let targetElement = element;
  do {
    if (targetElement == container) {
      // Click was inside the container
      return true;
    }
    // Move up the DOM
    targetElement = targetElement.parentNode;
  } while (targetElement);

  // Click was outside the container
  return false;
}

// Close menu when clicking outside
document.addEventListener("click", (event) => {
  if (
    !isClickedInside(event.target, navMenu) &&
    !isClickedInside(event.target, navAdd)
  ) {
    // Click was outside the menu and the toggle buttonswiper-pagination swiper-pagination-bullets swiper-pagination-horizontal

    navMenu.classList.remove("show-menu");
  }
});

// Open menu when clicking on the toggle button
if (navAdd) {
  navAdd.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

// Close menu when clicking on the close button
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

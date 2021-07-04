var navbar = document.getElementsByClassName("navbar");
var navbarItems = navbar[0].getElementsByClassName("navbar-item");
for (var i = 0; i < navbarItems.length; i++) {
    navbarItems[i].addEventListener("click", function() {
  var current = navbar.getElementsByClassName("active");
  current[0].classList.remove("active");
  this.classList.add("active");
  });
}

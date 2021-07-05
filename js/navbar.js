document.addEventListener("DOMContentLoaded", function(){
  var navbar = document.getElementsByClassName("navbar");
  var navbarItems = navbar[0].getElementsByClassName("navbar-item");
  for (var i = 0; i < navbarItems.length; i++) {
      navbarItems[i].addEventListener("click", function() {
          console.log("ccc");
    var current = navbar[0].getElementsByClassName("active");
    console.log(current);
    current[0].classList.remove("active");
    this.classList.add("active");
    });
  }
})


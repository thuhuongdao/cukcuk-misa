document.addEventListener("DOMContentLoaded", function(){
    var menu = document.getElementsByClassName("menu");
    var menuItems = menu[0].getElementsByClassName("menu-item");
    for (var i = 0; i < menuItems.length; i++) {
        menuItems[i].addEventListener("click", function() {
            console.log("ccc");
      var current = menu[0].getElementsByClassName("active");
      console.log(current);
      current[0].classList.remove("active");
      this.classList.add("active");
      });
    }
  })
  
  
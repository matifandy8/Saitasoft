function myFunction() {
  var x = document.getElementsByClassName("menu-icon");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

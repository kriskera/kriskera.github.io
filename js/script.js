
function myFunction() {
  var x = document.querySelector("#nav-menu");
  var y = document.querySelector(".navbar");
  if (x.style.height === "0px") {
    x.style.visibility = "visible";
    x.style.opacity = "1";
    x.style.height = "90%";
    y.style.height = "100%";
    
  } else {
    x.style.visibility = "hidden";
    x.style.opacity = "0";
    x.style.height = "0";
    x.style.width = "0";
    y.style.height = "auto";
  }
}

//disable right click
// document.addEventListener("contextmenu", function (e){
//   e.preventDefault();
// }, false);







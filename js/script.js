//highlight navlink
function activelink() {
  var current = location.pathname.split('/')[1];
  console.log(current);
  if (current === "") return;
  var menuItems = document.querySelectorAll('.link');
  for (var i = 0, len = menuItems.length; i < len; i++) {
      if (menuItems[i].getAttribute("href").indexOf(current) !== -1) {
        menuItems[i].className += " boldlink";
      }
  }
};

activelink();

//navbar-mobile
function myFunction() {
  var x = document.querySelector("#nav-menu");
  var y = document.querySelector(".navbar");
  if (x.style.height === "0px") {
    x.style.visibility = "visible";
    x.style.opacity = "1";
    x.style.height = "80%";
    y.style.height = "100%";
    
  } else {
    x.style.visibility = "hidden";
    x.style.opacity = "0";
    x.style.height = "0";
    y.style.height = "0";
  }
}

//disable right click
document.addEventListener("contextmenu", function (e){
  e.preventDefault();
}, false);

//notif
const toast = document.querySelector(".toast");
const closeIcon = document.querySelector(".close");
const progress = document.querySelector(".progress");

let timer1, timer2;

function notif() {
  toast.classList.add("active");
  progress.classList.add("active");

  timer1 = setTimeout(() => {
    toast.classList.remove("active");
  }, 9000); //1s = 1000 milliseconds

  timer2 = setTimeout(() => {
    progress.classList.remove("active");
  }, 9300);
};

setTimeout(notif, 6000);

closeIcon.addEventListener("click", () => {
  toast.classList.remove("active");

  setTimeout(() => {
    progress.classList.remove("active");
  }, 300);

  clearTimeout(timer1);
  clearTimeout(timer2);
});

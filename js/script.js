// function myFunction() {
//   var x = document.querySelector("#nav-menu");
//   if (x.style.display === "block") {
//     x.style.display = "none";
//   } else {
//     x.style.display = "block";
//   }
// }



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
    y.style.height = "auto";
  }
}

// let el = document.querySelector(".bit-color-shift");
// function shiftColor() {
//   let myElements = document.querySelector(".bit-color-shift").children;

//   const color = {
//     red: "#FF2C49",
//     orange: "#FF6D46",
//     yellow: "#FFE751",
//     green: "#2FF630",
//     blue: "#00AAF8",
//     purple: "#7D5EF7",
//     darkGreen: "#00D574"
//   };

//   let hexCode = Object.values(color);
  
//   let count = 0;

//   function cycleArray() {
//     let myElement = myElements[count];
//     console.log(myElement);
//     let colour = hexCode[count];
//     console.log("Colour: "+ colour)
//     myElement.style.color = colour;

//     // increment our counter
//     count++;
//     console.log(count);

//     // reset counter if we reach end of array
//     if (count === myElements.length) {
//       count = 0;
//     }
//   }

// setInterval(cycleArray, 500);
// };









function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
    x.style.flexDirection = "row";
    x.style.flexWrap = "wrap";
  }
}

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

// console.log("hello world");
// function menuToggle() {
//   var x = document.getElementById("myNavtoggle");
//   if (x.className === "navtoggle") {
//     x.className += " responsive";
//   } else {
//     x.className = "navtoggle";
//   }
// }

// $(document).ready(function () {
//   // Add smooth scrolling to all links
//   $("a").on("click", function (event) {
//     if (this.hash !== "") {
//       // Prevent default anchor click behavior
//       event.preventDefault();

//       // Store hash
//       var hash = this.hash;

//       // Using jQuery's animate() method to add smooth page scroll
//       $("html, body").animate(
//         {
//           scrollTop: $(hash).offset().top,
//         },
//         800,
//         function () {
//           // Add hash (#) to URL when done scrolling (default click behavior)
//           window.location.hash = hash;
//         }
//       );
//     }
//   });
// });

// <!DOCTYPE html>
// <html>
// <head>
//   <title>Simple Slideshow</title>
//   <style>
//     /* Slideshow container */
//     .slideshow-container {
//       max-width: 500px;
//       position: relative;
//       margin: auto;
//     }

//     /* Hide all slides by default */
//     .slide {
//       display: none;
//     }

//     /* Optional: Add some styles to the images */
//     .slide img {
//       width: 100%;
//       height: auto;
//     }
//   </style>
// </head>
// <body>

// <div class="slideshow-container">
//   <!-- Slide 1 -->
//   <div class="slide">
//     <img src="path/to/image1.jpg" alt="Image 1">
//   </div>

//   <!-- Slide 2 -->
//   <div class="slide">
//     <img src="path/to/image2.jpg" alt="Image 2">
//   </div>

//   <!-- Slide 3 -->
//   <div class="slide">
//     <img src="path/to/image3.jpg" alt="Image 3">
//   </div>
// </div>

// <script>
//   // JavaScript to handle slideshow functionality
//   let slideIndex = 0;
//   showSlides();

//   function showSlides() {
//     let slides = document.getElementsByClassName("slide");
//     for (let i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//     }

//     slideIndex++;
//     if (slideIndex > slides.length) {
//       slideIndex = 1;
//     }

//     slides[slideIndex - 1].style.display = "block";
//     setTimeout(showSlides, 2000); // Change image every 2 seconds (2000 milliseconds)
//   }
// </script>

// </body>
// </html>

// var links = document.querySelectorAll('.links a');
// var firstLink = links[0];

// links.forEach((link) => {
//   link.addEventListener('click', (e) => {
//     links.forEach((link) => link.classList.remove('active'));

//     link.classList.add('active');

//     if (link.id !== 'first') {
//       firstLink.classList.remove('homeLink');
//     } else {
//       firstLink.classList.add('homeLink');
//     }
//   });
// });

// document.addEventListener('DOMContentLoaded', function () {
//   const slides = document.querySelectorAll('.slide');
//   const dots = document.querySelectorAll('.dot');
//   let currentSlide = 0;
//   let isAnimating = false;

//   function showSlide(index) {
//     if (isAnimating || index === currentSlide) return;
//     isAnimating = true;

//     const currentActive = slides[currentSlide];
//     const nextSlide = slides[index];

//     // Determine animation direction
//     const direction = index > currentSlide ? 'next' : 'prev';

//     // Set z-index to prevent overlap issues
//     currentActive.style.zIndex = '1';
//     nextSlide.style.zIndex = '2';

//     // Apply appropriate animation class
//     currentActive.classList.add(
//       direction === 'next' ? 'leaving' : 'leaving-reverse'
//     );
//     nextSlide.classList.add(
//       direction === 'next' ? 'entering' : 'entering-reverse'
//     );

//     // Force reflow to trigger animation
//     void nextSlide.offsetWidth;

//     // Activate new slide
//     nextSlide.classList.add('active');

//     // After animation completes
//     setTimeout(() => {
//       currentActive.classList.remove('active', 'leaving', 'leaving-reverse');
//       nextSlide.classList.remove('entering', 'entering-reverse');

//       // Update dots
//       dots.forEach((dot) => dot.classList.remove('active'));
//       dots[index].classList.add('active');

//       // Reset z-index
//       currentActive.style.zIndex = '';
//       nextSlide.style.zIndex = '';

//       // Update currentSlide index
//       currentSlide = index;
//       isAnimating = false; // Allow clicking again
//     }, 800); // Match this with your CSS transition duration
//   }

//   // Dot click event
//   dots.forEach((dot) => {
//     dot.addEventListener('click', function () {
//       const slideIndex = parseInt(this.getAttribute('data-index'));
//       showSlide(slideIndex);
//     });
//   });

//   // Initialize first slide
//   slides[0].classList.add('active');
//   dots[0].classList.add('active');
// });


document.addEventListener('DOMContentLoaded', function () {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  let currentSlide = 0;
  let isAnimating = false;

  function showSlide(index) {
    if (isAnimating || index === currentSlide) return;
    isAnimating = true;

    const currentActive = slides[currentSlide];
    const nextSlide = slides[index];

    // Remove active class from current slide and add appropriate classes
    currentActive.classList.remove('active');
    currentActive.classList.add(index > currentSlide ? 'slide-left' : 'slide-right');
    
    // Prepare next slide
    nextSlide.classList.add('next');
    nextSlide.classList.add(index > currentSlide ? 'slide-from-right' : 'slide-from-left');

    // Update dots
    dots.forEach((dot) => dot.classList.remove('active'));
    dots[index].classList.add('active');

    // Use setTimeout to ensure class changes take effect
    setTimeout(() => {
      nextSlide.classList.remove('next');
      nextSlide.classList.add('active');
      nextSlide.classList.remove('slide-from-right', 'slide-from-left');
    }, 50);

    // Reset slide positions after animation
    setTimeout(() => {
      currentActive.classList.remove('slide-left', 'slide-right');
      isAnimating = false;
      currentSlide = index;
    }, 800);
  }

  // Dot click event
  dots.forEach((dot) => {
    dot.addEventListener('click', function () {
      const slideIndex = parseInt(this.getAttribute('data-index'));
      showSlide(slideIndex);
    });
  });

  // Initialize first slide
  slides[0].classList.add('active');
  dots[0].classList.add('active');
});
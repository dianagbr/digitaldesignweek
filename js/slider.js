// Carousel - Source: https://codepen.io/tepiho4219/pen/OJxXeQP
$(".owl-carousel").owlCarousel({
  loop: true,
  autoWidth: true,
  stagePadding: 0,
  margin: 50,
  dots: false,
  nav: true,
  navText: [
    "<span id='prev'></span>",
    "<span id='next'><img src='./assets/arrow-right.svg' alt='arrow'/></span>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    450: {
      items: 1,
    },
    960: {
      items: 2,
    },
    1200: {
      items: 2,
    },
  },
});

try {
  lightGallery(document.getElementById('lightgallery'))
} catch {}

// Menu - Source: https://codepen.io/tepiho4219/details/zYExWjr?fbclid=IwAR1ScHiW5LE4vnqkd1TWnEpwGjmEKy5ddGzWY2joPPewbj-mjHB-LvKL6sI //

const menuIcon = document.querySelector(".menu");
const overlay = document.querySelector(".overlay-menu");
const links = document.querySelectorAll(".nav-link-mobile");

menuIcon.addEventListener("click", () => {
  overlay.classList.toggle("active");
});

links.forEach(linkItem => {
    linkItem.addEventListener('click', () => {
        overlay.classList.toggle('active');
    })
})

function scrollToTop() {
  window.scrollTo(0, 0);
}

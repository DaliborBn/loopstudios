const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const closeImg = document.querySelector('.close-img');
const closeA = document.querySelector('.close-a');

/* ADD CLASS ACTIVE */
hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
})
/* REMOVE CLASS ACTIVE with X */
closeImg.addEventListener('click', () => {
  navMenu.classList.remove('active');
})
/* REMOVE CLASS ACTIVE with Loopstudios */
closeA.addEventListener('click', () => {
  navMenu.classList.remove('active');
})
/* REMOVE CLASS ACTIVE with NAVBAR LINKS */
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener ('click', () => {
  navMenu.classList.remove('active');
}));




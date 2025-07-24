const hamburger = document.createElement('div');
hamburger.classList.add('hamburger');
hamburger.innerHTML = `<span></span><span></span><span></span>`;
document.body.appendChild(hamburger);

const nav = document.querySelector('.nav');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  nav.classList.toggle('active');
});

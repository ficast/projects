const element = document.getElementsByClassName('article');

for (let i = 0; i < element.length; i += 1) {
  element[i].addEventListener('click', function () {
    element[i].classList.toggle('article-animation');
    this.style.animationPlayState = 'running';
  });
}

for (let i = 0; i < element.length; i += 1) {
  element[i].addEventListener('mouseout', function () {
    element[i].classList.remove('article-animation');
  });
}

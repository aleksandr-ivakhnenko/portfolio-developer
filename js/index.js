const itemProjectLinks = document.querySelectorAll('.item-project__link');
const projectsButton = document.querySelector('.projects__btn');

itemProjectLinks[2].addEventListener('click', function(e) {
    e.preventDefault()
});

projectsButton.addEventListener('click', function(e) {
    e.preventDefault()
});
// Toggle mobile navigation menu
const navIcon = document.querySelector('.nav-icon');
const mobileNavbar = document.querySelector('.mobile-navbar .menu');
const closeBtn = document.querySelector('.menu .close');

navIcon.addEventListener('click', () => {
    mobileNavbar.classList.toggle('closed');
});

closeBtn.addEventListener('click', () => {
    mobileNavbar.classList.add('closed');
});

// Toggle show more/less in the projects section
const showMoreBtn = document.querySelector('.show-link');
const showLessBtn = document.querySelector('.toggle');
const hiddenProjects = document.querySelectorAll('.proj-contain:nth-child(n+4)');

showMoreBtn.addEventListener('click', () => {
    hiddenProjects.forEach(project => {
        project.style.display = 'block'; // Show hidden projects
    });
    showMoreBtn.style.display = 'none'; // Hide "show more"
    showLessBtn.style.display = 'inline-block'; // Show "show less"
});

showLessBtn.addEventListener('click', () => {
    hiddenProjects.forEach(project => {
        project.style.display = 'none'; // Hide extra projects
    });
    showMoreBtn.style.display = 'inline-block'; // Show "show more"
    showLessBtn.style.display = 'none'; // Hide "show less"
});

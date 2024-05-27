const scrollToSection2 = document.getElementById('scrollToSection2');
const section2 = document.getElementById('section2');
const scrollToSection3 = document.getElementById('scrollToSection3');
const section3 = document.getElementById('section3');
const ghLink = document.getElementById('ghLink');

ghLink.addEventListener('click', () => {
    window.open('https://github.com/joseph-m-williams');
});
scrollToSection2.addEventListener('click', () => {
    section2.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});

scrollToSection3.addEventListener('click', () => {
    section3.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});
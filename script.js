// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener('click', function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }

    });

});


// Contact form
const form = document.querySelector('.contact-form');

if (form) {

    form.addEventListener('submit', function(e) {

        e.preventDefault();

        alert("Thank you for contacting me! 💗");

        form.reset();

    });

}
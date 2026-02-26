// Shupreme Shiv Dental Clinic

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.getElementById('nav');

    // Create overlay for closing menu on outside tap
    const overlay = document.createElement('div');
    overlay.className = 'nav-overlay';
    document.body.appendChild(overlay);

    function openMenu() {
        nav.classList.add('active');
        menuToggle.classList.add('active');
        overlay.classList.add('active');
        document.body.classList.add('menu-open');
    }

    function closeMenu() {
        nav.classList.remove('active');
        menuToggle.classList.remove('active');
        overlay.classList.remove('active');
        document.body.classList.remove('menu-open');
    }

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function() {
            if (nav.classList.contains('active')) {
                closeMenu();
            } else {
                openMenu();
            }
        });

        // Close menu when clicking a link
        nav.querySelectorAll('a').forEach(function(link) {
            link.addEventListener('click', closeMenu);
        });

        // Close menu when tapping overlay
        overlay.addEventListener('click', closeMenu);

        // Close menu on Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && nav.classList.contains('active')) {
                closeMenu();
            }
        });
    }

    // Close menu on resize to desktop
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && nav.classList.contains('active')) {
            closeMenu();
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            var href = this.getAttribute('href');
            if (href === '#') return;

            var target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                var headerHeight = document.querySelector('.header').offsetHeight;
                var targetPosition = target.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form handling
    var form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            var name = form.querySelector('#name').value.trim();
            var phone = form.querySelector('#phone').value.trim();

            if (!name || !phone) {
                alert('Please fill in your name and phone number.');
                return;
            }

            // Show confirmation
            alert('Thank you! We will call you back shortly to confirm your appointment.');
            form.reset();
        });
    }
});

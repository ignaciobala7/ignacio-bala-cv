document.addEventListener('DOMContentLoaded', () => {
    // 1. Fake Tracker Toast (Factor WOW)
    setTimeout(() => {
        const toast = document.getElementById('toast');
        if (toast) {
            toast.classList.add('show');
            
            // Hide it after 4 seconds
            setTimeout(() => {
                toast.classList.remove('show');
            }, 4000);
        }
    }, 2500); // Show 2.5 seconds after loading

    // 2. Intersection Observer for Scroll Animations
    const observerOptions = {
        root: document.querySelector('.scroll-container'),
        rootMargin: '0px',
        threshold: 0.3 // Trigger when 30% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add 'visible' class to trigger CSS transition
                entry.target.classList.add('visible');
                // Optional: stop observing once it's visible (uncomment below if you only want it to animate once)
                // observer.unobserve(entry.target); 
            } else {
                // Remove 'visible' class so it animates again when scrolling back
                entry.target.classList.remove('visible');
            }
        });
    }, observerOptions);

    // Elements to animate
    const animatedElements = document.querySelectorAll('.fade-up, .fade-right, .fade-left');
    animatedElements.forEach(el => observer.observe(el));
});

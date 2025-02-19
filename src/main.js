import '../styles/modern-normalize.css';
import '../styles/style.css';
import '../styles/components/header.css';
import '../styles/components/hero.css';
import '../styles/components/about.css';
import '../styles/components/featured.css';
import '../styles/components/work.css';
import '../styles/components/contact.css';
import '../styles/components/footer.css';
import '../styles/components/mobile-nav.css';
import '../styles/utils.css';

import mobileNav from './utils/mobile-nav';
import darkMode from './utils/dark-mode';
import lazyLoading from './utils/lazy-loading';


// Back to top button functionality
const backToTopButton = () => {
    const btnBackToTop = document.querySelector('.back-to-top-btn');

    if (!btnBackToTop) { // Check if the button exists on the page
        return;
    }

    const rootElement = document.documentElement;
    const scrollThreshold = 300; // Distance in pixels to scroll before showing button

    const handleScroll = () => {
        const scrollY = rootElement.scrollTop;
        if (scrollY > scrollThreshold) {
            btnBackToTop.classList.add('back-to-top-btn--visible');
        } else {
            btnBackToTop.classList.remove('back-to-top-btn--visible');
        }
    };

    const scrollToTop = () => {
        rootElement.scrollTo({
            top: 0,
            behavior: 'smooth' // Smooth scroll animation
        });
    };

    window.addEventListener('scroll', handleScroll);
    btnBackToTop.addEventListener('click', scrollToTop);
};

// Call the backToTopButton function after other initializations
mobileNav();
darkMode();
lazyLoading();
backToTopButton(); // Initialize back to top button functionality
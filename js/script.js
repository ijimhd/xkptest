document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navList = document.getElementById('nav-list');
    const navLinks = document.querySelectorAll('.nav-link');

    const toggleMenu = () => {
        const isOpening = !navList.classList.contains('active');
        navList.classList.toggle('active');
        menuToggle.classList.toggle('open');
        document.body.style.overflow = isOpening ? 'hidden' : 'auto';
    };

    if (menuToggle) {
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleMenu();
        });
    }

    // UPDATED logic for closing the menu
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Check if this link is a dropdown toggle
            const isDropdownToggle = link.parentElement.classList.contains('dropdown-container');

            if (isDropdownToggle) {
                // If it's a dropdown, we DON'T want to close the main menu.
                // We also might want to prevent the '#' link from jumping the page.
                e.preventDefault(); 
                
                // Optional: Toggle a class to show/hide dropdown on click for mobile
                link.parentElement.classList.toggle('is-active');
            } else {
                // If it's a normal link, close the menu
                if (navList.classList.contains('active')) {
                    toggleMenu();
                }
            }
        });
    });

    document.addEventListener('click', (event) => {
        const isClickInside = navList.contains(event.target) || menuToggle.contains(event.target);
        if (!isClickInside && navList.classList.contains('active')) {
            toggleMenu();
        }
    });
});
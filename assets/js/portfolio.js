(function () {
    // Filter functionality
    const filterLinks = document.querySelectorAll('.filter-link');
    const projectCards = document.querySelectorAll('.project-card');

    filterLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            
            // Remove active class from all filter links
            filterLinks.forEach(function (l) {
                l.classList.remove('active');
            });
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Get filter type
            const filter = this.getAttribute('data-filter');
            
            // Filter projects
            projectCards.forEach(function (card) {
                if (filter === 'all') {
                    card.style.display = 'flex';
                    setTimeout(function () {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 10);
                } else {
                    const status = card.getAttribute('data-status');
                    const categories = card.getAttribute('data-category');
                    
                    if (status === filter || (categories && categories.includes(filter))) {
                        card.style.display = 'flex';
                        setTimeout(function () {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, 10);
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'translateY(20px)';
                        setTimeout(function () {
                            card.style.display = 'none';
                        }, 300);
                    }
                }
            });
        });
    });

    // Animate project cards on load
    projectCards.forEach(function (card, index) {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(function () {
            card.style.transition = 'all 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });

    // Animate summary cards
    const summaryCards = document.querySelectorAll('.summary-card');
    summaryCards.forEach(function (card, index) {
        card.style.opacity = '0';
        card.style.transform = 'scale(0.9)';
        
        setTimeout(function () {
            card.style.transition = 'all 0.4s ease';
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
        }, 400 + index * 100);
    });
})();


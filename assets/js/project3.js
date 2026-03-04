// Project 3: E-Learning Platform - Interactive Elements
(function () {
    // Animate progress bars on scroll
    function animateProgressBars() {
        const progressBars = document.querySelectorAll('.progress-fill');
        
        progressBars.forEach(function (bar) {
            const rect = bar.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
            
            if (isVisible && !bar.classList.contains('animated')) {
                bar.classList.add('animated');
                const targetWidth = bar.style.width;
                bar.style.width = '0%';
                
                setTimeout(function () {
                    bar.style.width = targetWidth;
                }, 100);
            }
        });
    }

    // Sidebar interaction
    const sidebarItems = document.querySelectorAll('.sidebar-item');
    sidebarItems.forEach(function (item) {
        item.addEventListener('click', function () {
            sidebarItems.forEach(function (i) {
                i.classList.remove('active');
            });
            this.classList.add('active');
        });
    });

    // Course card hover effect
    const courseCards = document.querySelectorAll('.course-card-mock');
    courseCards.forEach(function (card) {
        card.addEventListener('mouseenter', function () {
            const thumb = this.querySelector('.course-thumb');
            if (thumb) {
                thumb.style.transform = 'scale(1.1) rotate(5deg)';
            }
        });

        card.addEventListener('mouseleave', function () {
            const thumb = this.querySelector('.course-thumb');
            if (thumb) {
                thumb.style.transform = 'scale(1) rotate(0deg)';
            }
        });
    });

    // Timeline animation on scroll
    function animateTimeline() {
        const timelineItems = document.querySelectorAll('.timeline-item');
        
        timelineItems.forEach(function (item, index) {
            const rect = item.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight - 100;
            
            if (isVisible && !item.classList.contains('visible')) {
                item.classList.add('visible');
                item.style.opacity = '0';
                item.style.transform = 'translateY(20px)';
                
                setTimeout(function () {
                    item.style.transition = 'all 0.5s ease';
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }

    // Module card interactions
    const moduleCards = document.querySelectorAll('.module-card');
    moduleCards.forEach(function (card, index) {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(function () {
            card.style.transition = 'all 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });

    // Scroll event listener
    window.addEventListener('scroll', function () {
        animateProgressBars();
        animateTimeline();
    });

    // Initial check
    animateProgressBars();
    animateTimeline();

    // Add smooth transition to course thumb
    const courseThumbs = document.querySelectorAll('.course-thumb');
    courseThumbs.forEach(function (thumb) {
        thumb.style.transition = 'transform 0.3s ease';
    });
})();

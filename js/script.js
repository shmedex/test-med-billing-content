function animateCounters() {
    const projectCounter = document.getElementById('projectCount');
    const clientCounter = document.getElementById('clientCount');
    const teamCounter = document.getElementById('teamCount');

    const targetProjects = 250;
    const targetClients = 150;
    const targetTeam = 30;

    let projectCount = 0;
    let clientCount = 0;
    let teamCount = 0;

    const projectInterval = setInterval(() => {
        projectCount += 5;
        if (projectCount >= targetProjects) {
            projectCount = targetProjects;
            clearInterval(projectInterval);
        }
        projectCounter.textContent = projectCount + '+';
    }, 20);

    const clientInterval = setInterval(() => {
        clientCount += 3;
        if (clientCount >= targetClients) {
            clientCount = targetClients;
            clearInterval(clientInterval);
        }
        clientCounter.textContent = clientCount + '+';
    }, 20);

    const teamInterval = setInterval(() => {
        teamCount += 1;
        if (teamCount >= targetTeam) {
            teamCount = targetTeam;
            clearInterval(teamInterval);
        }
        teamCounter.textContent = teamCount;
    }, 50);
}

// Run counter animation when .stats section is visible
const statsSection = document.querySelector('.stats');
if (statsSection) {
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    observer.observe(statsSection);
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            navbar.style.padding = '10px 0';
        } else {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            navbar.style.padding = '15px 0';
        }
    }
});

// View more button
const viewMoreBtn = document.querySelector('.view-more-btn');
if (viewMoreBtn) {
    viewMoreBtn.addEventListener('click', () => {
        alert('Viewing more services!');
        // Or redirect: window.location.href = 'services.html';
    });
}

// Carousel animation
document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.getElementById('testimonialCarousel');
    if (carousel) {
        carousel.addEventListener('slide.bs.carousel', function (e) {
            const nextItem = e.relatedTarget;
            const items = nextItem.querySelectorAll('.testimonial-img, .testimonial-content');

            items.forEach(item => {
                item.style.opacity = '0';
                item.style.transform = 'translateY(20px)';
            });

            setTimeout(() => {
                items.forEach((item, index) => {
                    setTimeout(() => {
                        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, index * 150);
                });
            }, 50);
        });

        const firstSlide = document.querySelector('.carousel-item.active');
        if (firstSlide) {
            firstSlide.querySelectorAll('.testimonial-img, .testimonial-content').forEach(item => {
                item.style.opacity = '1';
            });
        }
    }
});


// Back to top button
const backToTopBtn = document.getElementById('backToTopBtn');
if (backToTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('active');
        } else {
            backToTopBtn.classList.remove('active');
        }
    });

    backToTopBtn.addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

 // Search functionality blog page
    document.addEventListener('DOMContentLoaded', function() {
        const searchInput = document.querySelector('.sidebar-widget input[type="text"]');
        const searchButton = document.querySelector('.sidebar-widget button');
        const blogCards = document.querySelectorAll('.blog-card');
        const noResultsMessage = document.createElement('div');
        noResultsMessage.className = 'col-12 text-center py-5 no-results-message';
        noResultsMessage.style.display = 'none';
        noResultsMessage.innerHTML = '<h4>No articles found matching your search</h4><p>Try different keywords</p>';
        document.querySelector('.row').prepend(noResultsMessage);

        function performSearch() {
            const query = searchInput.value.toLowerCase();
            let hasResults = false;
            
            blogCards.forEach(card => {
                const title = card.querySelector('.blog-title').textContent.toLowerCase();
                const excerpt = card.querySelector('.blog-excerpt').textContent.toLowerCase();
                const category = card.querySelector('.blog-category').textContent.toLowerCase();
                
                if (title.includes(query) || excerpt.includes(query) || category.includes(query)) {
                    card.parentElement.style.display = 'block';
                    hasResults = true;
                } else {
                    card.parentElement.style.display = 'none';
                }
            });
            
            noResultsMessage.style.display = hasResults ? 'none' : 'block';
        }

        // Search on button click
        searchButton.addEventListener('click', performSearch);
        
        // Search on Enter key
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    });

    

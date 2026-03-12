 alert("welcome")

           // Smooth scrolling to culture sections
        function scrollToCulture(cultureId) {
            const element = document.getElementById(cultureId);
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
            element.style.animation = 'pulse 1s ease';
            setTimeout(() => {
                element.style.animation = '';
            }, 1000);
        }

        // Explore cultures animation
        function exploreCultures() {
            const cards = document.querySelectorAll('.culture-card');
            cards.forEach((card, index) => {
                setTimeout(() => {
                    card.style.animation = 'bounce 0.6s ease';
                }, index * 100);
            });
        }

        // Show culture details (placeholder function)
        function showCultureDetails(culture) {
            alert(`Exploring ${culture} culture in detail! This would open a detailed page with videos, images, and interactive content.`);
        }

        // Sign in functionality
        function showSignIn() {
            alert('Sign In / Sign Up modal would appear here with options for Google, Facebook, or email login.');
        }

        // Feature functions
        function openGameZone() {
            alert('Game Zone: Play traditional Indian games like Pachisi, Chess (Chaturanga), and more!');
        }

        function openQuiz() {
            alert('Cultural Quiz: Test your knowledge about Indian heritage, festivals, and traditions!');
        }

        function openAR() {
            alert('AR Experience: Use your camera to explore 3D models of monuments and artifacts!');
        }

        function openShop() {
            alert('Cultural Shop: Buy authentic handicrafts, traditional clothing, and cultural souvenirs!');
        }

        // Rating system
        function rate(stars) {
            const starElements = document.querySelectorAll('.star');
            starElements.forEach((star, index) => {
                if (index < stars) {
                    star.style.color = '#ffd700';
                    star.style.transform = 'scale(1.2)';
                } else {
                    star.style.color = '#666';
                    star.style.transform = 'scale(1)';
                }
            });
            setTimeout(() => {
                alert(`Thank you for rating us ${stars} star${stars > 1 ? 's' : ''}!`);
            }, 300);
        }

        // Add pulse animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes pulse {
                0% { transform: scale(1); }
                50% { transform: scale(1.05); }
                100% { transform: scale(1); }
            }
            @keyframes bounce {
                0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
                40% { transform: translateY(-20px); }
                60% { transform: translateY(-10px); }
            }
        `;
        document.head.appendChild(style);

        // Add parallax effect on scroll
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallax = document.querySelector('.cultural-bg');
            parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
        });

        // Add loading animation
        window.addEventListener('load', () => {
            const cards = document.querySelectorAll('.culture-card');
            cards.forEach((card, index) => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(50px)';
                setTimeout(() => {
                    card.style.transition = 'all 0.6s ease';
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, index * 100);
            });
        });
        
    


document.getElementById('hamburger').addEventListener('click', function() {
    this.classList.toggle('open');
    const dropdown = document.getElementById('dropdown');
    dropdown.classList.toggle('active');
});



  // Page Transitions
        function slideUp() {
            var transitionslideup = document.getElementById('transitionslideup');
            transitionslideup.classList.add('active');
            setTimeout(function() {
                window.location.href = 'aut.html';
            }, 800);
        }

        function slideUptwo() {
            var transitionslideuptwo = document.getElementById('transitionslideup_two');
            transitionslideuptwo.classList.add('active');
            setTimeout(function() {
                window.location.href = 'aut.html';
            }, 800);
        }

        function slideUpthree() {
            var transitionslideupthree = document.getElementById('transitionslideup_three');
            transitionslideupthree.classList.add('active');
            setTimeout(function() {
                window.location.href = 'aut.html';
            }, 800);
        }

        function slideUpfour() {
            var transitionslideupfour = document.getElementById('transitionslideup_four');
            transitionslideupfour.classList.add('active');
            setTimeout(function() {
                window.location.href = 'aut.html';
            }, 800);
        }



// page transition for the logo-name
  function handleTransitionlogo(event) {
            event.preventDefault(); // Prevent immediate navigation
            
            const transition = document.querySelector('.page-transition');
            const link = event.currentTarget.getAttribute('href');
            
            // Trigger the transition
            transition.classList.add('active');
            
            // Wait for transition to complete before navigating
            setTimeout(() => {
                window.location.href = link;
            }, 600); // Match this with your CSS transition duration
        }




// page transition for x-animated button
  function handleTransition(event) {
            const xButton = document.querySelector('.x-button');
            const transitionContainer = document.querySelector('.transition-container');
            
            // Animate the X button
            xButton.classList.add('active');
            
            // Enable pointer events during transition
            transitionContainer.style.pointerEvents = 'auto';
            
            // Trigger the transition
            transitionContainer.classList.add('active');
            
            // Wait for transition to complete before navigating
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 800);
        }

        // Add hover effect that follows mouse position
        document.querySelector('.x-button').addEventListener('mousemove', (e) => {
            const xButton = e.currentTarget;
            const rect = xButton.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            // Calculate rotation based on mouse position
            const multiplier = 10; // Adjust this value to control the rotation intensity
            const rotateX = -y / rect.height * multiplier;
            const rotateY = x / rect.width * multiplier;
            
            xButton.style.transform = `perspective(300px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        // Reset transform on mouse leave
        document.querySelector('.x-button').addEventListener('mouseleave', (e) => {
            e.currentTarget.style.transform = 'perspective(300px) rotateX(0) rotateY(0)';
        });





// image slider, info problem statement
 const infoButton = document.querySelector('.info-button-compartment');
        const techSlideshow = document.querySelector('.tech-slideshow');
        const infoContainer = document.querySelector('.info-container');
        // const closeButtonTopLeft = document.querySelector('.close-button-top-left');
        // const pageTransition = document.querySelector('.page-transition');

        // Info button functionality
        infoButton.addEventListener('click', function() {
            const isActive = infoContainer.classList.contains('active');

            if (isActive) {
                infoContainer.style.opacity = '0';
                setTimeout(() => {
                    infoContainer.classList.remove('active');
                    infoContainer.style.height = '0';
                    techSlideshow.classList.remove('shrunk');
                }, 500);
            } else {
                infoContainer.classList.add('active');
                infoContainer.style.height = 'auto';
                setTimeout(() => {
                    infoContainer.style.opacity = '1';
                }, 10);

                techSlideshow.classList.add('shrunk');
            }
        });

     
// Select the project elements//project-button-comp and project details
const projectButton = document.querySelector('.project-button-compartment');
const projectDetails = document.querySelector('.project-details');

// Project button toggle functionality
projectButton.addEventListener('click', function() {
    const isActive = projectDetails.classList.contains('active');

    if (isActive) {
        // Hide the project details
        projectDetails.style.opacity = '0';
        setTimeout(() => {
            projectDetails.classList.remove('active');
            projectDetails.style.height = '0';
        }, 500); // Match this timing with your CSS transition
    } else {
        // Show the project details
        projectDetails.classList.add('active');
        projectDetails.style.height = 'auto';
        const height = projectDetails.scrollHeight + 'px';
        projectDetails.style.height = '0';
        
        // Trigger reflow
        projectDetails.offsetHeight;
        
        projectDetails.style.height = height;
        setTimeout(() => {
            projectDetails.style.opacity = '1';
        }, 10);
    }
});





// $('.collapse').collapse()

// document.addEventListener('DOMContentLoaded', function() {
//     const mover = document.querySelector('.mover');
//     // Clone all images and append them to ensure smooth infinite scroll
//     const images = mover.querySelectorAll('img');
//     images.forEach(img => {
//         const clone = img.cloneNode(true);
//         mover.appendChild(clone);
//     });
// });


document.addEventListener('DOMContentLoaded', function() {
    const mover = document.querySelector('.mover');
    const images = Array.from(mover.querySelectorAll('img'));
    
    // Function to handle image loading
    function handleImageLoad(img) {
        return new Promise((resolve) => {
            if (img.complete) {
                resolve();
            } else {
                img.onload = () => resolve();
                img.onerror = () => {
                    // If image fails to load, set a minimum width to maintain spacing
                    img.style.minWidth = '200px';
                    resolve();
                };
            }
        });
    }

    // Function to clone and append images
    function cloneImages() {
        // Clone each image twice to ensure smooth infinite scroll
        for (let i = 0; i < 2; i++) {
            images.forEach(img => {
                const clone = img.cloneNode(true);
                // Ensure proper loading of cloned images
                handleImageLoad(clone).then(() => {
                    mover.appendChild(clone);
                });
            });
        }
    }

    // Load all original images first
    Promise.all(images.map(img => handleImageLoad(img)))
        .then(() => {
            cloneImages();
        });

    // Reset animation when it completes
    mover.addEventListener('animationend', () => {
        requestAnimationFrame(() => {
            mover.style.animation = 'none';
            mover.offsetHeight; // Trigger reflow
            mover.style.animation = 'moveSlideshow 30s linear infinite';
        });
    });

    // Detect if running on mobile device
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    if (isMobile) {
        // Optimize for mobile performance
        mover.style.webkitBackfaceVisibility = 'hidden';
        mover.style.backfaceVisibility = 'hidden';
        
        // Adjust animation duration for mobile
        mover.style.animation = 'moveSlideshow 40s linear infinite';
    }
});



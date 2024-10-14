
document.getElementById('hamburger').addEventListener('click', function() {
    this.classList.toggle('open');
    const dropdown = document.getElementById('dropdown');
    dropdown.classList.toggle('active');
});




   // Toggle info for the original compartment chair section
        const infoButtons = document.querySelectorAll('.info-button');
        const closeButton = document.querySelector('.close-button');
        const images = document.querySelectorAll('.chair-image');
        const infoContainers = document.querySelectorAll('.info-container');

        infoButtons.forEach((button, index) => {
            button.addEventListener('click', function() {
                images[index]?.classList.toggle('shrink'); // Shrink image for the corresponding section
                infoContainers[index].classList.toggle('active'); // Toggle the dropdown
            });
        });

        closeButton.addEventListener('click', function() {
            images.forEach(image => image.classList.remove('shrink')); // Remove shrink from all images
            infoContainers.forEach(container => container.classList.remove('active')); // Remove active from all containers
        });






          // Apply slide-up effect to all links
        document.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function (e) {
                e.preventDefault(); // Prevent immediate navigation
                const targetUrl = this.getAttribute('href'); // Get the URL to navigate to

                // Activate the slide-up container
                const slideUpContainer = document.getElementById('slide-up-container');
                slideUpContainer.classList.add('active');

                // Wait for the slide-up effect to finish before navigating
                setTimeout(function () {
                    window.location.href = targetUrl;
                }, 600); // Delay to match the CSS transition duration (0.6s)
            });
        });











        
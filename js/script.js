
document.getElementById('hamburger').addEventListener('click', function() {
    this.classList.toggle('open');
    const dropdown = document.getElementById('dropdown');
    dropdown.classList.toggle('active');
});




  

// --------add timing to the js
        // Toggle info for the original compartment chair section
const infoButtons = document.querySelectorAll('.info-button');
const closeButton = document.querySelector('.close-button');
const images = document.querySelectorAll('.chair-image');
const infoContainers = document.querySelectorAll('.info-container');

infoButtons.forEach((button, index) => {
    button.addEventListener('click', function() {
        images[index]?.classList.toggle('shrink'); // Shrink image for the corresponding section
        const infoContainer = infoContainers[index];

        if (infoContainer.classList.contains('active')) {
            infoContainer.style.opacity = '0'; // Start fade out
            setTimeout(() => {
                infoContainer.classList.remove('active'); // Remove active class after fade out
            }, 700); // Match with CSS transition duration
        } else {
            infoContainer.classList.add('active'); // Add active class to show
            infoContainer.style.display = 'block'; // Show the container
            setTimeout(() => {
                infoContainer.style.opacity = '1'; // Fade in after displaying
            }, 10); // Slight delay to ensure the display change takes effect
        }
    });
});

closeButton.addEventListener('click', function() {
    images.forEach(image => image.classList.remove('shrink')); // Remove shrink from all images
    infoContainers.forEach(container => {
        container.style.opacity = '0'; // Start fade out
        setTimeout(() => {
            container.classList.remove('active'); // Remove active after fade out
        }, 700); // Match with CSS transition duration
    });
});


// 



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



// document.getElementById('slide-up-container').classList.add('active');


function slideUp() {
    var blackslideup = document.getElementById('blackslideup');
    
    // Add the 'active' class to trigger the slide-up animation
    blackslideup.classList.add('active');

    // After the slide-up animation is complete (800ms), redirect to the next page
    setTimeout(function() {
        window.location.href = 'aut.html'; // Redirect to the next page after animation
    }, 800); // Time in milliseconds matches the CSS transition duration
}





function slideUptwo() {
    var blackslideuptwo = document.getElementById('blackslideup_two');
    
    // Add the 'active' class to trigger the slide-up animation
    blackslideuptwo.classList.add('active');

    // After the slide-up animation is complete (800ms), redirect to the next page
    setTimeout(function() {
        window.location.href = 'closeproduct.html'; // Redirect to the next page after animation
    }, 800); // Time in milliseconds matches the CSS transition duration
}



function slideUpthree() {
    var blackslideupthree = document.getElementById('blackslideup_three');
    
    // Add the 'active' class to trigger the slide-up animation
    blackslideupthree.classList.add('active');

    // After the slide-up animation is complete (800ms), redirect to the next page
    setTimeout(function() {
        window.location.href = 'aut.html'; // Redirect to the next page after animation
    }, 800); // Time in milliseconds matches the CSS transition duration
}




function slideUpfour() {
    var blackslideupfour = document.getElementById('blackslideup_four');
    
    // Add the 'active' class to trigger the slide-up animation
    blackslideupfour.classList.add('active');

    // After the slide-up animation is complete (800ms), redirect to the next page
    setTimeout(function() {
        window.location.href = 'aut.html'; // Redirect to the next page after animation
    }, 800); // Time in milliseconds matches the CSS transition duration
}




// function toggleInfo() {
//     const infoContainer = document.querySelector('.new-info-container');
//     infoContainer.classList.toggle('active');

//     // Adjust display style for dropdown effect
//     if (infoContainer.classList.contains('active')) {
//         infoContainer.style.display = 'block'; // Show the container
//     } else {
//         setTimeout(() => {
//             infoContainer.style.display = 'none'; // Hide it after the slide-up effect
//         }, 500); // Match this duration with your CSS transition
//     }
// }


// testing dropdown
function toggleDropdown() {
    const dropdownContent = document.querySelector('.dropdown-content');
    const isActive = dropdownContent.classList.toggle('active');

    if (isActive) {
        dropdownContent.style.display = 'block'; // Show the container
        setTimeout(() => {
            dropdownContent.style.opacity = '1'; // Fade in
        }, 10); // Slight delay to trigger the CSS transition
    } else {
        dropdownContent.style.opacity = '0'; // Fade out
        setTimeout(() => {
            dropdownContent.style.display = 'none'; // Hide it after the transition
        }, 700); // Match this duration with your CSS transition for a slower effect
    }
}




// jquery- always put your jquery source first above any other js
// slidable container testing
$(document).ready(function() {
    var isOpen = false; // State variable to track open/close

    $('.slide-button').on('click', function() {
        var description = $('.description-container');

        if (!isOpen) {
            description.slideDown('slow', function() {
                description.addClass('active'); // Add active class after sliding down
            });
            isOpen = true;
        } else {
            description.removeClass('active'); // Remove active class before sliding up
            description.slideUp('slow');
            isOpen = false;
        }
    });
});






// info-toggle testing
$(document).ready(function() {
    var isOpen = false; // State variable to track open/close

    $('.info-toggle-button').on('click', function() {
        var description = $('.info-description-container');

        if (!isOpen) {
            description.css('display', 'block'); // Show the container first
            setTimeout(function() {
                description.addClass('active'); // Add active class for transition
            }, 10); // Delay to allow display to take effect
            isOpen = true;
        } else {
            description.removeClass('active'); // Remove active class to start slide-up
            setTimeout(function() {
                description.css('display', 'none'); // Hide after slide-up completes
            }, 500); // Match this duration with the CSS transition
            isOpen = false;
        }
    });
});




// info section container testing - i prefer this one with the slideup effect
$(document).ready(function() {
    var isOpen = false; // State variable to track open/close

    $('.info-toggle-btn').on('click', function() {
        var content = $('.info-content');
        var titleSection = $('.title-section');

        if (!isOpen) {
            content.css('display', 'block'); // Show the content first
            setTimeout(function() {
                content.addClass('active'); // Add active class for transition
                titleSection.css('max-height', '50px'); // Shrink the title section
            }, 10); // Delay to allow display to take effect
            isOpen = true;
        } else {
            content.removeClass('active'); // Remove active class to start slide-up
            setTimeout(function() {
                content.css('display', 'none'); // Hide after slide-up completes
                titleSection.css('max-height', '100px'); // Restore the title section height
            }, 500); // Match this duration with the CSS transition
            isOpen = false;
        }
    });
});

   

        
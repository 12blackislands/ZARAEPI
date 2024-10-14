




document.getElementById('hamburger').addEventListener('click', function() {
    this.classList.toggle('open');
    const dropdown = document.getElementById('dropdown');
    dropdown.classList.toggle('active');
});





// Toggling the main project info
document.getElementById("projectTitle").addEventListener("click", function () {
  var projectContainer = document.getElementById("project");
  var projectTitle = document.getElementById("projectTitle");
  var projectInfo = document.getElementById("projectInfo");

  // Check if the project info is currently hidden or displayed
  if (projectContainer.classList.contains("open")) {
    // Close the info and reset the title
    projectContainer.classList.remove("open");
    projectContainer.classList.remove("shrink");
    projectTitle.classList.remove("slide-up-title");
    projectInfo.classList.remove("open"); // Change this line
    projectInfo.style.display = "none"; // Hide content explicitly
  } else {
    // Slide the info up and shrink the image
    projectContainer.classList.add("open");
    projectContainer.classList.add("shrink");
    projectTitle.classList.add("slide-up-title");
    projectInfo.classList.add("open"); // Change this line
    projectInfo.style.display = "block"; // Show content explicitly
  }
});

// Close button functionality
document.getElementById("closeBtn").addEventListener("click", function () {
  var projectContainer = document.getElementById("project");
  var projectTitle = document.getElementById("projectTitle");
  var projectInfo = document.getElementById("projectInfo");

  // Reset all states when 'X' is clicked
  projectContainer.classList.remove("open", "shrink");
  projectTitle.classList.remove("slide-up-title");
  projectInfo.classList.remove("open"); // Change this line
  projectInfo.style.display = "none"; // Hide content explicitly
});






// Create the slide-up container
const slideUpContainer = document.createElement('div');
slideUpContainer.id = 'slide-up-container';
document.body.appendChild(slideUpContainer); // Append the container to the body

// Apply slide-up effect to all links
document.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent immediate navigation
        const targetUrl = this.getAttribute('href'); // Get the URL to navigate to

        // Activate the slide-up container
        slideUpContainer.classList.add('active');

        // Wait for the slide-up effect to finish before navigating
        setTimeout(function () {
            window.location.href = targetUrl;
        }, 600); // Delay to match the CSS transition duration (0.6s)
    });
});





chrome.tabs.create({
  url: "https://formswift.com/sem/edit-pdf",
  active: true,
});





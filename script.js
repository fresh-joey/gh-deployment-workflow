// Function to handle booking packages
function bookNow(packageName) {
    alert(`You have chosen the ${packageName} package. Our team will contact you shortly!`);
  }
  
  // Handle contact form submissions
  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for contacting Asia Explorer. We will get back to you soon!');
    // Optionally reset the form after submission:
    event.target.reset();
  });
  
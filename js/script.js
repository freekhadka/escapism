

// Additional animations for the video section
gsap.from(".video-section", {
    duration: 1,
    opacity: 0,
    y: 30,
    ease: "power2.out",
    delay: 2
});

// Animation for text section
gsap.from(".text-section", {
    duration: 1,
    opacity: 0,
    y: 30,
    ease: "power2.out",
    delay: 2.5
});


 // GSAP animation for the "ESCAPISM" title
 gsap.to("#escapismTitle", {
    opacity: 0, 
    duration: 2, 
    repeat: -1, 
    yoyo: true, 
    ease: "power2.inOut"
});

// Function to generate random positions
function getRandomPosition() {
    // Get random positions within a limited area, so the text stays visible
    const x = Math.random() * (window.innerWidth - 200); // Subtract 200 to leave space for the text
    const y = Math.random() * (window.innerHeight - 100); // Subtract 100 to avoid the text going off screen vertically
    return { x, y };
}


// Function to animate random text elements
function animateRandomText(id) {
    const randomText = document.getElementById(id);
    const position = getRandomPosition();

    gsap.fromTo(randomText, 
        {
            opacity: 0,
            x: position.x,
            y: position.y
        }, 
        {
            opacity: 1,
            duration: Math.random() * 2 + 2, // Random duration between 2-4 seconds
            repeat: -1, // Repeat indefinitely
            yoyo: true,
            delay: Math.random() * 5, // Random delay before it starts
            ease: "power2.inOut"
        }
    );
}

// Animate all random texts
animateRandomText("randomText1");
animateRandomText("randomText2");
animateRandomText("randomText3");
animateRandomText("randomText4");
animateRandomText("randomText5");

 // GSAP animation for the "ESCAPISM" title
 gsap.to("#escapismTitle", {
    opacity: 0, 
    duration: 2, 
    repeat: -1, 
    yoyo: true, 
    ease: "power2.inOut"
});

// Show the popup when clicking on ESCAPISM link
document.getElementById('escapismLink').addEventListener('click', function() {
    document.getElementById('blurredBackground').style.display = 'block';
    document.getElementById('confirmationPopup').style.display = 'block';
});

// If user clicks "Yes", download the PDF
document.getElementById('yesButton').addEventListener('click', function() {
    window.location.href = './pdf/escapism_manifesto.pdf'; // Replace with the actual PDF path
    closePopup();
});

// If user clicks "No", close the popup
document.getElementById('noButton').addEventListener('click', function() {
    closePopup();
});

// Function to close the popup and hide the blurred background
function closePopup() {
    document.getElementById('blurredBackground').style.display = 'none';
    document.getElementById('confirmationPopup').style.display = 'none';
}


const video = document.getElementById('hoverVideo');

video.addEventListener('mouseenter', () => {
    video.play(); // Play the video on hover
});

video.addEventListener('mouseleave', () => {
    video.pause(); // Pause the video when the mouse leaves
    video.currentTime = 0; // Reset video to the beginning
});
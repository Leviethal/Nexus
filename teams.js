document.addEventListener("DOMContentLoaded", () => {
    const containers = document.querySelectorAll(".container");

    const handleScroll = () => {
        containers.forEach(container => {
            const rect = container.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                container.classList.add("visible");
            }
        });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger once on page load

    const video = document.getElementById("background-video");
    video.playbackRate = 0.7; // Slow down background video
});

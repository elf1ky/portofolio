document.addEventListener("DOMContentLoaded", function () {
    const starContainer = document.querySelector(".stars");

    function createStar() {
        const star = document.createElement("div");
        star.classList.add("star");

        // Random position
        star.style.left = Math.random() * window.innerWidth + "px";
        star.style.animationDuration = Math.random() * 3 + 2 + "s"; // Speed of falling
        star.style.animationDelay = Math.random() * 3 + "s"; // Delay

        starContainer.appendChild(star);

        // Remove star after animation
        setTimeout(() => {
            star.remove();
        }, 5000);
    }

    // Generate stars continuously
    setInterval(createStar, 100);
});

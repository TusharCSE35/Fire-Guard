function updateStats() {
    const year = document.getElementById("year-select").value;
    const heading = document.getElementById("stat-heading");

    // Simulated data based on the selected year (for demonstration)
    let avg, sum, max;
    if (year === "2020") {
        avg = 75;
        sum = 1200;
        max = 180;
    } else if (year === "2021") {
        avg = 80;
        sum = 1400;
        max = 200;
    } else {
        avg = 85;
        sum = 1500;
        max = 220;
    }

    heading.innerText = `Mathematical Statistics for ${year}`;

    // Animate stats update
    animateStat("avg-stat", avg);
    animateStat("sum-stat", sum);
    animateStat("max-stat", max);
}

function animateStat(id, value) {
    const statElement = document.getElementById(id);
    let current = 0;
    const target = value;

    const interval = setInterval(() => {
        if (current < target) {
            current += Math.ceil(target / 100); // Animation step
            statElement.innerText = current + "%"; // Update with percentage-like animation
        } else {
            clearInterval(interval);
            statElement.innerText = target + "%"; // Final value
        }
    }, 20);
}

// Initial stats setup
updateStats();

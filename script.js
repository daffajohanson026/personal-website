function updateClock() {
    const now = new Date();

    document.getElementById("clock").innerHTML =
        now.toLocaleTimeString();
}

setInterval(updateClock, 1000);

const quotes = [
    "3D printing turns imagination into reality.",
    "Technology rewards curiosity.",
    "Code, coffee, repeat ☕",
    "Small projects become big skills.",
    "Future built layer by layer."
];

function generateQuote() {
    const randomIndex =
        Math.floor(Math.random() * quotes.length);

    document.getElementById("quote").innerHTML =
        quotes[randomIndex];
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}
const quotes = [
    { quote: "First, solve the problem. Then, write the code. – John Johnson" },
    { quote: "Programs must be written for people to read, and only incidentally for machines to execute. – Harold Abelson" },
    { quote: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand. – Martin Fowler" },
    { quote: "Code is like humor. When you have to explain it, it’s bad. – Cory House" },
    { quote: "Experience is the name everyone gives to their mistakes. – Oscar Wilde" },
    { quote: "Simplicity is the soul of efficiency. – Austin Freeman" },
    { quote: "Before software can be reusable it first has to be usable. – Ralph Johnson" },
    { quote: "If debugging is the process of removing software bugs, then programming must be the process of putting them in. – Edsger Dijkstra" },
    { quote: "Programming isn't about what you know; it's about what you can figure out. – Chris Pine" },
    { quote: "The function of good software is to make the complex appear to be simple. – Grady Booch" },
];

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex].quote;
}

function showQuote() {
    const quoteElement = document.getElementById('quote-text');
    quoteElement.classList.remove('in');
    setTimeout(() => {
        quoteElement.innerText = getRandomQuote();
        quoteElement.classList.add('in');
    }, 1000); // Matches the CSS transition duration
}

document.addEventListener('DOMContentLoaded', () => {
    showQuote();
    setInterval(showQuote, 5000);
});
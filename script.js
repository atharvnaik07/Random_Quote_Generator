// Array of quotes
const quotes = [
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "If life were predictable it would cease to be life, and be without flavor. - Eleanor Roosevelt",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart. - Helen Keller",
    "It is during our darkest moments that we must focus to see the light. - Aristotle",
    "In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln",
    "You only live once, but if you do it right, once is enough. - Mae West"
];

// Function to generate a random quote
function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteElement = document.getElementById("quote");
    quoteElement.textContent = quotes[randomIndex];
}

generateQuote(); // Generate initial quote on page load

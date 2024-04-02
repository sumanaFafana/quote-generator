const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");

// let apiQuotes = [];

// Show Loading
function loading() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

// Hide Loading
function complete() {
  quoteContainer.hidden = false;
  loader.hidden = true;
}

// Show new Quote

function newQuote() {
  loading();
  // Pick a random quotes from apiQuotes array
  const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];

  // Check if author field is blank and replace it with unknown
  setTimeout(() => {
    if (!quote.author) {
      authorText.textContent = "unknown";
    } else {
      authorText.textContent = quote.author;
    }

    // Check quote length to determine the stying
    if (quote.text.length > 120) {
      quoteText.classList.add("long-quote");
    } else {
      quoteText.classList.remove("long-quote");
    }

    // Set quote, hide loader
    quoteText.textContent = quote.text;
    complete();
  }, 1000);
}

// Get Quotes From API

// async function getQuotes() {
//   const apiUrl = "https://type.fit/api/quotes";

//   try {
//     const response = await fetch(apiUrl);
//     apiQuotes = await response.json();
//     newQuote();
//   } catch (error) {
//     //Catch Error Here
//   }
// }

// Tweet Quote
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, "_blank");
}

// Event listeners
newQuoteBtn.addEventListener("click", newQuote);
twitterBtn.addEventListener("click", tweetQuote);

// Onload
// getQuotes();

// onload
newQuote();

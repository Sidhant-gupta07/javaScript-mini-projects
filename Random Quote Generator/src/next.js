const API = "https://api.quotable.io/random";
const Quote = document.getElementById("quote");
const Author = document.getElementById("author");
async function getQuote(url){
        const response = await fetch(url);
        const data = await response.json();
        Quote.innerHTML = data.content;
        Author.innerHTML = data.author;
}
getQuote(API);

function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" + Quote.innerHTML + " --- by " + Author.innerHTML, "Tweet Window", "width= 600, height=300");
}
const quotes = [
	{
		quote: "I'm not a great programmer; I'm just a good programmer with great habits.",
		author: "Kent Beck",
	},
	{
		quote: "First, solve the problem. Then, write the code.",
		author: "John Johnson",
	},
	{
		quote: "Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring",
		author: "Marilyn Monroe",
	},
	{
		quote: "Good friends, good books, and a sleepy conscience: this is the ideal life",
		author: "Mark Twain",
	},
	{
		quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
		author: "Albert Einstein",
	},
	{
		quote: "You only live once, but if you do it right, once is enough.",
		author: "Mae West",
	},
	{
		quote: "If debugging is the process of removing bugs, then programming must be the process of putting them in.",
		author: "Edsger Dijkstra",
	},
	{
		quote: "In three words I can sum up everything I've learned about life: it goes on.",
		author: "Robert Frost",
	},
	{
		quote: "The best way to predict the future is to invent it.",
		author: "Alan Kay",
	},
	{
		quote: "If you tell the truth, you don't have to remember anything.",
		author: "Mark Twain",
	},
	{
		quote: "Life is what happens to us while we are making other plans.",
		author: "Allen Saunders",
	},
	{
		quote: "It is not a lack of love, but a lack of friendship that makes unhappy marriages.",
		author: "Friedrich Nietzsche",
	},
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = `\n- ${todaysQuote.author} -`;

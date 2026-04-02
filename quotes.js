const quotes =   [
    {
    "q": "The person who says something is impossible should not interrupt the person who is doing it.",
    "a": "Chinese Proverb",
    "c": "92",
    "h": "\u003Cblockquote\u003E&ldquo;The person who says something is impossible should not interrupt the person who is doing it.&rdquo; &mdash; \u003Cfooter\u003EChinese Proverb\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Mistakes are painful when they happen, but years later a collection of mistakes is what is called experience.",
    "a": "Denis Waitley",
    "c": "109",
    "h": "\u003Cblockquote\u003E&ldquo;Mistakes are painful when they happen, but years later a collection of mistakes is what is called experience.&rdquo; &mdash; \u003Cfooter\u003EDenis Waitley\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "We build too many walls and not enough bridges.",
    "a": "Isaac Newton",
    "c": "47",
    "h": "\u003Cblockquote\u003E&ldquo;We build too many walls and not enough bridges.&rdquo; &mdash; \u003Cfooter\u003EIsaac Newton\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Our virtues and our failings are inseparable, like force and matter. When they separate, man is no more. ",
    "a": "Nikola Tesla",
    "c": "105",
    "h": "\u003Cblockquote\u003E&ldquo;Our virtues and our failings are inseparable, like force and matter. When they separate, man is no more. &rdquo; &mdash; \u003Cfooter\u003ENikola Tesla\u003C/footer\u003E\u003C/blockquote\u003E"
  },
    {
    "q": "Life is like stepping onto a boat which is about to sail out to sea and sink.",
    "a": "Shunryu Suzuki",
    "c": "77",
    "h": "\u003Cblockquote\u003E&ldquo;Life is like stepping onto a boat which is about to sail out to sea and sink.&rdquo; &mdash; \u003Cfooter\u003EShunryu Suzuki\u003C/footer\u003E\u003C/blockquote\u003E"
  },
    {
    "q": "A change is brought about because ordinary people do extraordinary things.",
    "a": "Barack Obama",
    "c": "74",
    "h": "\u003Cblockquote\u003E&ldquo;A change is brought about because ordinary people do extraordinary things.&rdquo; &mdash; \u003Cfooter\u003EBarack Obama\u003C/footer\u003E\u003C/blockquote\u003E"
  },
{
    "q": "When you love someone, you love the person as they are, and not as you'd like them to be.",
    "a": "Leo Tolstoy",
    "c": "89",
    "h": "\u003Cblockquote\u003E&ldquo;When you love someone, you love the person as they are, and not as you'd like them to be.&rdquo; &mdash; \u003Cfooter\u003ELeo Tolstoy\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "There is no greater agony than bearing an untold story inside you.",
    "a": "Maya Angelou",
    "c": "66",
    "h": "\u003Cblockquote\u003E&ldquo;There is no greater agony than bearing an untold story inside you.&rdquo; &mdash; \u003Cfooter\u003EMaya Angelou\u003C/footer\u003E\u003C/blockquote\u003E"
  },
    {
    "q": "To avoid criticism, do nothing, say nothing, and be nothing.",
    "a": "Elbert Hubbard",
    "c": "60",
    "h": "\u003Cblockquote\u003E&ldquo;To avoid criticism, do nothing, say nothing, and be nothing.&rdquo; &mdash; \u003Cfooter\u003EElbert Hubbard\u003C/footer\u003E\u003C/blockquote\u003E"
  },
    {
    "q": "If you chase two rabbits, you catch none.",
    "a": "Confucius",
    "c": "41",
    "h": "\u003Cblockquote\u003E&ldquo;If you chase two rabbits, you catch none.&rdquo; &mdash; \u003Cfooter\u003EConfucius\u003C/footer\u003E\u003C/blockquote\u003E"
  }
]

function loadQuotes() {
  const container = document.getElementById("quotes-container");
  container.innerHTML = "";

  for (let i = 0; i < quotes.length; i++) {
    let quote = quotes[i];

    let card = `
      <div class="quote-card">
        <p>"${quote.q}"</p>
        <p><em>–<i> ${quote.a}</i></em></p>
      </div>
    `;

    container.innerHTML += card;
  }
}

window.onload = loadQuotes;
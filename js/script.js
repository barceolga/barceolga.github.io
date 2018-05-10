var prefix = "https://cors-anywhere.herokuapp.com/";
var tweetLink = "https://twitter.com/intent/tweet?text=";
var quoteUrl = "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";

// FUNCTION FOR GETTING THE QUOTE
function getQuote() {
    $.getJSON(prefix + quoteUrl, createTweet);
    $.ajaxSetup({cache: false});
}

function createTweet(input) {
  var data = input(0);

  var quoteText = $(data.content).text().trim();
  var quoteAuthor = data.title;

  if(!quoteAuthor.length) {
    quoteAuthor = "Unknown author";
  }

  var tweetText = "Quote of the day - " + quoteText + " Author: " + auoteAuthor;

  if (tweetText.length > 140) {
    getQuote();
  } else {
    var tweet = tweetLink + encodeURIComponent(tweetText);
    $('.quote').text(quoteText);
    $('.author').text("Auhtor: " + quoteAuthor);
    $('.tweet').attr('href', tweet);

  }

  $(document).ready(function() {
    getQuote();
    $('.trigger').click(function() {
      getQuote();
    });
  });
}

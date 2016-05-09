(function() {
    var quotes = [{
        quote: "Never looking back or too far in front of me. The present is a gift and I just wanna BE.",
        author: "Common",
        imgSrc: "common.jpg"
    }, {
        quote: "Sometimes before you smile, you got to cry. You need a heart that's filled with music. If you use it, you can fly.",
        author: "The Roots",
        imgSrc: "theroots.jpg"
    }, {
        quote: "Nobody's perfect, ain't none of us worthless. We all got a place, and we all got a purpose.",
        author: "Murs",
        imgSrc: "murs.jpg"
    }, {
        quote: "If you admire somebody you should go on 'head tell 'em. People never get the flowers while they can still smell 'em.",
        author: "Kanye West",
        imgSrc: "kanyewest.jpg"
    }, {
        quote: "If you're scared to take chances, you'll never have the answers.",
        author: "Nas",
        imgSrc: "nas.jpg"
    }, {
        quote: "We always ignore the ones who adore us, and adore the ones who ignore us.",
        author: "Drake",
        imgSrc: "drake.jpg"
    }, {
        quote: "We can't change the world until we change ourselves.",
        author: "Biggie Smalls",
        imgSrc: "biggie.jpg"
    }, {
        quote: "The most important parts, are the ones that are unseen. The wings don't make you fly, and the crown don't make you king.",
        author: "Lupe Fiasco",
        imgSrc: "lupefiasco.jpg"
    }, {
        quote: "Listen to your own heart. Don't worry about what other people say. At the end of the day, it's about what you believe.",
        author: "Joey Bada$$",
        imgSrc: "joeybadass.jpg"
    }, {
        quote: "Represent from the heart and don't let nobody stop it.",
        author: "Rakim",
        imgSrc: "rakim.jpg"
    }, {
        quote: "Shit don't change until you get up and wash yo' ass.",
        author: "Kendrick Lamar",
        imgSrc: "kdot.jpg"
    }, {
        quote: "If lives aren't going right then seek out change.",
        author: "The Underachievers",
        imgSrc: "underachievers.jpg"
    }, {
        quote: "Life is what we make it and a chance is like a picture, it'd be nice if you'd just take it.",
        author: "Drake",
        imgSrc: "drake.jpg"
    }, {
        quote: "Create a dream, and then get off your ass and then chase it.",
        author: "Hopsin",
        imgSrc: "hopsin.jpg"
    }, {
        quote: "Follow your heart. Don't follow what you've been told you're supposed to do.",
        author: "J. Cole",
        imgSrc: "jcole.png"
    }, {
        quote: "",
        author: "Ab-Soul",
        imgSrc: "absoul.jpg"
    }, {
        quote: "",
        author: "Isaiah Rashad",
        imgSrc: "isaiah.png"
    }, {
        quote: "",
        author: "Flatbush Zombies",
        imgSrc: "fbz.jpg"
    }];
    var lastQuote = 0;
    var repeated = 0;

    document.addEventListener("DOMContentLoaded", function() {
        console.log("dom loaded");
        randomise("firstload");
        document.addEventListener("mouseup", function(eventData) {
            // Change the quote only on left click.
            if (eventData.button === 0) {
                randomise();
            }
        }, false);
        // FIXME: This line makes the randomise function execute again on DOM load.
        document.addEventListener("touchend", function(event) {
            event.preventDefault();
            randomise();
        }, false);
    });

    function randomise(type) {
        var selectedQuote = Math.floor(Math.random() * quotes.length);
        if (type === "firstload") {
            fadeIn(document.getElementById("content"));
            updatePage(selectedQuote);
            lastQuote = selectedQuote;
        } else if (lastQuote === selectedQuote) {
            randomise();
            repeated++;
            console.log("rerolling - " + repeated);
        } else {
            //updateTwitter(quotes[selectedQuote].quote);
            fadeOut(document.getElementById("content"));
            setTimeout(function() {
                fadeIn(document.getElementById("content"));
                console.log(selectedQuote);
                lastQuote = selectedQuote;
                updatePage(selectedQuote);
            }, 1000);
        }
    }

    var updatePage = function(selectedQuote) {
        document.getElementById("quote").innerHTML = "&ldquo;" + quotes[selectedQuote].quote + "&rdquo;";
        document.getElementById("author").innerHTML = "- " + quotes[selectedQuote].author;
        document.body.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('images/" + quotes[selectedQuote].imgSrc + "')";
    };

    function updateTwitter(quote) {
        console.log("called updateTwitter");
        if (document.querySelector("iframe")) {
            var parent = document.getElementById("btn-twitter");
            var newBtn = document.createElement("a");
            // FIXME: using lastChild seem to be a bit more effective jsperf.com/innerhtml-vs-removechild/15
            /*
            while (node.hasChildNodes()) {
                node.removeChild(node.lastChild);
            }
            */
            // Empty the nodes.
            parent.textContent = "";

            newBtn.dataset.text = '"' + quote + '"';
            newBtn.dataset.hashtags = "HHQuotes";

            newBtn.className = "twitter-share-button";
            newBtn.href = "http://twitter.com/share";
            newBtn.innerHTML = "Tweet";

            parent.appendChild(newBtn);
            twttr.widgets.load();
            console.log("widget found");
        } else {
            document.getElementsByClassName("twitter-share-button")[0].dataset.text = '"' + quote + '"';
        }
    }

    // fade out
    function fadeOut(el) {
        el.style.opacity = 1;

        (function fade() {
            if ((el.style.opacity -= 0.03) < 0) {
                el.style.display = "none";
            } else {
                requestAnimationFrame(fade);
            }
        })();
    }

    // fade in
    function fadeIn(el) {
        el.style.opacity = 0;
        el.style.display = "inline-block";

        (function fade() {
            var val = parseFloat(el.style.opacity);
            if (!((val += 0.03) > 1)) {
                el.style.opacity = val;
                requestAnimationFrame(fade);
            }
        })();
    }

    // Debug
    debug = window.debug || {};

    // Check to see if any quote is bigger than 130 characters long. (Twitter
    // has a max 140 characters policy, and we also need to add the hashtag)
    debug.quotesLength = function() {
        var removable = [];
        for (var i in quotes) {
            if (quotes[i].quote.length > 130) {
                removable.push(quotes[i].quote.length + " - " + quotes[i].quote);
            }
        }

        if (removable.length < 1) {
            return console.log("All quotes are under 130 characters.");
        }

        return removable;
    };

    debug.countQuotes = function() {
        return quotes.length;
    };
})();

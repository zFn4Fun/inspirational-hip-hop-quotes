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
    }, {
        quote: "You can make something of your life, it just depends on you drive.",
        author: "Eminem",
        imgSrc: "eminem.jpg"
    }, {
        quote: "Leave the past in the past, tomorrow is not promised, and today is just a gift, I guess that's why it's the present.",
        author: "Joe Budden",
        imgSrc: "joebudden.jpg"
    }, {
        quote: "Reach for the stars so if you fall you land on a cloud.",
        author: "Kanye West",
        imgSrc: "kanyewest.jpg"
    }, {
        quote: "I will not lose, for even in defeat, there’s a valuable lesson learned, so it evens up for me.",
        author: "Jay-Z",
        imgSrc: "jayz.jpeg"
    }, {
        quote: "Remind yourself, nobody built like you, you design yourself.",
        author: "Jay-Z",
        imgSrc: "jayz.jpeg"
    }, {
        quote: "Turnin' nothin' into somethin' is God work, and you get nothin' without struggle and hard work.",
        author: "Nas",
        imgSrc: "nas.jpg"
    }, {
        quote: "The victory’s found in truth, like innocence found in youth, self defeat is your own dispute",
        author: "Damnian Marley",
        imgSrc: "damnianmarley.jpg"
    }, {
        quote: "You can make the future, but it starts leaving the past.",
        author: "Immortal Technique",
        imgSrc: "immortaltechnique.jpg"
    }, {
        quote: "The only difference between a winner and a loser is a winner plays until he wins.",
        author: "Big K.R.I.T.",
        imgSrc: "bigkrit.jpg"
    }, {
        quote: "Apply yourself to supply your wealth, only Limitations you’ll ever have are those you Place upon yourself.",
        author: "Kendrick Lamar",
        imgSrc: "kdot.jpg"
    }, {
        quote: "I can only build if I tear the walls down. Even if it breaks me I won't let it make me frown. I'm falling but no matter how hard I hit the ground, I'll still smile.",
        author: "Eyedea",
        imgSrc: "eyedea.jpg"
    }, {
        quote: "They say anything's possible, you gotta dream like you never seen obstacles.",
        author: "J. Cole",
        imgSrc: "jcole.png"
    }];
    var lastQuote;
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
        document.addEventListener("touchend", randomise, false);
    });

    function randomise(type) {
        console.log("randomise fired");
        var selectedQuote = Math.floor(Math.random() * quotes.length);

        if (type === "firstload") {
            document.getElementsByClassName("island")[0].style.opacity = 1;
            updatePage(selectedQuote);
            lastQuote = selectedQuote;
        } else if (lastQuote === selectedQuote) {
            randomise();
            repeated++;
            console.log("rerolling - " + repeated);
        } else {
            document.getElementsByClassName("island")[0].style.opacity = 0;
            setTimeout(function() {
                updateTwitter(quotes[selectedQuote].quote);
            }, 700);
            setTimeout(function() {
                document.getElementsByClassName("island")[0].style.opacity = 1;
                console.log(selectedQuote);
                lastQuote = selectedQuote;
                updatePage(selectedQuote);
            }, 1000);
        }
    }

    var updatePage = function(selectedQuote) {
        document.getElementById("quote").innerHTML = "&ldquo;" + quotes[selectedQuote].quote + "&rdquo;";
        document.getElementById("author").innerHTML = "- " + quotes[selectedQuote].author;
        document.body.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('img/" + quotes[selectedQuote].imgSrc + "')";
    };

    function updateTwitter(selectedQuote) {
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

            newBtn.dataset.text = '"' + selectedQuote + '"';
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

    // Debug
    debug = window.debug || {};

    // Checks to see if any of the quotes are bigger than 130 characters long.
    // (Twitter has a max 140 chars policy, and we also need to add the hashtag)
    debug.quotesLength = function() {
        var removable = [];
        for (var i in quotes) {
            if (quotes[i].quote.length > 130) {
                removable.push(quotes[i].quote.length + " - " + quotes[i].quote);
            }
        }

        if (removable.length < 1) {
            return "All quotes are under 130 characters.";
        }

        return removable;
    };

    // Returns the number of quotes inside the quotes array.
    debug.countQuotes = function() {
        return quotes.length;
    };

    // Searches for the author in the quotes array and returns the position of
    // his quotes.
    debug.searchQuotes = function(string) {
        var matches = [];
        var author = string.toLowerCase();

        for (var i = 0; i < quotes.length; i++) {
            if (author === quotes[i].author.toLowerCase()) matches.push(i);
        }

        if (matches.length < 1) return "No matches found";
        return matches;
    };
})();

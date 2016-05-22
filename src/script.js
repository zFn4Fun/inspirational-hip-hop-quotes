(function() {
    const quotes = [{
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
        quote: "Don't be dethroned by these systems of control, just keep your fingers crossed and get them locks off your soul.",
        author: "Ab-Soul",
        imgSrc: "absoul.jpg"
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
        quote: "Turning nothing into something is God work, and you get nothing without struggle and hard work.",
        author: "Nas",
        imgSrc: "nas.jpg"
    }, {
        quote: "The victory’s found in truth, like innocence found in youth, self defeat is your own dispute",
        author: "Damian Marley",
        imgSrc: "damianmarley.jpg"
    }, {
        quote: "You can make the future, but it starts with leaving the past.",
        author: "Immortal Technique",
        imgSrc: "immortaltechnique.jpg"
    }, {
        quote: "The only difference between a winner and a loser is a winner plays until he wins.",
        author: "Big K.R.I.T.",
        imgSrc: "bigkrit.jpg"
    }, {
        quote: "Apply yourself to supply your wealth, only limitations you'll ever have are those that you place upon yourself.",
        author: "Kendrick Lamar",
        imgSrc: "kdot.jpg"
    }, {
        quote: "They say anything's possible, you gotta dream like you never seen obstacles.",
        author: "J. Cole",
        imgSrc: "jcole.png"
    }, {
        quote: "Get up off that slave ship, build your own pyramids, write your own hieroglyphs.",
        author: "Kendrick Lamar",
        imgSrc: "kdot.jpg"
    }, {
        quote: "We hurt people that love us, love people that hurt us.",
        author: "Kendrick Lamar",
        imgSrc: "kdot.jpg"
    }, {
        quote: "We all get distracted, the question is, would you bounce back or bounce backwards?",
        author: "Kendrick Lamar",
        imgSrc: "kdot.jpg"
    }, {
        quote: "True love is so hard to find, and they say that once you found it you lost your mind.",
        author: "Capital Steez",
        imgSrc: "steelo.jpg"
    }, {
        quote: "You're never too old to take baby steps.",
        author: "Capital Steez",
        imgSrc: "steelo.jpg"
    }, {
        quote: "I seen a baby cry then seconds later she laughed. The beauty of life, the pain never lasts",
        author: "J. Cole",
        imgSrc: "jcole.png"
    }, {
        quote: "To appreciate the sun you gotta know what rain is.",
        author: "J. Cole",
        imgSrc: "jcole.png"
    }, {
        quote: "Keep grinding boy, your life can change in one year. And even when it's dark out, the sun is shining somewhere",
        author: "J. Cole",
        imgSrc: "jcole.png"
    }, {
        quote: "Hell is not a place you go if you're not a Christian, it's the failure of your life's greatest ambition.",
        author: "Immortal Technique",
        imgSrc: "immortaltechnique.jpg"
    }];
    // The variable where the array index of the last quote used is stored.
    let lastQuote;

    document.addEventListener("DOMContentLoaded", () => {
        console.log("dom loaded");
        randomise("firstload");
        // Add an event listener that calls randomise() on mouseup.
        document.addEventListener("mouseup", (eventData) => {
            // But only on left click.
            if (eventData.button === 0) randomise();
        }, false);
        // Similar to the one above, but for touch.
        document.addEventListener("touchend", randomise, false);
    });

    // The core of the app.
    // Takes on paramater ("fistload" - which is used only on first load).
    let randomise = (type) => {
        console.log("randomise fired");
        // Selects one of the quotes randomly.
        const selectedQuote = Math.floor(Math.random() * quotes.length);

        // If the page is loading for the first time there is no content to
        // fade out, so just fade in the content, update it and store the index
        // value of the current quote used.
        if (type === "firstload") {
            // The fade effects are handled by CSS' transition property, so we
            // only need to change the opacity values.
            document.getElementsByClassName("island")[0].style.opacity = 1;
            updatePage(selectedQuote);
            // Store the index value of the current quote in lastQuote for
            // the next time.
            lastQuote = selectedQuote;
        // Otherwise it means we already had a quote up, so check to see if
        // the new one is the same as the lastQuote points to. If so, reroll.
        } else if (lastQuote === selectedQuote) {
            randomise();
            console.log("rerolling");
        // If it's not the same, fade out the content, update it and the twitter
        // button, and fade it in.
        } else {
            document.getElementsByClassName("island")[0].style.opacity = 0;
            // Call the twitter updating function with a delay so the user
            // won't see how the element gets removed and created again. It
            // all happens after the element faded out, but not before it fades
            // in.
            setTimeout(() => {
                updateTwitter(quotes[selectedQuote].quote);
            }, 700);
            // After a 1s delay update the content, fade it in, and store the
            // index value of the current quote.
            setTimeout(() => {
                document.getElementsByClassName("island")[0].style.opacity = 1;
                console.log(selectedQuote);
                lastQuote = selectedQuote;
                updatePage(selectedQuote);
            }, 1000);
        }
    };

    // Handles the update of the page content (quote, author and background
    // image).
    // Takes one parameter, the quote object selected through randomise().
    let updatePage = (selectedQuote) => {
        document.getElementById("quote").innerHTML = "&ldquo;" + quotes[selectedQuote].quote + "&rdquo;";
        document.getElementById("author").innerHTML = "- " + quotes[selectedQuote].author;
        document.body.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('img/" + quotes[selectedQuote].imgSrc + "')";
    };

    // Updates the tweet message by removing the twitter button entirely, and
    // reconstructing it. Couldn't find a better way to handle dynamic tweet
    // messages.
    // It takes one parameter, the current quote, that is used as the tweet
    // message (data-text) of the new button.
    let updateTwitter = (selectedQuote) => {
        console.log("called updateTwitter");
        // If the twitter button was already constructed, destroy and rebuild
        // it.
        if (document.querySelector("iframe")) {
            // The parent div in which the button is stored.
            const parent = document.getElementById("btn-twitter");
            // Create the skeleton of the new button.
            const newBtn = document.createElement("a");
            // FIXME: using lastChild seem to be a bit more effective jsperf.com/innerhtml-vs-removechild/15
            /*
            while (node.hasChildNodes()) {
                node.removeChild(node.lastChild);
            }
            */
            // Empties the nodes of the parent div.
            parent.textContent = "";

            // Update the skeleton of the button with data-text, data-hashtag,
            // class, href and the text on the button.
            newBtn.dataset.text = '"' + selectedQuote + '"';
            newBtn.dataset.hashtags = "HHQuotes";
            newBtn.className = "twitter-share-button";
            newBtn.href = "http://twitter.com/share";
            newBtn.innerHTML = "Tweet";

            // Append the skeleton to its parent.
            parent.appendChild(newBtn);
            // After everything is set, call the twitter method that constructs
            // the button.
            twttr.widgets.load();
            console.log("widget found");
        // Otherwise just update the tweet message (data-text).
        } else {
            document.getElementsByClassName("twitter-share-button")[0].dataset.text = '"' + quote + '"';
        }
    };

    // Debug - things used in development.
    window.debug = window.debug || {};

    // Checks to see if any of the quotes are bigger than 130 characters long.
    // (Twitter has a max 140 chars policy, and we also need to add the hashtag)
    debug.quotesLength = () => {
        let removable = [];
        for (let i in quotes) {
            if (quotes[i].quote.length > 130) {
                removable.push(quotes[i].quote.length + " - " + quotes[i].quote);
            }
        }

        if (removable.length < 1) return "All quotes are under 130 characters.";
        return removable;
    };

    // Returns the number of objects inside the quotes array.
    debug.countQuotes = () => {
        return quotes.length;
    };

    // Searches for the author in the quotes array and returns the position of
    // all his quotes.
    debug.searchQuotes = (string) => {
        let matches = [];
        const author = string.toLowerCase();

        for (let i = 0; i < quotes.length; i++) {
            if (author === quotes[i].author.toLowerCase()) matches.push(i);
        }

        if (matches.length < 1) return "No matches found";
        return matches;
    };
})();

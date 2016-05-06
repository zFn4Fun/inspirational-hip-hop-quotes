(function() {
    var quotes = [{
        quote: "Remember one thing. Through every dark night, there's a bright day after that. So no matter how hard it get, stick your chest out. Keep your head up, and handle it.",
        author: "Tupac",
        imgSrc: "tupac.jpg"
    }, {
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
        quote: "Everything will eventually come to an end. So try to savor the moment, cause time flies, don't it? The beauty of life, you gotta make it last for the better. Cuz nothin' lasts forever.",
        author: "Nas",
        imgSrc: "nas.jpg"
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
        quote: "Sometimes you have the trends that's not that cool. You may have certain artists portraying these trends and don't really have that lifestyle, and then it gives off the wrong thing. And it becomes kinda corny after awhile. It's really about keeping hip-hop original and pushing away the corniness in it.",
        author: "Kendrick Lamar",
        imgSrc: "kdot.jpg"
    }, {
        quote: "Shit don't change until you get up and wash yo' ass.",
        author: "Kendrick Lamar",
        imgSrc: "kdot.jpg"
    }, {
        quote: "If lives aren't going right then seek out change.",
        author: "The Underachievers",
        imgSrc: "underachievers.jpg"
    }, {
        quote: "A lot of times, when people say hip hop, they don't know what they're talking about. They just think of the rappers. When you talk about hip hop, you're talking about the whole culture and movement. You have to take the whole culture for what it is.",
        author: "Afrika Bambaataa",
        imgSrc: "bambaataa.jpg"
    }, {
        quote: "What worries me are these so-called radio stations with program directors who don't play all the different flavors of hip hop. They should play the old with the new, 24/7, 365 days a year. A lot of these program directors are just jiving around and not playing all the good music for the people.",
        author: "Afrika Bambaataa",
        imgSrc: "bambaataa.jpg"
    }, {
        quote: "You can spend minutes, hours, days, weeks, or even months over-analyzing a situation, trying to put the pieces together, justifying what could've, would've happened... or you can just leave the pieces on the floor and move the fuck on.",
        author: "Tupac",
        imgSrc: "tupac.jpg"
    }, {
        quote: "Life is what we make it and a chance is like a picture, it'd be nice if you'd just take it.",
        author: "Drake",
        imgSrc: "drake.jpg"
    }, {
        quote: "Wherever I go, I bring the culture with me, so that they can understand that it's attainable. I didn't do it any other way than through Hip Hop.",
        author: "Jay-Z",
        imgSrc: "jayz.jpeg"
    }, {
        quote: "Create a dream, and then get off your ass and then chase it.",
        author: "Hopsin",
        imgSrc: "hopsin.jpg"
    }, {
        quote: "Follow your heart. Don't follow what you've been told you're supposed to do.",
        author: "J. Cole",
        imgSrc: "jcole.png"
    }, ];
    var lastQuote;
    var repeated = 0;

    document.addEventListener("DOMContentLoaded", function() {
        console.log("dom loaded");
        randomise();
        document.addEventListener("mouseup", function(eventData) {
            // Change the quote only on left click.
            if (eventData.button === 0) {
                randomise();
            }
        }, false);
        // FIXME: This line makes the randomise function execute again on DOM load.
        document.addEventListener("touchdown", function(event) {
            event.preventDefault();
            randomise();
        }, false);
        document.getElementById("test").addEventListener("mousedown", function() {
            location.href = "../../";
        });
    });

    //FIXME: There seems to be some issues with reroling and the fade stuff.
    function randomise() {
        console.log("called randomise");
        var selectedQuote = Math.floor(Math.random() * quotes.length);
        updateTwitter(quotes[selectedQuote].quote);
        fadeOut(document.getElementById("content"));
        setTimeout(function() {
            fadeIn(document.getElementById("content"));
            console.log(selectedQuote);
            if (selectedQuote !== lastQuote) {
                lastQuote = selectedQuote;
                document.getElementById("quote").innerHTML = "&ldquo;" + quotes[selectedQuote].quote + "&rdquo;";
                document.getElementById("author").innerHTML = "- " + quotes[selectedQuote].author;
                document.body.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('images/" + quotes[selectedQuote].imgSrc + "')";
            } else {
                repeated++;
                console.log("rerolling - " + repeated);
                randomise();
            }
        }, 800);
    }

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
    debug.checkLength = function() {
        for (var i = 0; i < quotes.length; i++) {
            if (quotes[i].quote.length > 130) console.log(quotes[i].quote + " - " + quotes[i].quote.length);
        }
    };
})();

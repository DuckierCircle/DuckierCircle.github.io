// JavaScript source code

let text = '';
let textCurrent = '';

function randomFact() {
    let x = Math.floor(Math.random() * 20);
    switch (x) {
        case 0:
            text = "Water buffalos are domesticated bovines that are native to Southeast Asia.";
            if (text === textCurrent) {
                randomFact();
            } else {
                textCurrent = text;
            }
            break;
        case 1:
            text = "There are two main types of water buffalos: the river buffalo and the swamp buffalo.";
            if (text === textCurrent) {
                randomFact();
            } else {
                textCurrent = text;
            }
            break;
        case 2:
            text = "Water buffalos are herbivores and primarily eat grass and other vegetation.";
            if (text === textCurrent) {
                randomFact();
            } else {
                textCurrent = text;
            }
            break;
        case 3:
            text = "These animals are known for their exceptional strength and endurance, which makes them well-suited for heavy agricultural work.";
            if (text === textCurrent) {
                randomFact();
            } else {
                textCurrent = text;
            }
            break;
        case 4:
            text = "Water buffalos have been used for plowing fields, transporting heavy loads, and even for milk and meat production for thousands of years.";
            if (text === textCurrent) {
                randomFact();
            } else {
                textCurrent = text;
            }
            break;
        case 5:
            text = "The average lifespan of a water buffalo is 20 to 25 years.";
            if (text === textCurrent) {
                randomFact();
            } else {
                textCurrent = text;
            }
            break;
        case 6:
            text = "Water buffalos have a distinctive hump on their back, which is made up of muscle and serves as a fat reserve.";
            if (text === textCurrent) {
                randomFact();
            } else {
                textCurrent = text;
            }
            break;
        case 7:
            text = "Water buffalos are highly valued in many cultures and are often featured in art, music, and literature.";
            if (text === textCurrent) {
                randomFact();
            } else {
                textCurrent = text;
            }
            break;
        case 8:
            text = "These animals are excellent swimmers and enjoy spending time in the water to cool off in hot climates.";
            if (text === textCurrent) {
                randomFact();
            } else {
                textCurrent = text;
            }
            break;
        case 9:
            text = "Water buffalos have been introduced to other parts of the world, including Europe, Africa, and the Americas.";
            if (text === textCurrent) {
                randomFact();
            } else {
                textCurrent = text;
            }
            break;
        case 10:
            text = "In India, water buffalos are considered sacred by some Hindu communities and are used in religious rituals.";
            if (text === textCurrent) {
                randomFact();
            } else {
                textCurrent = text;
            }
            break;
        case 11:
            text = "Water buffalo milk is rich in fat and protein and is used to make cheese, yogurt, and other dairy products.";
            if (text === textCurrent) {
                randomFact();
            } else {
                textCurrent = text;
            }
            break;
        case 12:
            text = "The horns of water buffalos are used to make various tools and decorative items.";
            if (text === textCurrent) {
                randomFact();
            } else {
                textCurrent = text;
            }
            break;
        case 13:
            text = "Water buffalos can weigh up to 2,000 pounds and stand over 6 feet tall at the shoulder.";
            if (text === textCurrent) {
                randomFact();
            } else {
                textCurrent = text;
            }
            break;
        case 14:
            text = "These animals are social creatures and often form close bonds with other members of their herd.";
            if (text === textCurrent) {
                randomFact();
            } else {
                textCurrent = text;
            }
            break;
        case 15:
            text = "Water buffalos have a keen sense of hearing and smell, which helps them detect potential danger.";
            if (text === textCurrent) {
                randomFact();
            } else {
                textCurrent = text;
            }
            break;
        case 16:
            text = "Female water buffalos are called cows, while males are called bulls.";
            if (text === textCurrent) {
                randomFact();
            } else {
                textCurrent = text;
            }
            break;
        case 17:
            text = "The gestation period for water buffalos is approximately 10 to 11 months.";
            if (text === textCurrent) {
                randomFact();
            } else {
                textCurrent = text;
            }
            break;
        case 18:
            text = "Water buffalo skin is tough and durable, making it ideal for leather production.";
            if (text === textCurrent) {
                randomFact();
            } else {
                textCurrent = text;
            }
            break;
        case 19:
            text = "These animals have a gentle temperament and are generally docile and easy to handle.";
            if (text === textCurrent) {
                randomFact();
            } else {
                textCurrent = text;
            }
            break;
    }
    document.getElementById("output").innerHTML = text;
};


function navbar() {
    document.getElementById("navbar").innerHTML = "<div class='navbar'><nav><ul><li><a href='https://waterbuffalofacts.com'>Home</a></li><li><a href='contact.html'>Contact Us</a></li><li><a href='randomfact.html'>Random Fact</a></li><li><a href='wallpapers.html'>Wallpapers</a></li></ul></nav><a href='https://waterbuffalofacts.com'><img style='float: left;'src='images/wbf_logo.png'width='120'height='120'alt='Water Buffalo Facts Logo'class='logo'/></a></div>"
}

function navbarRandomFact() {
    navbar();
    randomFact();
}
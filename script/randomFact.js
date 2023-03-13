// JavaScript source code

let text = '';
let textCurrent = '';

function randomFact() {
    let x = Math.floor(Math.random() * 10);
    switch (x) {
        case 0:
            text = "Water Buffaloes Live on Every Continent Except Antarctica";
            if (text === textCurrent) {
                randomFact();
            } else {
                textCurrent = text;
            }
            break;
        case 1:
            text = "Different Subspecies of Water Buffaloes Live in Different Areas";
            if (text === textCurrent) {
                randomFact();
            } else {
                textCurrent = text;
            }
            break;
        case 2:
            text = "Water Buffaloes Weigh More Than Two Grizzly Bears";
            if (text === textCurrent) {
                randomFact();
            } else {
                textCurrent = text;
            }
            break;
        case 3:
            text = "Water Buffaloes Love the Water, Hence Their Name";
            if (text === textCurrent) {
                randomFact();
            } else {
                textCurrent = text;
            }
            break;
        case 4:
            text = "Water Buffaloes Are Herbivores";
            if (text === textCurrent) {
                randomFact();
            } else {
                textCurrent = text;
            }
            break;
        case 5:
            text = "Domesticated Water Buffaloes Threaten Wild Water Buffaloes";
            if (text === textCurrent) {
                randomFact();
            } else {
                textCurrent = text;
            }
            break;
        case 6:
            text = "Water Buffaloes Are Pregnant for a Bit Longer Than People";
            if (text === textCurrent) {
                randomFact();
            } else {
                textCurrent = text;
            }
            break;
        case 7:
            text = "Wild and Domestic Water Buffalo Population Differences Are Enormous";
            if (text === textCurrent) {
                randomFact();
            } else {
                textCurrent = text;
            }
            break;
        case 8:
            text = "People Love Water Buffalo Milk";
            if (text === textCurrent) {
                randomFact();
            } else {
                textCurrent = text;
            }
            break;
        case 9:
            text = "Brazilian Police Use Water Buffaloes";
            if (text === textCurrent) {
                randomFact();
            } else {
                textCurrent = text;
            }
            break;
    }
    document.getElementById("output").innerHTML = text;
};

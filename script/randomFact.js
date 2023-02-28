// JavaScript source code
function randomFact() {
    let x = Math.floor(Math.random() * 10);
    let text = '';
    switch (x) {
        case 0:
            text = "Water Buffaloes Live on Every Continent Except Antarctica";
            break;
        case 1:
            text = "Different Subspecies of Water Buffaloes Live in Different Areas";
            break;
        case 2:
            text = "Water Buffaloes Weigh More Than Two Grizzly Bears";
            break;
        case 3:
            text = "Water Buffaloes Love the Water, Hence Their Name";
            break;
        case 4:
            text = "Water Buffaloes Are Herbivores";
            break;
        case 5:
            text = "Domesticated Water Buffaloes Threaten Wild Water Buffaloes";
            break;
        case 6:
            text = "Water Buffaloes Are Pregnant for a Bit Longer Than People";
            break;
        case 7:
            text = "Wild and Domestic Water Buffalo Population Differences Are Enormous";
            break;
        case 8:
            text = "People Love Water Buffalo Milk";
            break;
        case 9:
            text = "Brazilian Police Use Water Buffaloes";
            break;
    }
    document.getElementById("output").innerHTML = text;
};

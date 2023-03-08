// JavaScript source code

let text = '';
let textPrevious = '';

function randomWallpaper() {
    let x = Math.floor(Math.random() * 10);
    switch (x) {
        case 0:
            text = "images/wbf_wallpapers/water_buffalo1.jpg";
            if (text === textPrevious) {
                randomWallpaper();
            } else {
                textPrevious = text;
            }
            break;
        case 1:
            text = "images/wbf_wallpapers/water_buffalo2.jpeg";
            if (text === textPrevious) {
                randomWallpaper();
            } else {
                textPrevious = text;
            }
            break;
        case 2:
            text = "images/wbf_wallpapers/water_buffalo3.jpg";
            if (text === textPrevious) {
                randomWallpaper();
            } else {
                textPrevious = text;
            }
            break;
        case 3:
            text = "images/wbf_wallpapers/water_buffalo4.jpeg";
            if (text === textPrevious) {
                randomWallpaper();
            } else {
                textPrevious = text;
            }
            break;
        case 4:
            text = "images/wbf_wallpapers/water_buffalo5.jpg";
            if (text === textPrevious) {
                randomWallpaper();
            } else {
                textPrevious = text;
            }
            break;
        case 5:
            text = "images/wbf_wallpapers/water_buffalo6.jpg";
            if (text === textPrevious) {
                randomWallpaper();
            } else {
                textPrevious = text;
            }
            break;
        case 6:
            text = "images/wbf_wallpapers/water_buffalo7.jpg";
            if (text === textPrevious) {
                randomWallpaper();
            } else {
                textPrevious = text;
            }
            break;
        case 7:
            text = "images/wbf_wallpapers/water_buffalo8.jpeg";
            if (text === textPrevious) {
                randomWallpaper();
            } else {
                textPrevious = text;
            }
            break;
        case 8:
            text = "images/wbf_wallpapers/water_buffalo9.jpeg";
            if (text === textPrevious) {
                randomWallpaper();
            } else {
                textPrevious = text;
            }
            break;
        case 9:
            text = "images/wbf_wallpapers/water_buffalo10.jpeg";
            if (text === textPrevious) {
                randomWallpaper();
            } else {
                textPrevious = text;
            }
            break;
        case 10:
            text = "images/wbf_wallpapers/water_buffalo11.jpeg";
            if (text === textPrevious) {
                randomWallpaper();
            } else {
                textPrevious = text;
            }
            break;
        case 11:
            text = "images/wbf_wallpapers/water_buffalo12.jpeg";
            if (text === textPrevious) {
                randomWallpaper();
            } else {
                textPrevious = text;
            }
            break;
        case 12:
            text = "images/wbf_wallpapers/water_buffalo13.jpg";
            if (text === textPrevious) {
                randomWallpaper();
            } else {
                textPrevious = text;
            }
            break;
    }
    document.getElementById("wallpaper").src = text;
};
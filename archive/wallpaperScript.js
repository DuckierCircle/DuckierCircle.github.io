// JavaScript source code

let text = '';
let textPrevious = '';

function randomWallpaper() {
    let x = Math.floor(Math.random() * 10);
    switch (x) {
        case 0:
            text = "images/wbf_wallpapers/water_buffalo1.png";
            if (text === textCurrent) {
                randomWallpaper();
            } else {
                textCurrent = text;
            }
            break;
        case 1:
            text = "images/wbf_wallpapers/water_buffalo2.png";
            if (text === textCurrent) {
                randomWallpaper();
            } else {
                textCurrent = text;
            }
            break;
        case 2:
            text = "images/wbf_wallpapers/water_buffalo3.png";
            if (text === textCurrent) {
                randomWallpaper();
            } else {
                textCurrent = text;
            }
            break;
        case 3:
            text = "images/wbf_wallpapers/water_buffalo4.png";
            if (text === textCurrent) {
                randomWallpaper();
            } else {
                textCurrent = text;
            }
            break;
        case 4:
            text = "images/wbf_wallpapers/water_buffalo5.png";
            if (text === textCurrent) {
                randomWallpaper();
            } else {
                textCurrent = text;
            }
            break;
        case 5:
            text = "images/wbf_wallpapers/water_buffalo6.png";
            if (text === textCurrent) {
                randomWallpaper();
            } else {
                textCurrent = text;
            }
            break;
        case 6:
            text = "images/wbf_wallpapers/water_buffalo7.png";
            if (text === textCurrent) {
                randomWallpaper();
            } else {
                textCurrent = text;
            }
            break;
        case 7:
            text = "images/wbf_wallpapers/water_buffalo8.png";
            if (text === textCurrent) {
                randomWallpaper();
            } else {
                textCurrent = text;
            }
            break;
        case 8:
            text = "images/wbf_wallpapers/water_buffalo9.png";
            if (text === textCurrent) {
                randomWallpaper();
            } else {
                textCurrent = text;
            }
            break;
        case 9:
            text = "images/wbf_wallpapers/water_buffalo10.png";
            if (text === textCurrent) {
                randomWallpaper();
            } else {
                textCurrent = text;
            }
            break;
        case 10:
            text = "images/wbf_wallpapers/water_buffalo11.png";
            if (text === textCurrent) {
                randomWallpaper();
            } else {
                textCurrent = text;
            }
            break;
        case 11:
            text = "images/wbf_wallpapers/water_buffalo12.png";
            if (text === textCurrent) {
                randomWallpaper();
            } else {
                textCurrent = text;
            }
            break;
        case 12:
            text = "images/wbf_wallpapers/water_buffalo13.png";
            if (text === textCurrent) {
                randomWallpaper();
            } else {
                textCurrent = text;
            }
            break;
    }
    document.getElementById("wallpaper").src = text;
};
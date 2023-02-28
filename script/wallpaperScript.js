// JavaScript source code
function randomWallpaper() {
    let x = Math.floor(Math.random() * 10);
    let text = '';
    switch (x) {
        case 0:
            text = "images/wbf_wallpapers/water_buffalo1.jpg";
            break;
        case 1:
            text = "images/wbf_wallpapers/water_buffalo2.jpeg";
            break;
        case 2:
            text = "images/wbf_wallpapers/water_buffalo3.jpg";
            break;
        case 3:
            text = "images/wbf_wallpapers/water_buffalo4.jpeg";
            break;
        case 4:
            text = "images/wbf_wallpapers/water_buffalo5.jpg";
            break;
        case 5:
            text = "images/wbf_wallpapers/water_buffalo6.jpg";
            break;
        case 6:
            text = "images/wbf_wallpapers/water_buffalo7.jpg";
            break;
        case 7:
            text = "images/wbf_wallpapers/water_buffalo8.jpeg";
            break;
        case 8:
            text = "images/wbf_wallpapers/water_buffalo9.jpeg";
            break;
        case 9:
            text = "images/wbf_wallpapers/water_buffalo10.jpeg";
            break;
        case 10:
            text = "images/wbf_wallpapers/water_buffalo11.jpeg";
            break;
        case 11:
            text = "images/wbf_wallpapers/water_buffalo12.jpeg";
            break;
        case 12:
            text = "images/wbf_wallpapers/water_buffalo13.jpg";
            break;
    }
    document.getElementById("wallpaper").src = text;
};
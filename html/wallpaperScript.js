// JavaScript source code
function randomWallpaper() {
    let arrayOfImages = [];
    x = Math.floor(Math.random() * 13) + 1;
    let src = 'wbf_wallpapers/water_buffalo' + x.toString();
    return src
};
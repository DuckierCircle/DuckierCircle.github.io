// JavaScript source code
function navbar() {
    document.getElementById("navbar-container").innerHTML = "<div class='navbar'><nav><div class='hamburger-container' onclick='navMenu()'><div class='hamburger'></div><div class='hamburger'></div><div class='hamburger'></div></div><ul id='nav-menu'><li><a href='https://waterbuffalofacts.com'>Home</a></li><li><a href='randomfact.html'>Random Fact</a></li><li><a href='wallpapers.html'>Wallpapers</a></li><li><a href='contact.html'>Contact Us</a></li></ul></nav><a href='https://waterbuffalofacts.com'><img style='float: left;'src='images/wbf_logo.png'width='120'height='120'alt='Water Buffalo Facts Logo'class='logo'/></a></div>"
}


function navMenu() {
    if (document.getElementById('nav-menu').style.margin === '0px') {
        document.getElementById('nav-menu').style.margin = '-100%';
    } else {
        document.getElementById('nav-menu').style.margin = '0px'
    }
}
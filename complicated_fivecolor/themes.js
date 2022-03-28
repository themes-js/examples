// themes.js by CuzImBisonratte
// generated on https://themes-js.github.io/generator/
// this is based on v3.0.0 of https://github.com/themes-js/themes.js


//
// Colorcodes
//

var themes_info_list = [{"name":"Purple","background_color":"#8000ff","text_color":"#ffffff","nav_background_color":"#7000df","nav_text_color":"#e2e2e2","extra_color_one":"#400080","extra_color_two":"#ff00ff"},{"name":"Blue","background_color":"#0080c0","text_color":"#ffffff","nav_background_color":"#0080ff","nav_text_color":"#d6d6d6","extra_color_one":"#004080","extra_color_two":"#0000ff"},{"name":"Green","background_color":"#008000","text_color":"#ffffff","nav_background_color":"#008080","nav_text_color":"#939393","extra_color_one":"#008040","extra_color_two":"#408080"},{"name":"Light","background_color":"#ffffc6","text_color":"#4a4a4a","nav_background_color":"#fdf9a8","nav_text_color":"#868686","extra_color_one":"#e1e1e1","extra_color_two":"#ebfec7"},{"name":"Dark","background_color":"#2e2e2e","text_color":"#ffe8d9","nav_background_color":"#000048","nav_text_color":"#ffffff","extra_color_one":"#521f3f","extra_color_two":"#ffe6ed"}];


//
// Variables
//

var doc_element = document.documentElement;
var number_of_themes = themes_info_list.length;
var current_theme = 0;


//
// Functions
//

// The function that changes the theme
function change_theme(change_to) {
  doc_element.style.setProperty('--body-background-color', themes_info_list[change_to].background_color);
  doc_element.style.setProperty('--body-text-color', themes_info_list[change_to].text_color);
  doc_element.style.setProperty('--nav-background-color', themes_info_list[change_to].nav_background_color);
  doc_element.style.setProperty('--nav-text-color', themes_info_list[change_to].nav_text_color);
  doc_element.style.setProperty('--extra-color-one', themes_info_list[change_to].extra_color_one);
  doc_element.style.setProperty('--extra-color-two', themes_info_list[change_to].extra_color_two);
  document.getElementById('themeToggleButton').innerHTML = themes_info_list[change_to].name;}
// The function thats run on page load
function startTheme() {
    // Get the saved theme
    try {
    theme=localStorage.getItem('theme');
    } catch(e) {
        // If there is no saved theme, set the theme to 0
        theme = 0;
    }
    // Change to the theme
    change_theme(theme);
}
// Run the function on page load
startTheme();



// The function that runs on button click
function toggleTheme() {
    // Add 1 to the current theme
    current_theme++;
    // If the current theme is greater than the number of themes, set it to 0
    if (current_theme > number_of_themes) {
        current_theme = 0;
    }
    // Change the theme
    change_theme(current_theme);
    // Save the theme
    localStorage.setItem('theme', current_theme);
}

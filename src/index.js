import cardTpl from "../src/templates/menu-card.hbs";
import menuList from './menu.json';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
    menu: document.querySelector(".js-menu"),
    body: document.querySelector("body"),
    switcher: document.querySelector(".theme-switch__toggle")
} 

refs.switcher.addEventListener("change", onThemeSwitcherChange)
const menuElementMarkup = createMenu(menuList);
refs.menu.insertAdjacentHTML("afterbegin", menuElementMarkup)
savedTheme()

function onThemeSwitcherChange(evt) {
    // console.log(evt.target.checked);
    if (evt.target.checked) {
        
        changeTheme(Theme.DARK, Theme.LIGHT)
             
    } else {

     changeTheme(Theme.LIGHT, Theme.DARK)
    }
}    
      
function savedTheme() {
    const theme = localStorage.getItem("theme")

    if (theme) {
        refs.body.classList.add(theme);
        refs.switcher.checked = theme === Theme.DARK;
    }
}

function createMenu(obj) {
  return obj.map(cardTpl).join('');
}

function changeTheme(currentTheme, oldTheme) {
    refs.body.classList.add(currentTheme);
    refs.body.classList.remove(oldTheme);
    localStorage.setItem("theme", currentTheme);
}

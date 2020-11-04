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
        // refs.body.classList.add(Theme.DARK)
        // refs.body.classList.remove(Theme.LIGHT)
        // localStorage.setItem("theme", Theme.DARK)

        changeTheme(Theme.DARK, Theme.LIGHT)
        
        
    } else {
        // refs.body.classList.add(Theme.LIGHT);
        // refs.body.classList.remove(Theme.DARK);
        // localStorage.setItem("theme", Theme.LIGHT);

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

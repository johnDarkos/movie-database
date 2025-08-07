import { cleanAppHtml } from "../utils/helpers.js";
import { headerElement } from "../components/header/header.js";
import { searchInput } from "../index.js";
import { buttonElement } from "../components/button/button.js";

export const renderHome = () => {
    cleanAppHtml();
    const app = document.getElementById('app');
    const header = headerElement();
    const searchButton = buttonElement("search__btn");

    const h1 = document.createElement('h1')

    h1.style.width = "100%"
    h1.style.height = "50px"
    h1.style.margin = "0 auto"
    h1.style.textAlign = 'center'
    h1.style.marginTop = "100px"
    h1.textContent = 'Здесь пока нет контента, но он обязательно будет! :))'
    h1.style.color = '#fff'
    h1.style.fontSize = '40px'
    
    // Создаем контейнер для поиска
    const searchContainer = document.createElement('div');
    searchContainer.classList.add('search-container');
    searchContainer.appendChild(searchInput);
    searchContainer.appendChild(searchButton);
    
    app.append(header);
    app.append(h1);

}
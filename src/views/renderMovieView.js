import { cleanAppHtml } from "../utils/helpers.js";
import { headerElement } from "../components/header/header.js";
import { mainElement } from "../components/main/main.js";
import { searchInput, searchButton } from "../index.js";
import { buttonElement } from "../components/button/button.js";

export const renderMovie = (id) => {
    cleanAppHtml();
    const app = document.getElementById('app');
    const navigation = headerElement();
    
    const searchContainer = document.createElement('div');
    searchContainer.classList.add('search-container');
    searchContainer.appendChild(searchInput);
    searchContainer.appendChild(searchButton);
    
    const main = mainElement(searchContainer);

    if (!app) return;
    if (!navigation) return;

    // TODO: Add movie details using the id parameter
    console.log('Rendering movie with ID:', id);

    app.append(navigation);
    app.append(main);
}
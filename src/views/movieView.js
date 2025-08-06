import { cleanAppHtml } from "../utils/helpers.js";
import { headerElement } from "../components/header.js";

export const renderMovie = (id) => {
    cleanAppHtml();
    const app = document.getElementById('app');
    const  navigation = headerElement();

    if (!app) return;
    if (!navigation) return;

    const section = document.createElement('section');
    section.className = 'movie-section';

    const title = document.createElement('h2');
    title.textContent = `Movie #${id}`;
    section.appendChild(title);

    const img = document.createElement('img');
    img.src = 'https://via.placeholder.com/300x450?text=Movie+Poster';
    img.alt = 'Movie Poster';
    img.style.display = 'block';
    img.style.marginBottom = '1rem';
    section.appendChild(img);

    const desc = document.createElement('p');
    desc.textContent = 'Описание фильма. Здесь будет краткая информация о фильме.';
    section.appendChild(desc);

    const idInfo = document.createElement('div');
    idInfo.textContent = `ID фильма: ${id}`;
    idInfo.style.fontSize = '0.9em';
    idInfo.style.color = '#888';
    section.appendChild(idInfo);

    app.append(navigation);
    app.append(section);
}
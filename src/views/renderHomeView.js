
import { cleanAppHtml } from "../utils/helpers.js";
import { headerElement } from "../components/header.js";


export const renderHome = () => {
    cleanAppHtml();
    const app = document.getElementById('app');
    const header = headerElement();

    const h1 = document.createElement('h1')
    h1.textContent = 'hello!'
    h1.style.color = '#fff'
    h1.style.fontSize = '40px'
    
    app.append(header);
    app.append(h1)

}
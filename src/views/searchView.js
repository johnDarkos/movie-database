import { cleanAppHtml } from "../utils/helpers.js";

export const renderSearch = () => {
   const app = document.getElementById('app');
   if (!app) return;
   cleanAppHtml();
   const searchInput = document.createElement("input");
   searchInput.type = 'search';
   app.append(searchInput);
}
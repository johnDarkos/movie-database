import { renderHome } from "../views/renderHomeView.js";
import { renderMovie } from "../views/movieView.js";

export const handleRoute = () => {
    let hash = window.location.hash;

    if (hash.startsWith('#/')) {
      hash = hash.slice(2); // удаляем "#/"
    } else if (hash.startsWith('#')) {
      hash = hash.slice(1); // удаляем "#"
    }
    
    const [route, id] = hash.split('/');
    
    

   console.log(route, id)

   switch (route) {
       case '':
        renderHome();
        break;
       case 'home':
           renderHome();
           break;
       case 'movie':
           renderMovie(id);
           break;
       // case 'search':
       //     renderSearch();
       //     break;
       default:
           console.log('ROUTE NOT MATCHED:', route);
           break;
   }
}

export const handleChangeRoute = () => {
   window.addEventListener('hashchange', handleRoute);
}

export const initRoute = () => {
   window.addEventListener("DOMContentLoaded", handleRoute);
}


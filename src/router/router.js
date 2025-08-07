import { renderHome } from "../views/renderHomeView.js";
import { renderMovie } from "../views/renderMovieView.js";

export const handleRoute = () => {
    let hash = window.location.hash;

    if (hash.startsWith('#/')) {
      hash = hash.slice(2); 
    } else if (hash.startsWith('#')) {
      hash = hash.slice(1); 
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
           if (id) {
               renderMovie(id);
           } else {
               console.log('Movie ID is required');
               renderHome();
           }
           break;
       // case 'search':
       //     renderSearch();
       //     break;
       default:
           console.log('ROUTE NOT MATCHED:', route);
           renderHome();
           break;
   }
}

export const handleChangeRoute = () => {
   window.addEventListener('hashchange', handleRoute);
}

export const initRoute = () => {
   window.addEventListener("DOMContentLoaded", handleRoute);
}


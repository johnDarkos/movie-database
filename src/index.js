import { handleChangeRoute, initRoute } from "./router/router.js";
import { searchInputElement } from "./components/main/searchInput.js";
import { buttonElement } from "./components/button/button.js";
import { setState, getState } from "./state/state.js";

const searchInput = searchInputElement();
const searchButton = buttonElement("search__btn");

searchInput.addEventListener('input', (e) => {
   const movieName = e.target.value;
   setState({searchQuery: movieName});
   
   console.log(getState())
})

const app = () => {
   initRoute();
   handleChangeRoute();

   console.log(getState())
}

app();

export { searchInput, searchButton };

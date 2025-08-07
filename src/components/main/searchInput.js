export const searchInputElement = () => {
    const searchInput = document.createElement('input') ;
          searchInput.type = 'search';
          searchInput.placeholder = 'write movie...'; 
          searchInput.classList.add('search__movie');

          return searchInput;
}
 
const state = {
   searchQuery: '',
   searchResults: [],
   movieDetails: {},
   cache: {}, // query -> массив фильмов
 };

 export const setState = (newState) => {
   Object.assign(state, newState);
 }
 
 export const getState = () => {
   return state;
 }
 

 
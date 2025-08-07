import { API_KEY, BASE_URL } from "./config.js";
import { setState } from "../state/state.js";

export async function getMoviesBySearch(query) {
    
    try {
       const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=${query}`);

    if(response.ok){
        const movieData = await response.json();
        if (movieData.Response === "False") {
            console.error('API Error:', movieData.Error);
            return;
        }
        setState({ searchResults: movieData })
    } else {
        console.error('HTTP Error:', response.status);
    }
    }
    catch(err){
        console.error('Network Error:', err);
        throw new Error(err)
    }
  }
  





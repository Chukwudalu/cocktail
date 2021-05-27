const api_key = 9973533;
const base_api = `https://www.thecocktaildb.com/api/json/v2/${api_key}`;

// Get random cocktails
export const getRandomCocktails = () => (`${base_api}/randomselection.php`);

// Get popular cocktails
export const getPopularCocktails = () => (`${base_api}/popular.php`);

// Get latest cocktails
export const getLatestCocktails = () => (`${base_api}/latest.php`);

// Search cocktail
export const searchCocktails = (name) => (`${base_api}/search.php?s=${name}`)

//detail
export const getDetail = (id) => (`${base_api}/lookup.php?i=${id}`)



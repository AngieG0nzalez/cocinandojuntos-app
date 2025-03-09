const API_MEALDB = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const API_COUNTRIES = "https://www.themealdb.com/api/json/v1/1/filter.php?a=";

export const searchRecipes = async (query) => {
  try {
    const response = await fetch(`${API_MEALDB}${query}`);
    const data = await response.json();
    return data.meals || [];
  } catch (error) {
    console.error("Error al buscar recetas", error);
    return [];
  }
};

export const fetchRecipesByCountry = async (country) => {
  try {
    const response = await fetch(`${API_COUNTRIES}${country}`);
    const data = await response.json();
    return data.meals || [];
  } catch (error) {
    console.error("Error al obtener recetas del país", error);
    return [];
  }
};

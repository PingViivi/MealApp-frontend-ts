import axios from 'axios';
import { IRecipe } from '../components/Recipe/Recipe';

const baseUrl = 'http://localhost:3001/api/categories/';

const getRecipesByCategory = (category:string) => {
    const request = axios.get(baseUrl + category);
    return request.then(response => {
        const apiRecipeData = response.data.meals;
        const formattedRecipes = apiRecipeData.map((recipe: any) => formatRecipeList(recipe, category));
        return formattedRecipes;
    });
};

const formatRecipeList = (apiRecipeData: any, category?:string) => {
    const recipe = {
        "@context": "https://schema.org",
        "@type": "Recipe",
        "id": apiRecipeData.idMeal,
        "name": apiRecipeData.strMeal,
        "category": category,
        "image": apiRecipeData.strMealThumb,
    };

    return recipe;
};

const saveRecipe = async (recipe:IRecipe) => {
    const mealUrl = 'http://localhost:3001/db/myrecipes'; 
    try {
        await axios.post(mealUrl, recipe);
        alert('Recipe saved')
    } catch (error) {
        throw new Error('Failed to save recipe frontendside');
    }
};
  
export default { 
    getRecipesByCategory: getRecipesByCategory, 
    saveRecipe: saveRecipe,
};
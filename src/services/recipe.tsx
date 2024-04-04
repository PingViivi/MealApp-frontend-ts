import axios from 'axios';
import { IRecipe } from '../components/Recipe/Recipe';
import MyRecipesservice from './myrecipes';
import Mealservice from './meals';

const getApiRecipe = async (meal: string) => {
    try {
        const baseUrl = 'http://localhost:3001/api/meals/' + meal;
        const response = await axios.get(baseUrl);
        const apiRecipeData = response.data.recipe[0];
        return formatRecipe(apiRecipeData);
    } catch (error) {
        throw new Error('Failed to fetch API recipe');
    }
};

const getDbRecipe = async (meal: string) => {
    try {
        const baseUrl = 'http://localhost:3001/db/myrecipes/' + meal;
        const response = await axios.get(baseUrl);
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch database recipe');
    }
};

const formatRecipe = (apiRecipeData: any) => {
    const instructionsArray = apiRecipeData.strInstructions.split(/\n|\./g).filter((instruction:string) => instruction.trim() !== '');

    const recipe = {
        "@context": "https://schema.org",
        "@type": "Recipe",
        "id": apiRecipeData.idMeal,
        "name": apiRecipeData.strMeal,
        "category": apiRecipeData.strCategory,
        "area": apiRecipeData.strArea,
        "author": "Unknown", // You can add the author if available in the API response
        "datePublished": new Date().toISOString(), // You can add the date if available in the API response
        "description": "", // You can add a description if available in the API response
        "image": apiRecipeData.strMealThumb,
        "recipeIngredient": [],
        "liked": false,
        "recipeInstructions": instructionsArray,
        "recipeYield": "1 serving" // You can adjust this based on the recipe
    };

    // Add ingredients
    for (let i = 1; i <= 20; i++) {
        const measure: any = apiRecipeData['strMeasure' + i];
        const ingredient: any = apiRecipeData['strIngredient' + i];
        if (ingredient && measure) {
            recipe.recipeIngredient.push(`${measure.trim()} ${(ingredient).trim()}`);
        } else {
            break; // Stop looping if there are no more ingredients
        }
    }

    return recipe;
};

const likeRecipeHandler = async (recipeId: string) => {
    if (!recipeId) return;

    try {
        const RecipeData = await getApiRecipe(recipeId)
        const foundRecipes = await MyRecipesservice.findRecipeByName(RecipeData.name);
        if (foundRecipes) {
            console.error(RecipeData.name + ' recipe already in db');
            alert(RecipeData.name + ' recipe already saved')
            // Here it should delete it from the database
        } else {
            await Mealservice.saveRecipe(RecipeData);
            console.log(RecipeData.name + ' recipe saved');
        }
    } catch (error) {
        console.error('Error while finding recipe:', error);
    } 
    
};

export default { 
    getApiRecipe, 
    getDbRecipe,
    likeRecipeHandler
};

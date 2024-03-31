import axios from 'axios';

const apiRecipe = async (meal: string) => {
    const baseUrl = 'http://localhost:3001/api/meals/' + meal;
    const response = await axios.get(baseUrl);
    return response.data.recipe[0];
};

const formatRecipe = (apiRecipeData: any) => {
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
        "recipeInstructions": apiRecipeData.strInstructions,
        "recipeYield": "1 serving" // You can adjust this based on the recipe
    };

    // Add ingredients
    for (let i = 1; i <= 20; i++) {
        const ingredient = apiRecipeData['strIngredient' + i];
        const measure = apiRecipeData['strMeasure' + i];
        if (ingredient && measure) {
            recipe.recipeIngredient.push(`${measure.trim()} ${ingredient.trim()}`);
        } else {
            break; // Stop looping if there are no more ingredients
        }
    }

    return recipe;
};

export const getRecipe = async (meal: string) => {
    const apiRecipeData = await apiRecipe(meal);
    return formatRecipe(apiRecipeData);
};

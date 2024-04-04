import axios from 'axios'
const baseUrl = 'http://localhost:3001/db/myrecipes/' 
import { IRecipe } from '../components/Recipe/Recipe';

const getMyRecipes = async () => {
    try {
        const response = await axios.get(baseUrl);
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch recipes');
    }
};

const findRecipeByName = async (recipeName:string) => {
    try {
        const recipes = await getMyRecipes(); // Retrieve all recipes
        const foundRecipes = recipes.filter((recipe: IRecipe) => recipe.name === recipeName); // Filter recipes by name
        if (foundRecipes.length === 0) {
            return false;
        } else {
            return true
        }
    } catch (error) {
        throw new Error('Failed to fetch recipe by name');
    }
};


export default { 
    getMyRecipes: getMyRecipes, 
    findRecipeByName: findRecipeByName, 
}
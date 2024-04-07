import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom'
import RecipeSercive from '../services/recipe'; // Import getRecipe
import Recipe, { IRecipe } from '../components/Recipe/Recipe'

type RecipeType = 'api' | 'db';

const RecipePage = () => {
    const params = useParams<{ recipe: string }>();
    const RecipeId = params.recipe ?? '';
    const [recipe, setRecipe] = useState<IRecipe | null>(null);
    const [type, setType] = useState<RecipeType>('api');
    const location = useLocation();
    
    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                if (location.pathname.includes('/myrecipes/')) {
                    let recipeData = await RecipeSercive.getDbRecipe(RecipeId);
                    setType('db');
                    setRecipe(recipeData);
                } else {
                    let recipeData = await RecipeSercive.getApiRecipe(RecipeId);
                    setType('api');
                    setRecipe(recipeData);
                }
            } catch (error) {
                console.error('Error fetching recipe:', error);
            }
        };

        fetchRecipe();
    }, [RecipeId]);

    return (
        <>
            {recipe && <Recipe type={type} recipe={recipe} />}
        </>
    );
}

export default RecipePage;
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { getRecipe } from '../services/recipe'; // Import getRecipe
import Recipe, { IRecipe } from '../components/Recipe'

const RecipePage = () => {
    const params = useParams<{ recipe: string }>();
    const RecipeId = params.recipe ?? '';
    const [recipe, setRecipe] = useState<IRecipe | null>(null);

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const recipeData = await getRecipe(RecipeId); // Call getRecipe function
                setRecipe(recipeData);
            } catch (error) {
                console.error('Error fetching recipe:', error);
            }
        };

        fetchRecipe();
    }, [RecipeId]);

    return (
        <>
            {recipe && <Recipe recipe={recipe} />}
        </>
    );
}

export default RecipePage;
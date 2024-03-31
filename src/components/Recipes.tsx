import React from 'react'
import { useEffect, useState } from 'react'
import Mealservice from '../services/meals'
import MyRecipesservice from '../services/myrecipes'
import RecipeCard from './RecipeCard'
import { IRecipe } from './RecipeCard'

interface RecipesProps {
    category: string;
}

const Recipes: React.FC<RecipesProps> = ({ category }) => {
    const [meals, setMeals] = useState<IRecipe[]>([]);
    const [like, setLike] = useState<boolean>(false);

    useEffect(()=> {
        Mealservice.getMealsByCategory(category)
        .then(initialMeals => {
            setMeals(initialMeals.meals); // Assuming initialMeals is an object with a 'meals' property containing an array of meals
        })
        .catch(error => {
            console.error('Error fetching meals:', error);
        });
    }, [category]); // Added category to dependency array to rerun effect when category changes

    const likeHandler = async (id: string) => {
        const meal = meals.find(meal => meal.idMeal === id);
        if (!meal) return; // Ensure meal is not undefined
        try {
            let foundRecipes = await MyRecipesservice.findRecipeByName(meal.strMeal);
            if (foundRecipes) {
                console.error(meal.strMeal, 'recipe already in db');
                // Here it should delete it from the database
            } else {
                await Mealservice.saveRecipe(meal.strMeal);
                console.log('Recipe saved');
            }
        } catch (error) {
            console.error('Error while finding recipe:', error);
        } 
    };
    return (
        <>
            <h2>{category} recipes</h2>
            {
                meals?.map((meal) => (
                    <RecipeCard isLiked={like} like={() => likeHandler(meal.idMeal)} category={category} meal={meal} key={meal.idMeal}/>
                    // <RecipeCard like={likeHandler} category={category} meal={meal} key={meal.idMeal}/>
                ))
            }  
        </>
    )
}

export default Recipes
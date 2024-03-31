import React from 'react'
import { useEffect, useState } from 'react'
import Mealservice from '../../services/meals'
import MyRecipesservice from '../../services/myrecipes'
import RecipeCard from '../RecipeCard/RecipeCard'
import { IRecipe } from '../Recipe/Recipe';
import './Recipes.scss';

interface RecipesProps {
    category: string;
}

const Recipes: React.FC<RecipesProps> = ({ category }) => {
    const [meals, setMeals] = useState<IRecipe[]>([]);
    const [like, setLike] = useState<boolean>(false);

    useEffect(()=> {
        Mealservice.getRecipesByCategory(category)
        .then(initialMeals => {
            setMeals(initialMeals);
        })
        .catch(error => {
            console.error('Error fetching meals:', error);
        });
    }, [category]);

    // Log the updated meals whenever it changes
    useEffect(() => {
        console.log('Updated meals:', meals);
    }, [meals]);

    const likeHandler = async (id: string) => {
        const meal = meals.find(meal => meal.id === id);
        if (!meal) return; // Ensure meal is not undefined
        try {
            let foundRecipes = await MyRecipesservice.findRecipeByName(meal.name);
            if (foundRecipes) {
                console.error(meal.name, 'recipe already in db');
                // Here it should delete it from the database
            } else {
                await Mealservice.saveRecipe(meal.name);
                console.log('Recipe saved');
            }
        } catch (error) {
            console.error('Error while finding recipe:', error);
        } 
    };
    
const count = meals.length

    return (
        <>
            <div className="title flex">
                <h2>{category} recipes: </h2>
                <span>{count}</span>
            </div>
            <section className="Recipes">
                <div className="flex recipe-list">
                    {
                        meals?.map((meal) => (
                            <RecipeCard isLiked={like} like={() => likeHandler(meal.id)} category={category} meal={meal} key={meal.id}/>
                            // <RecipeCard like={likeHandler} category={category} meal={meal} key={meal.idMeal}/>
                        ))
                    }  
                </div>
            </section>
        </>
    )
}

export default Recipes
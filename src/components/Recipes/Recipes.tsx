import React from 'react'
import { useEffect, useState } from 'react'
import Mealservice from '../../services/meals'
import Recipesservice from '../../services/recipe'
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
        // console.log('Updated meals:', meals);
    }, [meals]);

    const likeHandler = async (recipeId: string) => {
        Recipesservice.likeRecipeHandler(recipeId)
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
                            <RecipeCard path={`/categories/${category}`} isLiked={like} like={() => likeHandler(meal.id)} category={category} meal={meal} key={meal.id}/>
                            // <RecipeCard like={likeHandler} category={category} meal={meal} key={meal.idMeal}/>
                        ))
                    }  
                </div>
            </section>
        </>
    )
}

export default Recipes
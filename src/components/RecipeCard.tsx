import React from 'react'
import { Link } from 'react-router-dom';

export interface IRecipe {
    idMeal: string;
    strMeal: string;
    like: (id: string) => void; // Function to handle liking a recipe
    // Define other properties of a recipe
}

interface RecipeCardProps {
    like: (id: string) => void;
    meal: IRecipe;
    category: string;
    isLiked: boolean; // Assuming you pass the isLiked prop to indicate whether the recipe is liked
}

const RecipeCard: React.FC<RecipeCardProps> = ({ like, meal, category, isLiked }) => {
  return (
    <>
        <button onClick={() => like(meal.idMeal)}> {isLiked ? 'Liked' : 'Like'}</button>
        <Link className='meal-item' to={`/categories/${category}/${meal.idMeal}`}>
            {meal.strMeal}
        </Link>
    </>
  )
}

export default RecipeCard

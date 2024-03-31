import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Recipe.scss';
import PublicRoundedIcon from '@mui/icons-material/PublicRounded';
import AccessTimeFilledRoundedIcon from '@mui/icons-material/AccessTimeFilledRounded';
import RestaurantRoundedIcon from '@mui/icons-material/RestaurantRounded';
import ClassRoundedIcon from '@mui/icons-material/ClassRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';

export interface IRecipe {
    id: string;
    name: string;
    category?: string;
    duration?: string;
    recipeYield?: string;
    description?: string;
    area?: string;
    image?: string;
    recipeIngredient: string[];
    recipeInstructions: string;
    isLiked?: boolean;
    like?: (id: string) => void;
}
const Recipe: React.FC<{ recipe: IRecipe }> = ({ recipe }) => {
    const navigate = useNavigate();
    
    return (
        <>
        <section className="Recipe">
            <button className='button' onClick={() => navigate(-1)}>Go Back</button>
            <div className="flex top-info">
                <div className="flex-item six image">
                    <img src={recipe.image} alt={"Image of a " + recipe.name} />
                </div>
                <div className="flex-item six info flex">
                    <h1>{recipe.name}</h1>
                    <div className="details">
                        <span>
                            {recipe.duration ? <AccessTimeFilledRoundedIcon/> + recipe.duration :''}
                        </span>
                        <span>
                            {recipe.recipeYield ? <RestaurantRoundedIcon/> : ''}
                            {recipe.recipeYield}
                        </span>
                        <span>
                            <ClassRoundedIcon/>
                            {recipe.category}
                        </span>
                        <span>
                            <PublicRoundedIcon/>
                            {recipe.area}
                        </span>
                    </div>
                    <div className="desc">
                        {recipe.description}
                    </div>
                    <button className='like'>
                        Lisää suosikkeihin
                        <FavoriteBorderRoundedIcon/>
                    </button>
                </div>
            </div>
            <div className="flex guide">
                <div className="flex-item four ingredients">
                    <h2>Ingredients</h2>
                    
                    {recipe.recipeIngredient?.map((ingredient) => (
                        <div className='ingredient'>{ingredient}</div>
                    )) }
  
                </div>
                <div className="flex-item eight instructions">
                    <h2>Instructions</h2>
                    {/* {recipe.recipeInstructions?.map((instruction) => (
                        <div>{instruction}</div>
                    )) } */}
                    {recipe.recipeInstructions}
                    
                </div>
            </div>
        </section>
        </>
    )
}

export default Recipe
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Recipe.scss';
import PublicRoundedIcon from '@mui/icons-material/PublicRounded';
import AccessTimeFilledRoundedIcon from '@mui/icons-material/AccessTimeFilledRounded';
import RestaurantRoundedIcon from '@mui/icons-material/RestaurantRounded';
import ClassRoundedIcon from '@mui/icons-material/ClassRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import Mealservice from '../../services/meals'
import MyRecipesservice from '../../services/myrecipes'
import LikeButton from './LikeButton';
import Recipesservice from '../../services/recipe'
import Button from '../Button/Button';
import KeyboardReturnRoundedIcon from '@mui/icons-material/KeyboardReturnRounded';
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
    recipeInstructions: string[];
    liked: boolean;
    like?: (id: string) => void;
}
const Recipe: React.FC<{ recipe: IRecipe }> = ({ recipe }) => {
    const navigate = useNavigate();

    // const likeHandler = async (recipe: IRecipe) => {
    //     console.log(recipe)
    //     // const meal = meals.find(meal => meal.id === id);
    //     if (!recipe) return; // Ensure meal is not undefined
    //     try {
    //         let foundRecipes = await MyRecipesservice.findRecipeByName(recipe.name);
    //         if (foundRecipes) {
    //             alert('Recipe has already been saved')
    //             console.error(recipe.name, 'recipe already in db');
    //             // Here it should delete it from the database
    //         } else {
    //             await Mealservice.saveRecipe(recipe);
    //             console.log('Recipe saved');
    //         }
    //     } catch (error) {
    //         console.error('Error while finding recipe:', error);
    //     } 
    // };

    const likeHandler = async (recipeId: string) => {
        Recipesservice.likeRecipeHandler(recipeId)
    };

    const [selectedRows, setSelectedRows] = useState<number[]>([]);
    const RowToggle = (index:number) => {
        // Check if the index is already in selectedRows
        const isSelected = selectedRows.includes(index);

        // Toggle the index in selectedRows
        if (isSelected) {
            setSelectedRows(selectedRows.filter((item) => item !== index));
        } else {
            setSelectedRows([...selectedRows, index]);
        }
    };

    const [selectedTab, setSelectedTab] = useState<string>('ingredients'); // Default selected tab

    const handleTabClick = (tab: string) => {
        setSelectedTab(tab);
    };
    
    return (
        <>
        <section className="Recipe">
            <Button
                onClick={() => navigate(-1)}
                iconBefore={<KeyboardReturnRoundedIcon/>}
                class={'back'}
            >
                Go Back
            </Button>
            <div className="flex top-info">
                <div className="flex-item six image">
                    <img src={recipe.image} alt={"Image of a " + recipe.name} />
                </div>
                <div className="flex-item six info flex">
                    <h1>{recipe.name}</h1>
                    <div className="details">
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
                        <span>
                            {recipe.duration ? <AccessTimeFilledRoundedIcon/> + recipe.duration :''}
                        </span>
                    </div>
                    <div className="desc">
                        {recipe.description}
                    </div>
                    
                    {/* <button className='like' onClick={() => likeHandler(recipe)}>
                        Lisää suosikkeihin
                        <FavoriteBorderRoundedIcon/>
                    </button> */}
                    <LikeButton isLiked={false} onClick={() => likeHandler(recipe.id)} visibility={true}/>
                </div>
            </div>
            <div className="flex guide">
                <div 
                    onClick={() => handleTabClick('ingredients')}
                    className={`flex-item four ingredients title ${selectedTab === 'ingredients' ? 'selected' : ''} ` }
                    >
                    <h2>Ingredients</h2>
                </div>
                <div
                    onClick={() => handleTabClick('instructions')} 
                    className={`flex-item eight instructions title ${selectedTab === 'instructions' ? 'selected' : ''} ` }
                    >
                    <h2>Instructions</h2>
                </div>
                <div 
                    className={`flex-item four ingredients ${selectedTab === 'ingredients' ? 'selected' : ''} ` }
                >
                    {recipe.recipeIngredient?.map((ingredient) => (
                        <div className='ingredient'>{ingredient}</div>
                    ))}
                </div>
                <div 
                className={`flex-item eight instructions ${selectedTab === 'instructions' ? 'selected' : ''} ` }
                >
                    {recipe.recipeInstructions?.map((instruction, i) => (
                        <div 
                            className={`instruction flex ${selectedRows.includes(i) ? 'selected' : ''}`}
                            onClick={() => RowToggle(i)}
                            key={i}
                        >
                            <div className='number'>{i+1}</div>
                            <div className='text'>
                                {instruction}
                            </div>
                         </div>
                    )) }
                </div>
            </div>
        </section>
        </>
    )
}

export default Recipe
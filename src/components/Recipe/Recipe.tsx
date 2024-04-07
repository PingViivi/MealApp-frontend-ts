import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Recipe.scss';
import PublicRoundedIcon from '@mui/icons-material/PublicRounded';
import AccessTimeFilledRoundedIcon from '@mui/icons-material/AccessTimeFilledRounded';
import RestaurantRoundedIcon from '@mui/icons-material/RestaurantRounded';
import ClassRoundedIcon from '@mui/icons-material/ClassRounded';
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

interface RecipeProps {
    recipe: IRecipe;
    type: 'api' | 'db'; // Type can be 'api' or 'db'
}

const Recipe: React.FC<RecipeProps> = ({ recipe, type }) => {
    const navigate = useNavigate();
    
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
        <section className={'Recipe' + ' ' + type}>
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

                    <LikeButton isLiked={type === 'db' ? true : false} onClick={() => likeHandler(recipe.id)} visibility={true}/>
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
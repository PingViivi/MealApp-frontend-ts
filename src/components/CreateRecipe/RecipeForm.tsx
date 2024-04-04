import React, { useState, FormEvent } from 'react';
import { IRecipe } from '../Recipe/Recipe'; 
import MyRecipeService from '../../services/myrecipes'
import Button from '../Button/Button';
import './RecipeForm.scss'

interface RecipeFormProps {
    closeModule: (arg: boolean) => void;
}

const RecipeForm: React.FC<RecipeFormProps> = ({ closeModule }) => {

    const [recipe, setRecipe] = useState<IRecipe>({
        id: '',
        name: '',
        category: '',
        duration: '',
        recipeYield: '',
        description: '',
        area: '',
        image: '',
        recipeIngredient: [],
        recipeInstructions: [],
        liked: false,
    });

    // Handle form submission
    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        MyRecipeService.createNewRecipe(recipe)
        // Do something with the recipe object (e.g., submit to backend)
        console.log(recipe);
    };

    // Handle input changes
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setRecipe(prevRecipe => ({
            ...prevRecipe,
            [name]: value
        }));
    };

    return (
        <form className='RecipeForm flex' onSubmit={handleSubmit}>
            <label className='flex-item six flex column'>
                Name*
                <input required className='flex-item' type="text" name="name" value={recipe.name} onChange={handleInputChange} />
            </label>
            <label className='flex-item six flex column'>
                Category
                <input className='flex-item' type="text" name="category" value={recipe.category || ''} onChange={handleInputChange} />
            </label>
            <label className='flex-item six flex column'>
                Area:
                <input className='flex-item' type="text" name="area" value={recipe.area || ''} onChange={handleInputChange} />
            </label>
            <label className='flex-item six flex column'>
                Image:
                <input className='flex-item' type="text" name="image" value={recipe.image || ''} onChange={handleInputChange} />
            </label>
            <label className='flex-item six flex column'>
                Recipe Yield:
                <input className='flex-item' type="text" name="recipeYield" value={recipe.recipeYield || ''} onChange={handleInputChange} />
            </label>
            <label className='flex-item six flex column'>
                Description:
                <textarea className='flex-item' name="description" value={recipe.description || ''} onChange={handleInputChange} />
            </label>
    
            <div className="flex buttons">
                <Button onClick={() => closeModule(false)}>Cancel</Button>
                <Button type="submit">Submit</Button>
            </div>
        </form>
    )
}

export default RecipeForm
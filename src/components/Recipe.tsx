import React, { useEffect } from 'react'

export interface IRecipe {
    id: string;
    name: string;
    category?: string;
    duration?: string;
    recipeYield?: string;
    area?: string;
    image?: string;
    recipeIngredient: string[];
    recipeInstructions: string;
    isLiked?: boolean;
    like?: (id: string) => void;
}

const Recipe: React.FC<{ recipe: IRecipe }> = ({ recipe }) => {
    return (
        <>
            <h1>{recipe.name}</h1>
            <div className="image">
                <img src={recipe.image} alt={"Image of a " + recipe.name} />
            </div>
            <div className="info">
                <h2>Information</h2>
                <span>{recipe.duration}</span>
                <span>{recipe.recipeYield}</span>
                <span>{recipe.category}</span>
                <span>{recipe.area}</span>
            </div>
            <div className="ingredients">
                <h2>Ingredients</h2>
                {recipe.recipeIngredient}
            </div>
            <div className="instructions">
                <h2>Instructions</h2>
                {recipe.recipeInstructions}
            </div>
        </>
    )
}

export default Recipe